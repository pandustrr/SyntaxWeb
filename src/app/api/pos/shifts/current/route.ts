import { NextRequest } from 'next/server';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { PosShiftService } from '@/modules/pos/shifts/shift.service';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

export async function GET(request: NextRequest) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    const currentShift = await PosShiftService.getCurrentShift(session.businessId, session.userId);
    return apiSuccess(currentShift, 'Status shift kasir berhasil diambil');
  } catch (error: any) {
    return apiError(error.message || 'Gagal memuat status shift', 400);
  }
}
