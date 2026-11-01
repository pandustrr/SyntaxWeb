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
    const dateFrom = searchParams.get('date_from') || undefined;
    const dateTo = searchParams.get('date_to') || undefined;
    const shiftParam = searchParams.get('shift_id') || searchParams.get('shiftId');
    const shiftId = shiftParam ? Number(shiftParam) : undefined;

    const report = await PosDashboardService.getBusinessReport(session.businessId, {
      dateFrom,
      dateTo,
      shiftId,
    });

    return apiSuccess(report, 'Laporan performa bisnis berhasil dimuat');
  } catch (error: any) {
    return apiError(error.message || 'Gagal memuat laporan bisnis', 400);
  }
}
