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
   * Tambah kategori baru
   */
  static async createCategory(businessId: number, data: { name: string; icon?: string }) {
    return await prisma.posCategory.create({
      data: {
        businessId,
        name: data.name,
        icon: data.icon || 'coffee',
      },
    });
  }

  /**
   * Update kategori
   */
  static async updateCategory(businessId: number, id: number, data: { name?: string; icon?: string }) {
    const existing = await prisma.posCategory.findFirst({
      where: { id, businessId },
    });
    if (!existing) {
      throw new Error('Kategori tidak ditemukan atau Anda tidak memiliki akses.');
    }

    return await prisma.posCategory.update({
      where: { id },
      data,
    });
  }

  /**
   * Hapus kategori
   */
  static async deleteCategory(businessId: number, id: number) {
    const existing = await prisma.posCategory.findFirst({
      where: { id, businessId },
    });
    if (!existing) {
      throw new Error('Kategori tidak ditemukan atau Anda tidak memiliki akses.');
    }

    return await prisma.posCategory.delete({
      where: { id },
    });
  }

  /**
   * Tambah produk baru
   */
  static async createProduct(businessId: number, data: any) {
    return await prisma.posProduct.create({
      data: {
        businessId,
        categoryId: Number(data.categoryId || data.category_id),
        name: data.name,
        sku: data.sku || `SKU-${Date.now()}`,
        price: Number(data.price),
        costPrice: data.costPrice || data.cost_price ? Number(data.costPrice || data.cost_price) : 0,
        stock: data.stock !== undefined ? Number(data.stock) : 50,
        trackStock: true,
        isActive: true,
      },
      include: { variants: true, category: true },
    });
  }

  /**
   * Update produk
   */
  static async updateProduct(businessId: number, id: number, data: any) {
    const existing = await prisma.posProduct.findFirst({
      where: { id, businessId },
    });
    if (!existing) {
      throw new Error('Produk tidak ditemukan atau Anda tidak memiliki akses.');
    }

    const updateData: any = {};
    if (data.name) updateData.name = data.name;
    if (data.price !== undefined) updateData.price = Number(data.price);
    if (data.stock !== undefined) updateData.stock = Number(data.stock);
    if (data.categoryId || data.category_id) updateData.categoryId = Number(data.categoryId || data.category_id);
    if (data.sku) updateData.sku = data.sku;

    return await prisma.posProduct.update({
      where: { id },
      data: updateData,
      include: { variants: true, category: true },
    });
  }

  /**
   * Hapus produk
   */
  static async deleteProduct(businessId: number, id: number) {
    const existing = await prisma.posProduct.findFirst({
      where: { id, businessId },
    });
    if (!existing) {
      throw new Error('Produk tidak ditemukan atau Anda tidak memiliki akses.');
    }

    return await prisma.posProduct.delete({
      where: { id },
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

  /**
   * Tambah meja cafe baru
   */
  static async createTable(businessId: number, data: { name: string; capacity?: number; status?: string }) {
    return await prisma.posCafeTable.create({
      data: {
        businessId,
        name: data.name,
        capacity: data.capacity || 4,
        status: data.status || 'available',
      },
    });
  }

  /**
   * Update meja cafe
   */
  static async updateTable(businessId: number, tableId: number, data: { name?: string; capacity?: number; status?: string }) {
    const existing = await prisma.posCafeTable.findFirst({
      where: { id: tableId, businessId },
    });
    if (!existing) {
      throw new Error('Meja tidak ditemukan atau Anda tidak memiliki akses.');
    }

    return await prisma.posCafeTable.update({
      where: { id: tableId },
      data,
    });
  }

  /**
   * Hapus meja cafe
   */
  static async deleteTable(businessId: number, tableId: number) {
    const existing = await prisma.posCafeTable.findFirst({
      where: { id: tableId, businessId },
    });
    if (!existing) {
      throw new Error('Meja tidak ditemukan atau Anda tidak memiliki akses.');
    }

    return await prisma.posCafeTable.delete({
      where: { id: tableId },
    });
  }
}
