import { NextRequest } from 'next/server';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { PosProductService } from '@/modules/pos/products/product.service';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

export async function GET(request: NextRequest) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    const tables = await PosProductService.getTables(session.businessId);
    return apiSuccess(tables, 'Daftar meja berhasil dimuat');
  } catch (error: any) {
    return apiError(error.message || 'Gagal memuat meja', 400);
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    const body = await request.json();
    if (!body.name) {
      return apiError('Nama meja harus diisi', 400);
    }

    const table = await PosProductService.createTable(session.businessId, body);
    return apiSuccess(table, 'Meja berhasil ditambahkan', 201);
  } catch (error: any) {
    return apiError(error.message || 'Gagal menambahkan meja', 400);
  }
}

