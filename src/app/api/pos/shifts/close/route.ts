import { NextRequest } from 'next/server';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { PosShiftService } from '@/modules/pos/shifts/shift.service';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

export async function POST(request: NextRequest) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    const body = await request.json();
    const { shiftId, actualCash, notes } = body;

    if (!shiftId || actualCash === undefined || actualCash === null) {
      return apiError('shiftId dan nominal kas aktual wajib diisi', 400);
    }

    const closedShift = await PosShiftService.closeShift(
      session.businessId,
      session.userId,
      Number(shiftId),
      Number(actualCash),
      notes
    );

    return apiSuccess(closedShift, 'Shift kasir berhasil ditutup');
  } catch (error: any) {
    return apiError(error.message || 'Gagal menutup shift', 400);
  }
}
