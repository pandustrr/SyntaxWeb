import { NextRequest } from 'next/server';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { PosPromotionService } from '@/modules/pos/promotions/promotion.store';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

export async function POST(request: NextRequest) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    const body = await request.json();
    const code = body.code || body.promo_code;
    const subtotal = Number(body.subtotal || body.amount || 0);

    if (!code) {
      return apiError('Parameter kode voucher wajib dikirim', 400);
    }

    const result = await PosPromotionService.validatePromotion(session.businessId, code, subtotal);
    return apiSuccess(result, 'Voucher berhasil divalidasi');
  } catch (error: any) {
    return apiError(error.message || 'Gagal memvalidasi kupon', 400);
  }
}
