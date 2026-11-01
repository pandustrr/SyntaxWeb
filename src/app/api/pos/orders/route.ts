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
    const order = await PosOrderService.createOrder(session.businessId, session.userId, {
      orderType: body.orderType || body.order_type || (body.channel === 'dine_in' ? 'dine_in' : body.channel === 'take_away' ? 'take_away' : 'dine_in'),
      tableId: body.tableId !== undefined ? body.tableId : (body.table_id !== undefined ? body.table_id : body.cafe_table_id),
      customerId: body.customerId !== undefined ? body.customerId : body.customer_id,
      shiftId: body.shiftId !== undefined ? body.shiftId : body.shift_id,
      promoCode: body.promoCode || body.promo_code,
      discount: body.discount !== undefined ? Number(body.discount) : 0,
      tax: body.tax !== undefined ? Number(body.tax) : 0,
      paymentMethod: body.paymentMethod || body.payment_method || 'cash',
      paidAmount: body.paidAmount !== undefined ? Number(body.paidAmount) : Number(body.paid_amount || 0),
      status: body.status || undefined,
      notes: body.notes,
      createdAt: body.createdAt || body.created_at || undefined,
      items: (body.items || []).map((it: any) => ({
        productId: it.productId || it.product_id,
        variantId: it.variantId || it.variant_id || null,
        quantity: Number(it.quantity || 1),
        notes: it.notes,
      })),
    });

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
    const limit = searchParams.get('limit') ? Number(searchParams.get('limit')) : 50;
    const status = searchParams.get('status') || undefined;
    const dateFrom = searchParams.get('date_from') || undefined;
    const dateTo = searchParams.get('date_to') || undefined;
    const tableParam = searchParams.get('cafe_table_id') || searchParams.get('table_id') || searchParams.get('tableId');
    const tableId = tableParam ? Number(tableParam) : undefined;
    const shiftParam = searchParams.get('shift_id') || searchParams.get('shiftId');
    const shiftId = shiftParam ? Number(shiftParam) : undefined;

    const orders = await PosOrderService.getOrderHistory(session.businessId, {
      limit,
      status,
      dateFrom,
      dateTo,
      tableId,
      shiftId,
    });
    return apiSuccess(orders, 'Riwayat transaksi berhasil diambil');
  } catch (error: any) {
    return apiError(error.message || 'Gagal mengambil riwayat transaksi', 400);
  }
}
