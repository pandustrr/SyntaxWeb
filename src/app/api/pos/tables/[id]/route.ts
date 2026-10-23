import { NextRequest } from 'next/server';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { PosProductService } from '@/modules/pos/products/product.service';
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

    const updated = await PosProductService.updateTable(session.businessId, Number(id), body);
    return apiSuccess(updated, 'Status meja berhasil diperbarui');
  } catch (error: any) {
    return apiError(error.message || 'Gagal memperbarui meja', 400);
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    const { id } = await params;

    await PosProductService.deleteTable(session.businessId, Number(id));
    return apiSuccess(null, 'Meja berhasil dihapus');
  } catch (error: any) {
    return apiError(error.message || 'Gagal menghapus meja', 400);
  }
}
