import { NextRequest } from 'next/server';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

// In-memory recipe store mapped by productId
const recipeStore: Record<number, any[]> = {
  1: [
    { material_id: 1, material_name: 'Biji Kopi Arabika Gayo Blend', amount: 0.018, unit: 'kg' },
    { material_id: 3, material_name: 'Susu Segar (Fresh Milk Greenfields)', amount: 0.12, unit: 'liter' },
    { material_id: 9, material_name: 'Gula Aren Cair Organik Nira', amount: 0.025, unit: 'liter' },
  ],
  2: [
    { material_id: 1, material_name: 'Biji Kopi Arabika Gayo Blend', amount: 0.018, unit: 'kg' },
  ],
  3: [
    { material_id: 1, material_name: 'Biji Kopi Arabika Gayo Blend', amount: 0.018, unit: 'kg' },
    { material_id: 3, material_name: 'Susu Segar (Fresh Milk Greenfields)', amount: 0.18, unit: 'liter' },
  ],
};

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
    const items = recipeStore[Number(id)] || [];

    return apiSuccess({ items }, 'Resep produk berhasil dimuat');
  } catch (error: any) {
    return apiError(error.message || 'Gagal memuat resep produk', 400);
  }
}

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
    recipeStore[Number(id)] = body.items || [];

    return apiSuccess({ items: recipeStore[Number(id)] }, 'Resep produk berhasil disimpan');
  } catch (error: any) {
    return apiError(error.message || 'Gagal menyimpan resep', 400);
  }
}
