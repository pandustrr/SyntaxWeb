import { prisma } from '@/core/db/prisma';

export interface Material {
  id: number;
  name: string;
  category: string;
  unit: string;
  current_stock: number;
  minimum_stock: number;
  cost_per_unit: number;
  status: 'normal' | 'low_stock' | 'out_of_stock';
  recipe_count?: number;
}

export interface MaterialCategory {
  id: number;
  name: string;
  material_count: number;
}

export interface GetMaterialsOptions {
  category?: string;
  status?: string;
  search?: string;
}

export class PosMaterialService {
  /**
   * Mengambil daftar bahan baku dengan opsi filter kategori, status stok, dan pencarian nama
   */
  static async getMaterials(
    businessId: number,
    options?: GetMaterialsOptions
  ): Promise<Material[]> {
    try {
      const where: any = { businessId };

      if (options?.category && options.category !== 'all' && options.category.trim() !== '') {
        where.category = options.category.trim();
      }

      if (options?.search && options.search.trim() !== '') {
        where.name = { contains: options.search.trim() };
      }

      const items = await prisma.posMaterial.findMany({
        where,
        orderBy: { id: 'asc' },
        include: {
          _count: {
            select: { recipeItems: true },
          },
        },
      });

      const mapped: Material[] = items.map((m) => {
        const cur = Number(m.currentStock);
        const min = Number(m.minimumStock);
        return {
          id: m.id,
          name: m.name,
          category: m.category || 'Lainnya',
          unit: m.unit,
          current_stock: cur,
          minimum_stock: min,
          cost_per_unit: Number(m.costPerUnit),
          status: cur <= 0 ? 'out_of_stock' : cur <= min ? 'low_stock' : 'normal',
          recipe_count: m._count.recipeItems,
        };
      });

      if (options?.status && options.status !== 'all') {
        return mapped.filter((m) => m.status === options.status);
      }

      return mapped;
    } catch (e) {
      console.error('[PosMaterialService.getMaterials] error:', e);
      return [];
    }
  }

  /**
   * Tambah bahan baku baru
   */
  static async createMaterial(businessId: number, data: any): Promise<Material> {
    const cur = Number(data.current_stock ?? data.currentStock ?? 0);
    const min = Number(data.minimum_stock ?? data.minimumStock ?? 5);
    const cost = Number(data.cost_per_unit ?? data.costPerUnit ?? 10000);
    const catName = (data.category || 'Lainnya').trim();

    if (catName && catName !== 'Lainnya') {
      await this.ensureCategoryExists(businessId, catName);
    }

    const created = await prisma.posMaterial.create({
      data: {
        businessId,
        name: (data.name || 'Bahan Baku Baru').trim(),
        category: catName,
        unit: (data.unit || 'pcs').trim(),
        currentStock: cur,
        minimumStock: min,
        costPerUnit: cost,
      },
      include: {
        _count: {
          select: { recipeItems: true },
        },
      },
    });

    return {
      id: created.id,
      name: created.name,
      category: created.category,
      unit: created.unit,
      current_stock: Number(created.currentStock),
      minimum_stock: Number(created.minimumStock),
      cost_per_unit: Number(created.costPerUnit),
      status: cur <= 0 ? 'out_of_stock' : cur <= min ? 'low_stock' : 'normal',
      recipe_count: created._count.recipeItems,
    };
  }

  static async getMaterialById(businessId: number, id: number): Promise<Material> {
    const item = await prisma.posMaterial.findFirst({
      where: { id, businessId },
      include: {
        _count: {
          select: { recipeItems: true },
        },
      },
    });
    if (!item) throw new Error('Bahan baku tidak ditemukan di outlet Anda');

    const cur = Number(item.currentStock);
    const min = Number(item.minimumStock);
    return {
      id: item.id,
      name: item.name,
      category: item.category,
      unit: item.unit,
      current_stock: cur,
      minimum_stock: min,
      cost_per_unit: Number(item.costPerUnit),
      status: cur <= 0 ? 'out_of_stock' : cur <= min ? 'low_stock' : 'normal',
      recipe_count: item._count.recipeItems,
    };
  }

  static async updateMaterial(
    businessId: number,
    id: number,
    data: any
  ): Promise<Material> {
    const existing = await prisma.posMaterial.findFirst({
      where: { id, businessId },
    });
    if (!existing) throw new Error('Bahan baku tidak ditemukan di outlet Anda');

    const updateData: {
      name?: string;
      category?: string;
      unit?: string;
      currentStock?: number;
      minimumStock?: number;
      costPerUnit?: number;
    } = {};

    if (data.name !== undefined) updateData.name = data.name.trim();
    if (data.category !== undefined) {
      const catName = data.category.trim();
      updateData.category = catName;
      if (catName && catName !== 'Lainnya') {
        await this.ensureCategoryExists(businessId, catName);
      }
    }
    if (data.unit !== undefined) updateData.unit = data.unit.trim();
    if (data.current_stock !== undefined || data.currentStock !== undefined) {
      updateData.currentStock = Number(data.current_stock ?? data.currentStock);
    }
    if (data.minimum_stock !== undefined || data.minimumStock !== undefined) {
      updateData.minimumStock = Number(data.minimum_stock ?? data.minimumStock);
    }
    if (data.cost_per_unit !== undefined || data.costPerUnit !== undefined) {
      updateData.costPerUnit = Number(data.cost_per_unit ?? data.costPerUnit);
    }

    const updated = await prisma.posMaterial.update({
      where: { id },
      data: updateData,
      include: {
        _count: {
          select: { recipeItems: true },
        },
      },
    });

    const cur = Number(updated.currentStock);
    const min = Number(updated.minimumStock);
    return {
      id: updated.id,
      name: updated.name,
      category: updated.category,
      unit: updated.unit,
      current_stock: cur,
      minimum_stock: min,
      cost_per_unit: Number(updated.costPerUnit),
      status: cur <= 0 ? 'out_of_stock' : cur <= min ? 'low_stock' : 'normal',
      recipe_count: updated._count.recipeItems,
    };
  }

