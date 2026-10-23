import { NextRequest } from 'next/server';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { PosOrderService } from '@/modules/pos/orders/order.service';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

export async function POST(
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
    const reason = body.reason;

    const cancelled = await PosOrderService.cancelOrder(session.businessId, Number(id), reason);
    return apiSuccess(cancelled, 'Pesanan berhasil dibatalkan');
  } catch (error: any) {
    return apiError(error.message || 'Gagal membatalkan pesanan', 400);
  }
}
