import { NextRequest } from 'next/server';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { PosMaterialService } from '@/modules/pos/materials/material.store';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: RouteContext) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    const { id } = await params;
    const material = await PosMaterialService.getMaterialById(session.businessId, Number(id));
    return apiSuccess(material, 'Detail bahan baku berhasil diambil');
  } catch (error: any) {
    return apiError(error.message || 'Bahan baku tidak ditemukan', 404);
  }
}

export async function PUT(request: NextRequest, { params }: RouteContext) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    const { id } = await params;
    const body = await request.json();
    const updated = await PosMaterialService.updateMaterial(session.businessId, Number(id), body);
    return apiSuccess(updated, 'Bahan baku berhasil diperbarui');
  } catch (error: any) {
    return apiError(error.message || 'Gagal memperbarui bahan baku', 400);
  }
}

export async function DELETE(request: NextRequest, { params }: RouteContext) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    const { id } = await params;
    await PosMaterialService.deleteMaterial(session.businessId, Number(id));
    return apiSuccess({ success: true }, 'Bahan baku berhasil dihapus');
  } catch (error: any) {
    return apiError(error.message || 'Gagal menghapus bahan baku', 400);
  }
}
