import { NextRequest } from 'next/server';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { PosAttendanceService } from '@/modules/pos/attendance/attendance.service';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

export async function GET(request: NextRequest) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) return apiError('Unauthorized', 401);

    const summary = await PosAttendanceService.getTodaySummary(session.businessId);

    return apiSuccess(summary, 'Ringkasan absensi hari ini berhasil dimuat');
  } catch (error: any) {
    return apiError(error.message || 'Gagal memuat ringkasan absensi', 400);
  }
}
