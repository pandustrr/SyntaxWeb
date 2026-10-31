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
    const created = await prisma.posProduct.create({
      data: {
        businessId,
        categoryId: data.categoryId || data.category_id ? Number(data.categoryId || data.category_id) : null,
        name: data.name,
        sku: data.sku || `SKU-${Date.now()}`,
        price: Number(data.price),
        costPrice: data.costPrice !== undefined ? Number(data.costPrice) : (data.cost_price !== undefined ? Number(data.cost_price) : 0),
        stock: data.stock !== undefined ? Number(data.stock) : 50,
        trackStock: data.trackStock !== undefined ? Boolean(data.trackStock) : (data.track_stock !== undefined ? Boolean(data.track_stock) : true),
        station: data.station || 'kitchen',
        image: data.image || null,
        description: data.description || null,
        isActive: data.isActive !== undefined ? Boolean(data.isActive) : (data.is_active !== undefined ? Boolean(data.is_active) : true),
      },
    });

    if (Array.isArray(data.variants) && data.variants.length > 0) {
      for (const v of data.variants) {
        if (!v.name) continue;
        await prisma.posProductVariant.create({
          data: {
            productId: created.id,
            name: v.name,
            priceAdjustment: Number(v.priceAdjustment || v.price_adjustment || 0),
            stock: v.stock !== undefined ? Number(v.stock) : null,
          },
        });
      }
    }

    return await this.getProductById(businessId, created.id);
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
    if (data.name !== undefined) updateData.name = data.name;
    if (data.price !== undefined) updateData.price = Number(data.price);
    if (data.costPrice !== undefined) updateData.costPrice = Number(data.costPrice);
    else if (data.cost_price !== undefined) updateData.costPrice = Number(data.cost_price);
    if (data.stock !== undefined) updateData.stock = Number(data.stock);
    if (data.categoryId !== undefined || data.category_id !== undefined) {
      updateData.categoryId = data.categoryId ? Number(data.categoryId) : (data.category_id ? Number(data.category_id) : null);
    }
    if (data.sku !== undefined) updateData.sku = data.sku;
    if (data.image !== undefined) updateData.image = data.image;
    if (data.description !== undefined) updateData.description = data.description;
    if (data.trackStock !== undefined) updateData.trackStock = Boolean(data.trackStock);
    else if (data.track_stock !== undefined) updateData.trackStock = Boolean(data.track_stock);
    if (data.station !== undefined) updateData.station = data.station;
    if (data.isActive !== undefined) updateData.isActive = Boolean(data.isActive);
    else if (data.is_active !== undefined) updateData.isActive = Boolean(data.is_active);

    await prisma.posProduct.update({
      where: { id },
      data: updateData,
    });

    if (Array.isArray(data.variants)) {
      await prisma.posProductVariant.deleteMany({ where: { productId: id } });
      for (const v of data.variants) {
        if (!v.name) continue;
        await prisma.posProductVariant.create({
          data: {
            productId: id,
            name: v.name,
            priceAdjustment: Number(v.priceAdjustment || v.price_adjustment || 0),
            stock: v.stock !== undefined ? Number(v.stock) : null,
          },
        });
      }
    }

    return await this.getProductById(businessId, id);
  }

  /**
   * Mengambil detail produk tunggal lengkap (varian + resep)
   */
  static async getProductById(businessId: number, id: number) {
    const product = await prisma.posProduct.findFirst({
      where: { id, businessId },
      include: {
        category: {
          select: { id: true, name: true, icon: true },
        },
        variants: {
          select: { id: true, name: true, priceAdjustment: true, stock: true },
        },
        recipes: {
          include: {
            material: {
              select: { id: true, name: true, unit: true, costPerUnit: true, currentStock: true },
            },
          },
        },
      },
    });

    if (!product) {
      throw new Error('Produk tidak ditemukan atau Anda tidak memiliki akses.');
    }

    return product;
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
    const tables = await prisma.posCafeTable.findMany({
      where: { businessId },
      orderBy: { name: 'asc' },
      include: {
        orders: {
          where: {
            status: { not: 'cancelled' },
          },
          orderBy: { createdAt: 'desc' },
          take: 1,
          select: { id: true, status: true },
        },
      },
    });

    return tables.map((t) => ({
      id: t.id,
      name: t.name,
      code: t.name,
      capacity: t.capacity,
      status: t.status,
      current_order_id: t.orders[0]?.id || null,
      createdAt: t.createdAt,
      updatedAt: t.updatedAt,
    }));
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
