import { prisma } from '@/core/db/prisma';

export interface PosAddonItem {
  id: number;
  name: string;
  category: string;
  price: number;
  isAvailable: boolean;
  createdAt?: string;
  updatedAt?: string;
}

const DEFAULT_ADDONS: PosAddonItem[] = [
  { id: 1, name: 'Boba Brown Sugar', category: 'Topping', price: 5000, isAvailable: true },
  { id: 2, name: 'Extra Shot Espresso', category: 'Kopi', price: 5000, isAvailable: true },
  { id: 3, name: 'Sub Oatmilk', category: 'Susu', price: 8000, isAvailable: true },
  { id: 4, name: 'Grass Jelly', category: 'Topping', price: 4000, isAvailable: true },
  { id: 5, name: 'Keju Mozzarella', category: 'Makanan', price: 6000, isAvailable: true },
  { id: 6, name: 'Telur Mata Sapi', category: 'Makanan', price: 5000, isAvailable: true },
  { id: 7, name: 'Less Sugar (50%)', category: 'Gula', price: 0, isAvailable: true },
  { id: 8, name: 'No Sugar (0%)', category: 'Gula', price: 0, isAvailable: true },
];

export class PosAddonService {
  private static getKey(businessId: number): string {
    return `pos_addons_${businessId}`;
  }

  static async getAddons(businessId: number): Promise<PosAddonItem[]> {
    const config = await prisma.posPlatformConfig.findUnique({
      where: { key: this.getKey(businessId) },
    });

    if (!config || !config.value) {
      const initialJson = JSON.stringify(DEFAULT_ADDONS);
      await prisma.posPlatformConfig.upsert({
        where: { key: this.getKey(businessId) },
        update: { value: initialJson },
        create: { key: this.getKey(businessId), value: initialJson },
      });
      return DEFAULT_ADDONS;
    }

    try {
      const parsed = JSON.parse(config.value);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  static async createAddon(businessId: number, data: Partial<PosAddonItem>): Promise<PosAddonItem> {
    const addons = await this.getAddons(businessId);
    const newId = addons.length > 0 ? Math.max(...addons.map((a) => a.id)) + 1 : 1;
    const now = new Date().toISOString();

    const newAddon: PosAddonItem = {
      id: newId,
      name: data.name?.trim() || 'Add-on Baru',
      category: data.category?.trim() || 'Topping',
      price: Number(data.price ?? 0),
      isAvailable: data.isAvailable !== undefined ? Boolean(data.isAvailable) : true,
      createdAt: now,
      updatedAt: now,
    };

    addons.push(newAddon);

    await prisma.posPlatformConfig.upsert({
      where: { key: this.getKey(businessId) },
      update: { value: JSON.stringify(addons) },
      create: { key: this.getKey(businessId), value: JSON.stringify(addons) },
    });

    return newAddon;
  }

  static async updateAddon(businessId: number, id: number, data: Partial<PosAddonItem>): Promise<PosAddonItem> {
    const addons = await this.getAddons(businessId);
    const index = addons.findIndex((a) => a.id === id);
    if (index === -1) {
      throw new Error('Add-on tidak ditemukan');
    }

    const current = addons[index];
    const updated: PosAddonItem = {
      ...current,
      name: data.name !== undefined ? data.name.trim() : current.name,
      category: data.category !== undefined ? data.category.trim() : current.category,
      price: data.price !== undefined ? Number(data.price) : current.price,
      isAvailable: data.isAvailable !== undefined ? Boolean(data.isAvailable) : current.isAvailable,
      updatedAt: new Date().toISOString(),
    };

    addons[index] = updated;

    await prisma.posPlatformConfig.upsert({
      where: { key: this.getKey(businessId) },
      update: { value: JSON.stringify(addons) },
      create: { key: this.getKey(businessId), value: JSON.stringify(addons) },
    });

    return updated;
  }

  static async deleteAddon(businessId: number, id: number): Promise<boolean> {
    const addons = await this.getAddons(businessId);
    const filtered = addons.filter((a) => a.id !== id);
    if (filtered.length === addons.length) {
      throw new Error('Add-on tidak ditemukan');
    }

    await prisma.posPlatformConfig.upsert({
      where: { key: this.getKey(businessId) },
      update: { value: JSON.stringify(filtered) },
      create: { key: this.getKey(businessId), value: JSON.stringify(filtered) },
    });

    return true;
  }
}
