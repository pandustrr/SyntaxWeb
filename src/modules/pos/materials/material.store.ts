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
}

export class PosMaterialService {
  static async getMaterials(businessId: number): Promise<Material[]> {
    try {
      const items = await prisma.posMaterial.findMany({
        where: { businessId },
        orderBy: { id: 'asc' },
      });

      return items.map((m) => {
        const cur = Number(m.currentStock);
        const min = Number(m.minimumStock);
        return {
          id: m.id,
          name: m.name,
          category: m.category,
          unit: m.unit,
          current_stock: cur,
          minimum_stock: min,
          cost_per_unit: Number(m.costPerUnit),
          status: cur <= 0 ? 'out_of_stock' : cur <= min ? 'low_stock' : 'normal',
        };
      });
    } catch (e) {
      console.error('[PosMaterialService.getMaterials] error:', e);
      return [];
    }
  }

  static async createMaterial(businessId: number, data: any): Promise<Material> {
    const cur = Number(data.current_stock ?? data.currentStock ?? 0);
    const min = Number(data.minimum_stock ?? data.minimumStock ?? 5);
    const cost = Number(data.cost_per_unit ?? data.costPerUnit ?? 10000);

    const created = await prisma.posMaterial.create({
      data: {
        businessId,
        name: data.name || 'Bahan Baku Baru',
        category: data.category || 'Lainnya',
        unit: data.unit || 'pcs',
        currentStock: cur,
        minimumStock: min,
        costPerUnit: cost,
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
    };
  }

  static async adjustStock(
    businessId: number,
    id: number,
    type: 'in' | 'out',
    amount: number
  ): Promise<Material> {
    const item = await prisma.posMaterial.findFirst({
      where: { id, businessId },
    });
    if (!item) throw new Error('Bahan baku tidak ditemukan di outlet Anda');

    const cur = Number(item.currentStock);
    const newStock = type === 'in' ? cur + amount : Math.max(0, cur - amount);

    const updated = await prisma.posMaterial.update({
      where: { id },
      data: { currentStock: newStock },
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
    };
  }

  static async getMaterialById(businessId: number, id: number): Promise<Material> {
    const item = await prisma.posMaterial.findFirst({
      where: { id, businessId },
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

    if (data.name !== undefined) updateData.name = data.name;
    if (data.category !== undefined) updateData.category = data.category;
    if (data.unit !== undefined) updateData.unit = data.unit;
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
}
