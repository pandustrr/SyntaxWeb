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
    const days = searchParams.get('days') ? Number(searchParams.get('days')) : 7;

    const chart = await PosDashboardService.getRevenueChart(session.businessId, days);
    return apiSuccess(chart, 'Data grafik omzet berhasil dimuat');
  } catch (error: any) {
    return apiError(error.message || 'Gagal memuat grafik omzet', 400);
  }
}
