import { NextRequest } from 'next/server';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { PosMaterialService } from '@/modules/pos/materials/material.store';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function PUT(request: NextRequest, { params }: RouteContext) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    const { id } = await params;
    const body = await request.json();
    if (!body.name || !body.name.trim()) {
      return apiError('Nama kategori bahan tidak boleh kosong', 400);
    }

    const updated = await PosMaterialService.updateCategory(
      session.businessId,
      Number(id),
      body.name
    );
    return apiSuccess(updated, 'Kategori bahan baku berhasil diperbarui');
  } catch (error: any) {
    return apiError(error.message || 'Gagal memperbarui kategori bahan baku', 400);
  }
}

export async function DELETE(request: NextRequest, { params }: RouteContext) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    const { id } = await params;
    await PosMaterialService.deleteCategory(session.businessId, Number(id));
    return apiSuccess({ success: true }, 'Kategori bahan baku berhasil dihapus');
  } catch (error: any) {
    return apiError(error.message || 'Gagal menghapus kategori bahan baku', 400);
  }
}
