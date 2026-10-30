import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/core/auth/session';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { prisma } from '@/core/db/prisma';

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const webSession = await getSession();
    const posSession = getPosSessionFromRequest(request);

    const isAuthorized =
      (webSession && (webSession.role === 'admin' || webSession.role === 'super_admin')) ||
      (posSession && (posSession.role === 'admin' || posSession.role === 'super_admin'));

    if (!isAuthorized) {
      return NextResponse.json({ message: 'Unauthorized. Akses khusus SuperAdmin.' }, { status: 401 });
    }

    const { id: rawId } = await params;
    const cafeId = parseInt(rawId, 10);
    if (isNaN(cafeId)) {
      return NextResponse.json({ message: 'ID kafe tidak valid' }, { status: 400 });
    }

    const existing = await prisma.posBusiness.findUnique({
      where: { id: cafeId },
      select: { id: true, name: true },
    });

    if (!existing) {
      return NextResponse.json({ message: 'Kafe tidak ditemukan' }, { status: 404 });
    }

    await prisma.$transaction(async (tx) => {
      // 1. Hapus order items & orders
      await tx.posOrderItem.deleteMany({
        where: { order: { businessId: cafeId } },
      });
      await tx.posOrder.deleteMany({
        where: { businessId: cafeId },
      });

      // 2. Hapus shifts
      await tx.posShift.deleteMany({
        where: { businessId: cafeId },
      });

      // 3. Hapus variants, recipes & products
      await tx.posRecipeItem.deleteMany({
        where: { product: { businessId: cafeId } },
      });
      await tx.posProductVariant.deleteMany({
        where: { product: { businessId: cafeId } },
      });
      await tx.posProduct.deleteMany({
        where: { businessId: cafeId },
      });

      // 4. Hapus materials, customers, promotions
      await tx.posMaterial.deleteMany({
        where: { businessId: cafeId },
      });
      await tx.posCustomer.deleteMany({
        where: { businessId: cafeId },
      });
      await tx.posPromotion.deleteMany({
        where: { businessId: cafeId },
      });

      // 5. Hapus categories & tables
      await tx.posCategory.deleteMany({
        where: { businessId: cafeId },
      });
      await tx.posCafeTable.deleteMany({
        where: { businessId: cafeId },
      });

      // 6. Hapus akun pengguna (selain SuperAdmin utama)
      await tx.user.deleteMany({
        where: {
          businessId: cafeId,
          role: { notIn: ['admin', 'super_admin'] },
        },
      });

      // 7. Hapus kafe
      await tx.posBusiness.delete({
        where: { id: cafeId },
      });
    });

    return NextResponse.json({
      success: true,
      message: `Kafe "${existing.name}" dan seluruh datanya berhasil dihapus permanen.`,
    }, { status: 200 });
  } catch (error: unknown) {
    console.error('Error deleting cafe:', error);
    const message = error instanceof Error ? error.message : 'Gagal menghapus kafe';
    return NextResponse.json({ message }, { status: 500 });
  }
}
