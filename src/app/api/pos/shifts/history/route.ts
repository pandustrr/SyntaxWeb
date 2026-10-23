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

    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit') ? Number(searchParams.get('limit')) : 30;

    const history = await PosShiftService.getShiftHistory(session.businessId, limit);
    return apiSuccess(history, 'Riwayat shift kasir berhasil diambil');
  } catch (error: any) {
    return apiError(error.message || 'Gagal memuat riwayat shift', 400);
  }
}
