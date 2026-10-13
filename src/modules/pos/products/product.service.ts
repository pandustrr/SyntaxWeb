import { prisma } from '@/core/db/prisma';

export interface GetProductsOptions {
  categoryId?: number;
  search?: string;
}

export class PosProductService {
  /**
   * Mengambil daftar kategori untuk tenant yang bersangkutan
   */
  static async getCategories(businessId: number) {
    return await prisma.posCategory.findMany({
      where: { businessId },
      orderBy: { sortOrder: 'asc' },
      include: {
        _count: {
          select: { products: true },
        },
      },
    });
  }

  /**
   * Mengambil katalog produk + varian untuk kasir
   */
  static async getProducts(businessId: number, options?: GetProductsOptions) {
    const { categoryId, search } = options || {};

    return await prisma.posProduct.findMany({
      where: {
        businessId,
        isActive: true,
        ...(categoryId ? { categoryId } : {}),
        ...(search
          ? {
              OR: [
                { name: { contains: search } },
                { sku: { contains: search } },
              ],
            }
          : {}),
      },
      include: {
        category: {
          select: { id: true, name: true, icon: true },
        },
        variants: {
          select: { id: true, name: true, priceAdjustment: true, stock: true },
        },
      },
      orderBy: {
        name: 'asc',
      },
    });
  }

  /**
   * Mengambil daftar meja cafe
   */
  static async getTables(businessId: number) {
    return await prisma.posCafeTable.findMany({
      where: { businessId },
      orderBy: { name: 'asc' },
    });
  }
}
