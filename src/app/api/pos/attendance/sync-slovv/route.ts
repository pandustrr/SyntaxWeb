import { NextRequest } from 'next/server';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { SlovvAttendanceService } from '@/modules/pos/attendance/slovv.service';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

export async function POST(request: NextRequest) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) return apiError('Unauthorized', 401);

    // Hanya role owner, manager, atau admin yang boleh memicu penarikan data
    const role = (session.role || '').toLowerCase();
    if (!['owner', 'admin', 'super_admin', 'manager'].includes(role)) {
      return apiError('Hanya Owner atau Manager yang dapat menyinkronkan data absensi.', 403);
    }

    const result = await SlovvAttendanceService.syncAttendanceFromSlovv(session.businessId);

    return apiSuccess(result, result.message);
  } catch (error: any) {
    return apiError(error.message || 'Gagal menyinkronkan data absensi dari Slovv', 400);
  }
}
