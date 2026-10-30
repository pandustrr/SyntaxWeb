import { prisma } from '@/core/db/prisma';

export interface SlovvLoginResponse {
  sukses: boolean;
  role: string;
  username: string;
  token: string;
  error?: string;
}

export interface SlovvEmployee {
  id: string;
  namaLengkap: string;
  jabatan?: string;
  jadwalKerja?: string;
}

export interface SlovvAttendanceItem {
  id: string;
  karyawanId: string;
  tanggal: string;
  waktuCheckin: string;
  waktuCheckout: string | null;
  durasiKerja: string | null;
  menitTerlambat: number;
  status: string;
  checkinLat?: string | null;
  checkinLng?: string | null;
  fotoCheckin?: string | null;
}

export class SlovvAttendanceService {
  /**
   * Menarik data kehadiran riil dari web eksternal SLOVV dan menyimpannya ke MySQL SyntaxWeb
   */
  static async syncAttendanceFromSlovv(businessId: number) {
    const business = await prisma.posBusiness.findUnique({
      where: { id: businessId },
      select: {
        id: true,
        slovvBaseUrl: true,
        slovvUsername: true,
        slovvPassword: true,
      },
    });

    if (!business) {
      throw new Error('Outlet / Bisnis POS tidak ditemukan.');
    }

    const baseUrl = (business.slovvBaseUrl || 'https://myabsensislovv.my.id').replace(/\/+$/, '');
    const username = business.slovvUsername || 'admin';
    const password = business.slovvPassword || 'achmadrizal123';

    // 1. Login ke SLOVV Web untuk mendapatkan Bearer Token Admin
    let authData: SlovvLoginResponse;
    try {
      const loginRes = await fetch(`${baseUrl}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      authData = await loginRes.json();
      if (!loginRes.ok || !authData.token) {
        throw new Error(authData.error || 'Gagal login ke website absensi Slovv.');
      }
    } catch (err: any) {
      throw new Error(`Tidak dapat terhubung ke server Slovv: ${err.message}`);
    }

    const authHeaders = {
      Authorization: `Bearer ${authData.token}`,
      'Content-Type': 'application/json',
    };

    // 2. Tarik daftar Karyawan Slovv
    const employeeMap = new Map<string, SlovvEmployee>();
    try {
      const empRes = await fetch(`${baseUrl}/api/karyawan`, { headers: authHeaders });
      if (empRes.ok) {
        const empList: SlovvEmployee[] = await empRes.json();
        if (Array.isArray(empList)) {
          empList.forEach((e) => employeeMap.set(e.id, e));
        }
      }
    } catch (_) {}

    // 3. Tarik seluruh Log Absensi dari SLOVV
    let attendanceList: SlovvAttendanceItem[] = [];
    try {
      const absRes = await fetch(`${baseUrl}/api/absensi`, { headers: authHeaders });
      if (!absRes.ok) throw new Error(`Status HTTP: ${absRes.status}`);
      attendanceList = await absRes.json();
    } catch (err: any) {
      throw new Error(`Gagal mengambil data absensi Slovv: ${err.message}`);
    }

    if (!Array.isArray(attendanceList)) {
      throw new Error('Format data absensi dari Slovv tidak valid.');
    }

    // 4. Upsert (Simpan / Perbarui) ke Database MySQL
    let insertedCount = 0;
    let updatedCount = 0;

    for (const item of attendanceList) {
      if (!item.id || !item.tanggal) continue;

      const emp = employeeMap.get(item.karyawanId);
      const employeeName = emp?.namaLengkap || item.karyawanId;
      const shiftName = emp?.jadwalKerja || null;

      try {
        const existing = await prisma.posAttendance.findUnique({
          where: {
            businessId_externalRefId: {
              businessId,
              externalRefId: item.id,
            },
          },
        });

        if (existing) {
          await prisma.posAttendance.update({
            where: { id: existing.id },
            data: {
              checkoutTime: item.waktuCheckout || existing.checkoutTime,
              duration: item.durasiKerja || existing.duration,
              lateMinutes: Number(item.menitTerlambat || 0),
              status: item.status || existing.status,
              photoUrl: item.fotoCheckin || existing.photoUrl,
            },
          });
          updatedCount++;
        } else {
          await prisma.posAttendance.create({
            data: {
              businessId,
              employeeName,
              employeeId: item.karyawanId,
              source: 'slovv',
              externalRefId: item.id,
              date: item.tanggal,
              checkinTime: item.waktuCheckin || null,
              checkoutTime: item.waktuCheckout || null,
              duration: item.durasiKerja || null,
              lateMinutes: Number(item.menitTerlambat || 0),
              status: item.status || 'Tepat Waktu',
              shift: shiftName,
              photoUrl: item.fotoCheckin || null,
              checkinLat: item.checkinLat ? String(item.checkinLat) : null,
              checkinLng: item.checkinLng ? String(item.checkinLng) : null,
            },
          });
          insertedCount++;
        }
      } catch (_) {}
    }

    // 5. Update timestamp sinkronisasi terakhir pada kafe
    await prisma.posBusiness.update({
      where: { id: businessId },
      data: { lastAttendanceSync: new Date() },
    });

    return {
      success: true,
      totalFetched: attendanceList.length,
      insertedCount,
      updatedCount,
      totalEmployees: employeeMap.size,
      lastSync: new Date().toISOString(),
      message: `Sinkronisasi berhasil! ${insertedCount} data baru disimpan, ${updatedCount} diperbarui.`,
    };
  }
}
