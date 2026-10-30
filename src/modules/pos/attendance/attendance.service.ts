import { prisma } from '@/core/db/prisma';

export interface AttendanceFilterOptions {
  date?: string;
  month?: string; // YYYY-MM
  status?: string;
  employeeName?: string;
  limit?: number;
}

export interface PayrollConfig {
  defaultBaseSalary?: number;
  dailyAllowance?: number;
  latePenaltyPerMinute?: number;
  alphaPenaltyPerDay?: number;
}

export class PosAttendanceService {
  /**
   * Mengambil riwayat absensi terpadu
   */
  static async getAttendances(businessId: number, options?: AttendanceFilterOptions) {
    const where: any = { businessId };

    if (options?.date) {
      where.date = options.date;
    } else if (options?.month) {
      where.date = { startsWith: options.month };
    }

    if (options?.status && options.status !== 'all') {
      where.status = options.status;
    }

    if (options?.employeeName) {
      where.employeeName = { contains: options.employeeName };
    }

    return await prisma.posAttendance.findMany({
      where,
      orderBy: [
        { date: 'desc' },
        { checkinTime: 'desc' },
      ],
      take: options?.limit || 100,
    });
  }

  /**
   * Ringkasan absensi hari ini
   */
  static async getTodaySummary(businessId: number) {
    const today = new Date().toISOString().slice(0, 10);
    const attendances = await prisma.posAttendance.findMany({
      where: { businessId, date: today },
    });

    const totalPresent = attendances.filter((a) => a.checkinTime !== null).length;
    const onTime = attendances.filter((a) => a.status === 'Tepat Waktu').length;
    const late = attendances.filter((a) => a.status === 'Terlambat').length;
    const leave = attendances.filter((a) => a.status === 'Izin' || a.status === 'Sakit').length;

    // Ambil info konfigurasi outlet
    const biz = await prisma.posBusiness.findUnique({
      where: { id: businessId },
      select: {
        lastAttendanceSync: true,
        slovvSyncEnabled: true,
        slovvBaseUrl: true,
      },
    });

    return {
      today,
      totalPresent,
      onTime,
      late,
      leave,
      lastSync: biz?.lastAttendanceSync ? biz.lastAttendanceSync.toISOString() : null,
      isExternalSyncEnabled: biz?.slovvSyncEnabled ?? false,
      externalBaseUrl: biz?.slovvBaseUrl || null,
      list: attendances,
    };
  }