  static async deleteMaterial(businessId: number, id: number): Promise<boolean> {
    const existing = await prisma.posMaterial.findFirst({
      where: { id, businessId },
    });
    if (!existing) throw new Error('Bahan baku tidak ditemukan di outlet Anda');

    await prisma.posMaterial.delete({
      where: { id },
    });
    return true;
  }

  static async adjustStock(
    businessId: number,
    id: number,
    type: 'in' | 'out',
    amount: number
  ): Promise<Material> {
    const item = await prisma.posMaterial.findFirst({
      where: { id, businessId },
      include: {
        _count: {
          select: { recipeItems: true },
        },
      },
    });
    if (!item) throw new Error('Bahan baku tidak ditemukan di outlet Anda');

    const cur = Number(item.currentStock);
    const newStock = type === 'in' ? cur + amount : Math.max(0, cur - amount);

    const updated = await prisma.posMaterial.update({
      where: { id },
      data: { currentStock: newStock },
      include: {
        _count: {
          select: { recipeItems: true },
        },
      },
    });

    const min = Number(updated.minimumStock);
    return {
      id: updated.id,
      name: updated.name,
      category: updated.category,
      unit: updated.unit,
      current_stock: newStock,
      minimum_stock: min,
      cost_per_unit: Number(updated.costPerUnit),
      status: newStock <= 0 ? 'out_of_stock' : newStock <= min ? 'low_stock' : 'normal',
      recipe_count: updated._count.recipeItems,
    };
  }

  // ==============================================================================
  // CRUD KATEGORI BAHAN BAKU
  // ==============================================================================

  private static async ensureCategoryExists(businessId: number, name: string) {
    const cleanName = name.trim();
    if (!cleanName) return;
    try {
      await prisma.posMaterialCategory.upsert({
        where: {
          businessId_name: { businessId, name: cleanName },
        },
        create: { businessId, name: cleanName },
        update: {},
      });
    } catch (_) {}
  }

  static async getCategories(businessId: number): Promise<MaterialCategory[]> {
    let categories = await prisma.posMaterialCategory.findMany({
      where: { businessId },
      orderBy: { name: 'asc' },
    });

    if (categories.length === 0) {
      const defaultCategories = [
        'Biji Kopi & Teh',
        'Susu & Dairy',
        'Sirup & Pemanis',
        'Bubuk Minuman',
        'Bahan Dapur & Makanan',
        'Packaging / Kemasan',
        'Lainnya',
      ];

      for (const name of defaultCategories) {
        await prisma.posMaterialCategory.create({
          data: { businessId, name },
        }).catch(() => {});
      }

      categories = await prisma.posMaterialCategory.findMany({
        where: { businessId },
        orderBy: { name: 'asc' },
      });
    }

    const materialCounts = await prisma.posMaterial.groupBy({
      by: ['category'],
      where: { businessId },
      _count: { id: true },
    });

    const countMap = new Map<string, number>();
    for (const c of materialCounts) {
      countMap.set(c.category, c._count.id);
    }

    return categories.map((cat) => ({
      id: cat.id,
      name: cat.name,
      material_count: countMap.get(cat.name) || 0,
    }));
  }

  static async createCategory(businessId: number, name: string): Promise<MaterialCategory> {
    const cleanName = name.trim();
    if (!cleanName) {
      throw new Error('Nama kategori bahan tidak boleh kosong.');
    }

    const existing = await prisma.posMaterialCategory.findFirst({
      where: { businessId, name: cleanName },
    });
    if (existing) {
      throw new Error(`Kategori bahan "${cleanName}" sudah ada.`);
    }

    const created = await prisma.posMaterialCategory.create({
      data: { businessId, name: cleanName },
    });

    return {
      id: created.id,
      name: created.name,
      material_count: 0,
    };
  }

  static async updateCategory(
    businessId: number,
    id: number,
    newName: string
  ): Promise<MaterialCategory> {
    const cleanName = newName.trim();
    if (!cleanName) {
      throw new Error('Nama kategori bahan tidak boleh kosong.');
    }

    const existing = await prisma.posMaterialCategory.findFirst({
      where: { id, businessId },
    });
    if (!existing) {
      throw new Error('Kategori bahan tidak ditemukan.');
    }

    const duplicate = await prisma.posMaterialCategory.findFirst({
      where: {
        businessId,
        name: cleanName,
        id: { not: id },
      },
    });
    if (duplicate) {
      throw new Error(`Kategori bahan "${cleanName}" sudah digunakan.`);
    }

    const oldName = existing.name;

    const updated = await prisma.posMaterialCategory.update({
      where: { id },
      data: { name: cleanName },
    });

    await prisma.posMaterial.updateMany({
      where: { businessId, category: oldName },
      data: { category: cleanName },
    });

    const count = await prisma.posMaterial.count({
      where: { businessId, category: cleanName },
    });

    return {
      id: updated.id,
      name: updated.name,
      material_count: count,
    };
  }

  static async deleteCategory(businessId: number, id: number): Promise<boolean> {
    const existing = await prisma.posMaterialCategory.findFirst({
      where: { id, businessId },
    });
    if (!existing) {
      throw new Error('Kategori bahan tidak ditemukan.');
    }

    await prisma.posMaterial.updateMany({
      where: { businessId, category: existing.name },
      data: { category: 'Lainnya' },
    });

    await prisma.posMaterialCategory.delete({
      where: { id },
    });

    return true;
  }

}
