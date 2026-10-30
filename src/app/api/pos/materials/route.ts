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

    const materials = await PosMaterialService.getMaterials(session.businessId);
    return apiSuccess(materials, 'Data inventori bahan baku berhasil dimuat');
  } catch (error: any) {
    return apiError(error.message || 'Gagal memuat bahan baku', 400);
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    const body = await request.json();
    const created = await PosMaterialService.createMaterial(session.businessId, body);
    return apiSuccess(created, 'Bahan baku berhasil ditambahkan', 201);
  } catch (error: any) {
    return apiError(error.message || 'Gagal menambahkan bahan baku', 400);
  }
}