  /**
   * Pencatatan absensi internal (untuk tenant umum / non-Slovv)
   */
  static async recordInternalAttendance(
    businessId: number,
    data: {
      employeeName: string;
      employeeId?: string;
      shift?: string;
      status?: string;
      checkinTime?: string;
      checkoutTime?: string;
      lateMinutes?: number;
      photoUrl?: string;
    }
  ) {
    const today = new Date().toISOString().slice(0, 10);
    const nowTime = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }).replace('.', ':');

    const existing = await prisma.posAttendance.findFirst({
      where: {
        businessId,
        date: today,
        employeeName: data.employeeName,
      },
    });

    if (existing) {
      // Jika sudah check-in, anggap aksi ini sebagai check-out
      return await prisma.posAttendance.update({
        where: { id: existing.id },
        data: {
          checkoutTime: data.checkoutTime || nowTime,
          status: data.status || existing.status,
        },
      });
    }

    // Buat log check-in baru
    return await prisma.posAttendance.create({
      data: {
        businessId,
        employeeName: data.employeeName,
        employeeId: data.employeeId || null,
        source: 'internal',
        date: today,
        checkinTime: data.checkinTime || nowTime,
        shift: data.shift || 'Shift Kasir',
        status: data.status || (data.lateMinutes && data.lateMinutes > 0 ? 'Terlambat' : 'Tepat Waktu'),
        lateMinutes: Number(data.lateMinutes || 0),
        photoUrl: data.photoUrl || null,
      },
    });
  }

  /**
   * Kalkulasi Rekap Gaji Bulanan (Payroll Engine)
   */
  static async calculatePayroll(businessId: number, period: string, config?: PayrollConfig) {
    // Default konfigurasi penggajian kafe F&B
    const baseSalaryDefault = config?.defaultBaseSalary ?? 3000000;
    const dailyAllowance = config?.dailyAllowance ?? 15000; // Uang makan/transport per hari hadir
    const lateDeductionPerMinute = config?.latePenaltyPerMinute ?? 1000; // Denda Rp 1.000 / menit terlambat
    const alphaDeductionPerDay = config?.alphaPenaltyPerDay ?? 100000; // Potongan Rp 100.000 / alpha

    // 1. Ambil seluruh data absensi pada periode bulan YYYY-MM
    const attendances = await prisma.posAttendance.findMany({
      where: {
        businessId,
        date: { startsWith: period },
      },
    });

    if (attendances.length === 0) {
      // Coba ambil payroll yang sudah tersimpan sebelumnya
      const existingPayrolls = await prisma.posPayroll.findMany({
        where: { businessId, period },
      });
      return existingPayrolls;
    }

    // 2. Kelompokkan data absensi per nama karyawan
    const employeeMap = new Map<string, {
      employeeId?: string | null;
      position?: string | null;
      totalPresent: number;
      totalLateMinutes: number;
      totalAlpha: number;
      totalLeave: number;
    }>();

    for (const a of attendances) {
      const name = a.employeeName.trim();
      if (!employeeMap.has(name)) {
        employeeMap.set(name, {
          employeeId: a.employeeId,
          position: a.shift || 'Staff',
          totalPresent: 0,
          totalLateMinutes: 0,
          totalAlpha: 0,
          totalLeave: 0,
        });
      }

      const rec = employeeMap.get(name)!;
      if (a.status === 'Tepat Waktu' || a.status === 'Terlambat' || a.checkinTime) {
        rec.totalPresent += 1;
        rec.totalLateMinutes += a.lateMinutes || 0;
      } else if (a.status === 'Alpha') {
        rec.totalAlpha += 1;
      } else if (a.status === 'Izin' || a.status === 'Sakit') {
        rec.totalLeave += 1;
      }
    }

    // 3. Simpan / Perbarui ke tabel PosPayroll
    const payrollResults = [];

    for (const [name, stats] of employeeMap.entries()) {
      const allowance = stats.totalPresent * dailyAllowance;
      const lateDeduction = stats.totalLateMinutes * lateDeductionPerMinute;
      const alphaDeduction = stats.totalAlpha * alphaDeductionPerDay;
      const totalDeduction = lateDeduction + alphaDeduction;

      // Net Salary = Base + Tunjangan - Potongan (tidak boleh negatif)
      const netSalary = Math.max(0, baseSalaryDefault + allowance - totalDeduction);

      const payroll = await prisma.posPayroll.upsert({
        where: {
          businessId_period_employeeName: {
            businessId,
            period,
            employeeName: name,
          },
        },
        create: {
          businessId,
          period,
          employeeName: name,
          employeeId: stats.employeeId,
          position: stats.position,
          totalPresent: stats.totalPresent,
          totalLateMinutes: stats.totalLateMinutes,
          totalAlpha: stats.totalAlpha,
          totalLeave: stats.totalLeave,
          baseSalary: baseSalaryDefault,
          allowance,
          lateDeduction,
          alphaDeduction,
          netSalary,
          status: 'draft',
        },
        update: {
          totalPresent: stats.totalPresent,
          totalLateMinutes: stats.totalLateMinutes,
          totalAlpha: stats.totalAlpha,
          totalLeave: stats.totalLeave,
          allowance,
          lateDeduction,
          alphaDeduction,
          netSalary,
        },
      });

      payrollResults.push(payroll);
    }

    return payrollResults;
  }
}
