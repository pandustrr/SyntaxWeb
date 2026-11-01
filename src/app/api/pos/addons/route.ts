import { NextRequest } from 'next/server';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { PosAddonService } from '@/modules/pos/products/addon.service';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

export async function GET(request: NextRequest) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    const addons = await PosAddonService.getAddons(session.businessId);
    return apiSuccess(addons, 'Daftar add-on berhasil dimuat');
  } catch (error: any) {
    return apiError(error.message || 'Gagal memuat add-on', 400);
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    const body = await request.json();
    if (!body.name || !body.name.trim()) {
      return apiError('Nama add-on harus diisi', 400);
    }

    const addon = await PosAddonService.createAddon(session.businessId, body);
    return apiSuccess(addon, 'Add-on berhasil ditambahkan', 201);
  } catch (error: any) {
    return apiError(error.message || 'Gagal menambahkan add-on', 400);
  }
}
