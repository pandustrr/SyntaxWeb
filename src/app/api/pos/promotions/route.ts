import { NextRequest } from 'next/server';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { PosPromotionService } from '@/modules/pos/promotions/promotion.store';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

export async function GET(request: NextRequest) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    const promotions = await PosPromotionService.getPromotions(session.businessId);
    return apiSuccess(promotions, 'Daftar promosi berhasil dimuat');
  } catch (error: any) {
    return apiError(error.message || 'Gagal memuat promosi', 400);
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    const body = await request.json();
    const created = await PosPromotionService.createPromotion(session.businessId, body);
    return apiSuccess(created, 'Promosi berhasil dibuat', 201);
  } catch (error: any) {
    return apiError(error.message || 'Gagal membuat promosi', 400);
  }
}
