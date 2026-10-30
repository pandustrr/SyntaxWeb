import { NextRequest } from 'next/server';
import { prisma } from '@/core/db/prisma';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
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
    const productId = Number(id);

    const product = await prisma.posProduct.findFirst({
      where: { id: productId, businessId: session.businessId },
    });

    if (!product) {
      return apiError('Produk tidak ditemukan di outlet Anda', 404);
    }

    const items = await prisma.posRecipeItem.findMany({
      where: { productId: product.id },
      include: { material: true },
      orderBy: { id: 'asc' },
    });

    const mapped = items.map((r) => ({
      id: r.id,
      material_id: r.materialId,
      materialId: r.materialId,
      material_name: r.material?.name || 'Bahan',
      amount: Number(r.amount),
      quantity: Number(r.amount),
      unit: r.unit || r.material?.unit || 'pcs',
    }));

    return apiSuccess({ items: mapped }, 'Resep produk berhasil dimuat');
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
    const productId = Number(id);

    const product = await prisma.posProduct.findFirst({
      where: { id: productId, businessId: session.businessId },
    });

    if (!product) {
      return apiError('Produk tidak ditemukan di outlet Anda', 404);
    }

    const body = await request.json();
    const rawItems = Array.isArray(body.items) ? body.items : [];

    await prisma.$transaction(async (tx) => {
      // Validasi bahwa bahan baku milik tenant outlet terkait
      const matIds = rawItems
        .map((r: any) => Number(r.material_id || r.materialId))
        .filter((id: number) => !isNaN(id) && id > 0);

      const validMaterials = await tx.posMaterial.findMany({
        where: { id: { in: matIds }, businessId: session.businessId },
        select: { id: true },
      });
      const validMatSet = new Set(validMaterials.map((m) => m.id));

      await tx.posRecipeItem.deleteMany({
        where: { productId: product.id },
      });

      for (const item of rawItems) {
        const matId = Number(item.material_id || item.materialId);
        if (!matId || !validMatSet.has(matId)) continue;

        const rawAmount = item.amount !== undefined ? item.amount : (item.quantity !== undefined ? item.quantity : 0);
        const amount = Number(rawAmount);

        await tx.posRecipeItem.create({
          data: {
            productId: product.id,
            materialId: matId,
            amount: isNaN(amount) ? 0 : amount,
            unit: String(item.unit || 'pcs'),
          },
        });
      }
    });

    const refreshed = await prisma.posRecipeItem.findMany({
      where: { productId: product.id },
      include: { material: true },
    });

    const mapped = refreshed.map((r) => ({
      id: r.id,
      material_id: r.materialId,
      materialId: r.materialId,
      material_name: r.material?.name || 'Bahan',
      amount: Number(r.amount),
      quantity: Number(r.amount),
      unit: r.unit || r.material?.unit || 'pcs',
    }));

    return apiSuccess({ items: mapped }, 'Resep produk berhasil disimpan');
  } catch (error: any) {
    return apiError(error.message || 'Gagal menyimpan resep', 400);
  }
}

