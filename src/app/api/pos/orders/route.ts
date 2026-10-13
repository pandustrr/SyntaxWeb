import { NextRequest } from 'next/server';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { PosOrderService } from '@/modules/pos/orders/order.service';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

export async function POST(request: NextRequest) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    const body = await request.json();
    const order = await PosOrderService.createOrder(session.businessId, session.userId, body);

    return apiSuccess(order, 'Transaksi kasir berhasil disimpan', 201);
  } catch (error: any) {
    return apiError(error.message || 'Gagal menyimpan transaksi', 400);
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit') ? Number(searchParams.get('limit')) : 30;

    const orders = await PosOrderService.getOrderHistory(session.businessId, limit);
    return apiSuccess(orders, 'Riwayat transaksi berhasil diambil');
  } catch (error: any) {
    return apiError(error.message || 'Gagal mengambil riwayat transaksi', 400);
  }
}
