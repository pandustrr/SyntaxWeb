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

    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit') ? Number(searchParams.get('limit')) : 10;
    const type = searchParams.get('type');
    const dateFrom = searchParams.get('date_from') || undefined;
    const dateTo = searchParams.get('date_to') || undefined;

    if (type === 'ranking' || searchParams.has('ranking')) {
      const ranking = await PosDashboardService.getProductSalesRanking(session.businessId, {
        dateFrom,
        dateTo,
        limit,
      });
      return apiSuccess(ranking, 'Peringkat penjualan produk (terlaris & terendah) berhasil dimuat');
    }

    const top = await PosDashboardService.getTopProducts(session.businessId, limit);
    return apiSuccess(top, 'Data produk terlaris berhasil dimuat');
  } catch (error: any) {
    return apiError(error.message || 'Gagal memuat produk terlaris', 400);
  }
}
