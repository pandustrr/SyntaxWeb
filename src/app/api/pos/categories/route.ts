import { NextRequest } from 'next/server';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { PosProductService } from '@/modules/pos/products/product.service';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

export async function GET(request: NextRequest) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    const categories = await PosProductService.getCategories(session.businessId);
    return apiSuccess(categories, 'Kategori produk berhasil dimuat');
  } catch (error: any) {
    return apiError(error.message || 'Gagal memuat kategori', 400);
  }
}
