import { NextRequest } from 'next/server';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { PosDashboardService } from '@/modules/pos/dashboard/dashboard.service';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

export async function GET(request: NextRequest) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    const lowStock = await PosDashboardService.getLowStock(session.businessId);
    return apiSuccess(lowStock, 'Data stok menipis berhasil dimuat');
  } catch (error: any) {
    return apiError(error.message || 'Gagal memuat data stok menipis', 400);
  }
}
