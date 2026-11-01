import { NextRequest } from 'next/server';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { PosShiftService } from '@/modules/pos/shifts/shift.service';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';
import { prisma } from '@/core/db/prisma';

export async function POST(request: NextRequest) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    const body = await request.json();
    let shiftId = body.shiftId ?? body.shift_id;
    const actualCash = body.actualCash ?? body.actual_cash;
    const notes = body.notes ?? body.note;
    const closedByName = body.closedByName ?? body.closed_by_name;

    if (actualCash === undefined || actualCash === null) {
      return apiError('Nominal kas aktual fisik wajib diisi', 400);
    }

    // Fallback: Jika shiftId tidak disertakan dari klien, cari shift aktif yang sedang open
    if (!shiftId) {
      const activeShift = await prisma.posShift.findFirst({
        where: {
          businessId: session.businessId,
          status: 'open',
        },
        orderBy: { id: 'desc' },
      });

      if (!activeShift) {
        return apiError('Tidak ada shift aktif yang ditemukan untuk ditutup.', 404);
      }
      shiftId = activeShift.id;
    }

    const closedShift = await PosShiftService.closeShift(
      session.businessId,
      session.userId,
      Number(shiftId),
      Number(actualCash),
      notes,
      closedByName || session.name
    );

    return apiSuccess(closedShift, 'Shift kasir berhasil ditutup');
  } catch (error: any) {
    return apiError(error.message || 'Gagal menutup shift', 400);
  }
}
