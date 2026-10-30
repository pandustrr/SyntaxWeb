import { NextRequest } from 'next/server';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { PosAttendanceService } from '@/modules/pos/attendance/attendance.service';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

export async function GET(request: NextRequest) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) return apiError('Unauthorized', 401);

    const role = (session.role || '').toLowerCase();
    if (!['owner', 'admin', 'super_admin', 'manager'].includes(role)) {
      return apiError('Hanya Owner atau Manager yang memiliki akses ke data penggajian.', 403);
    }

    const { searchParams } = new URL(request.url);
    const now = new Date();
    const defaultPeriod = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    const period = searchParams.get('period') || defaultPeriod;

    const payrolls = await PosAttendanceService.calculatePayroll(session.businessId, period);

    return apiSuccess(payrolls, `Rekap gaji periode ${period} berhasil dimuat`);
  } catch (error: any) {
    return apiError(error.message || 'Gagal memuat data payroll', 400);
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) return apiError('Unauthorized', 401);

    const role = (session.role || '').toLowerCase();
    if (!['owner', 'admin', 'super_admin'].includes(role)) {
      return apiError('Hanya Owner yang dapat mengkalkulasi ulang data penggajian.', 403);
    }

    const body = await request.json().catch(() => ({}));
    const now = new Date();
    const defaultPeriod = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    const period = body.period || defaultPeriod;

    const payrolls = await PosAttendanceService.calculatePayroll(session.businessId, period, {
      defaultBaseSalary: body.defaultBaseSalary ? Number(body.defaultBaseSalary) : undefined,
      dailyAllowance: body.dailyAllowance ? Number(body.dailyAllowance) : undefined,
      latePenaltyPerMinute: body.latePenaltyPerMinute ? Number(body.latePenaltyPerMinute) : undefined,
      alphaPenaltyPerDay: body.alphaPenaltyPerDay ? Number(body.alphaPenaltyPerDay) : undefined,
    });

    return apiSuccess(payrolls, `Kalkulasi gaji periode ${period} selesai`);
  } catch (error: any) {
    return apiError(error.message || 'Gagal mengkalkulasi payroll', 400);
  }
}
