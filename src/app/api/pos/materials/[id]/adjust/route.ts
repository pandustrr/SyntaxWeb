import { NextRequest } from 'next/server';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { PosMaterialService } from '@/modules/pos/materials/material.store';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

export async function POST(
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
    const type = body.type === 'out' ? 'out' : 'in';
    const amount = Number(body.amount || 0);

    const updated = PosMaterialService.adjustStock(Number(id), type, amount);
    return apiSuccess(updated, 'Stok bahan baku berhasil disesuaikan');
  } catch (error: any) {
    return apiError(error.message || 'Gagal menyesuaikan stok bahan baku', 400);
  }
}
