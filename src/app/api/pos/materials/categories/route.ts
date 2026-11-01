import { NextRequest } from 'next/server';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { PosMaterialService } from '@/modules/pos/materials/material.store';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

export async function GET(request: NextRequest) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    const categories = await PosMaterialService.getCategories(session.businessId);
    return apiSuccess(categories, 'Kategori bahan baku berhasil dimuat');
  } catch (error: any) {
    return apiError(error.message || 'Gagal memuat kategori bahan baku', 400);
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
      return apiError('Nama kategori bahan harus diisi', 400);
    }

    const created = await PosMaterialService.createCategory(session.businessId, body.name);
    return apiSuccess(created, 'Kategori bahan baku berhasil ditambahkan', 201);
  } catch (error: any) {
    return apiError(error.message || 'Gagal menambahkan kategori bahan baku', 400);
  }
}
