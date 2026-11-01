import { NextRequest } from 'next/server';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { PosProductService } from '@/modules/pos/products/product.service';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    const { id } = await params;
    const product = await PosProductService.getProductById(session.businessId, Number(id));
    return apiSuccess(product, 'Detail produk berhasil diambil');
  } catch (error: any) {
    return apiError(error.message || 'Produk tidak ditemukan', 404);
  }
}

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

    const updated = await PosProductService.updateProduct(session.businessId, Number(id), body);
    return apiSuccess(updated, 'Produk berhasil diperbarui');
  } catch (error: any) {
    return apiError(error.message || 'Gagal memperbarui produk', 400);
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

    const result = await PosProductService.deleteProduct(session.businessId, Number(id));
    const message = (result && 'isActive' in result && !result.isActive)
      ? 'Produk dinonaktifkan dari katalog karena memiliki riwayat transaksi'
      : 'Produk berhasil dihapus';

    return apiSuccess(result, message);
  } catch (error: any) {
    return apiError(error.message || 'Gagal menghapus produk', 400);
  }
}
