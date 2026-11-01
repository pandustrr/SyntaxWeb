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
    const startingCash = body.startingCash ?? body.starting_cash;
    const shiftName = body.shiftName ?? body.shift_name;
    const cashierNames = body.cashierNames ?? body.cashier_names;
    const baristaNames = body.baristaNames ?? body.barista_names;
    const kitchenNames = body.kitchenNames ?? body.kitchen_names;
    const leaderName = body.leaderName ?? body.leader_name;
    const openedByName = body.openedByName ?? body.opened_by_name;
    const notes = body.notes ?? body.note;

    if (startingCash === undefined || startingCash === null || Number(startingCash) < 0) {
      return apiError('Modal kas awal wajib diisi dan tidak boleh negatif', 400);
    }

    const newShift = await PosShiftService.openShift(
      session.businessId,
      session.userId,
      {
        startingCash: Number(startingCash),
        shiftName,
        cashierNames,
        baristaNames,
        kitchenNames,
        leaderName,
        openedByName: openedByName || session.name,
        notes,
      }
    );

    return apiSuccess(newShift, 'Shift kasir berhasil dibuka', 201);
  } catch (error: any) {
    return apiError(error.message || 'Gagal membuka shift', 400);
  }
}
