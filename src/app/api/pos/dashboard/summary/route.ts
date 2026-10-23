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

    const summary = await PosDashboardService.getSummary(session.businessId);
    return apiSuccess(summary, 'Data ringkasan dashboard berhasil dimuat');
  } catch (error: any) {
    return apiError(error.message || 'Gagal memuat ringkasan dashboard', 400);
  }
}
