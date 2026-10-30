import { NextRequest } from 'next/server';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { PosOrderService } from '@/modules/pos/orders/order.service';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: RouteContext) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    const { id } = await params;
    const orderId = Number(id);

    if (isNaN(orderId)) {
      return apiError('ID Transaksi tidak valid', 400);
    }

    const order = await PosOrderService.getOrderById(session.businessId, orderId);
    return apiSuccess(order, 'Detail transaksi berhasil diambil');
  } catch (error: any) {
    return apiError(error.message || 'Gagal mengambil detail transaksi', 404);
  }
}
