import { NextRequest } from 'next/server';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { PosAddonService } from '@/modules/pos/products/addon.service';
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

    const updated = await PosAddonService.updateAddon(session.businessId, Number(id), body);
    return apiSuccess(updated, 'Add-on berhasil diperbarui');
  } catch (error: any) {
    return apiError(error.message || 'Gagal memperbarui add-on', 400);
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

    await PosAddonService.deleteAddon(session.businessId, Number(id));
    return apiSuccess(null, 'Add-on berhasil dihapus');
  } catch (error: any) {
    return apiError(error.message || 'Gagal menghapus add-on', 400);
  }
}
