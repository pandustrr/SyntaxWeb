import { NextRequest } from 'next/server';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { PosOrderService } from '@/modules/pos/orders/order.service';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

export async function PUT(
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
    const status = body.status;

    if (!status) {
      return apiError('Status pesanan harus diisi', 400);
    }

    const updated = await PosOrderService.updateOrderStatus(session.businessId, Number(id), status);
    return apiSuccess(updated, 'Status pesanan berhasil diperbarui');
  } catch (error: any) {
    return apiError(error.message || 'Gagal memperbarui status pesanan', 400);
  }
}
