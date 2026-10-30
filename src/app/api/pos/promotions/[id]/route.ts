import { NextRequest } from 'next/server';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { PosPromotionService } from '@/modules/pos/promotions/promotion.store';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    const { id } = await params;
    const body = await request.json();

    const updated = await PosPromotionService.updatePromotion(session.businessId, Number(id), body);
    return apiSuccess(updated, 'Promosi berhasil diperbarui');
  } catch (error: any) {
    return apiError(error.message || 'Gagal memperbarui promosi', 400);
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    const { id } = await params;

    await PosPromotionService.deletePromotion(session.businessId, Number(id));
    return apiSuccess(null, 'Promosi berhasil dihapus');
  } catch (error: any) {
    return apiError(error.message || 'Gagal menghapus promosi', 400);
  }
}
