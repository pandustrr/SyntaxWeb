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

let materialStore: Material[] = [
  { id: 1, name: 'Biji Kopi Arabika Gayo Blend', category: 'Biji Kopi', unit: 'kg', current_stock: 12.5, minimum_stock: 5.0, cost_per_unit: 135000, status: 'normal' },
  { id: 2, name: 'Biji Kopi Robusta Dampit', category: 'Biji Kopi', unit: 'kg', current_stock: 8.0, minimum_stock: 5.0, cost_per_unit: 85000, status: 'normal' },
  { id: 3, name: 'Susu Segar (Fresh Milk Greenfields)', category: 'Dairy', unit: 'liter', current_stock: 4.0, minimum_stock: 12.0, cost_per_unit: 19500, status: 'low_stock' },
  { id: 4, name: 'Susu Oatmilk Barista Edition', category: 'Dairy', unit: 'liter', current_stock: 3.0, minimum_stock: 6.0, cost_per_unit: 42000, status: 'low_stock' },
  { id: 5, name: 'Sirup Vanilla Monin Premium', category: 'Sirup', unit: 'botol', current_stock: 2.0, minimum_stock: 2.0, cost_per_unit: 135000, status: 'normal' },
  { id: 6, name: 'Sirup Karamel Monin Gourmet', category: 'Sirup', unit: 'botol', current_stock: 1.0, minimum_stock: 2.0, cost_per_unit: 135000, status: 'low_stock' },
  { id: 7, name: 'Pure Uji Matcha Powder Jepang', category: 'Bubuk Minuman', unit: 'kg', current_stock: 0.8, minimum_stock: 1.0, cost_per_unit: 450000, status: 'low_stock' },
  { id: 8, name: 'Cokelat Bubuk Belgia Dark', category: 'Bubuk Minuman', unit: 'kg', current_stock: 3.5, minimum_stock: 2.0, cost_per_unit: 95000, status: 'normal' },
  { id: 9, name: 'Gula Aren Cair Organik Nira', category: 'Pemanis', unit: 'liter', current_stock: 15.0, minimum_stock: 5.0, cost_per_unit: 28000, status: 'normal' },
  { id: 10, name: 'Beras Premium Pandan Wangi', category: 'Bahan Pokok', unit: 'kg', current_stock: 25.0, minimum_stock: 10.0, cost_per_unit: 16500, status: 'normal' },
  { id: 11, name: 'Daging Ayam Fillet Dada', category: 'Daging & Unggas', unit: 'kg', current_stock: 6.5, minimum_stock: 5.0, cost_per_unit: 42000, status: 'normal' },
  { id: 12, name: 'Daging Sapi Slice US Shortplate', category: 'Daging & Unggas', unit: 'kg', current_stock: 2.0, minimum_stock: 5.0, cost_per_unit: 125000, status: 'low_stock' },
  { id: 13, name: 'Telur Ayam Negeri Fresh', category: 'Bahan Pokok', unit: 'kg', current_stock: 10.0, minimum_stock: 5.0, cost_per_unit: 29000, status: 'normal' },
  { id: 14, name: 'Butter Croissant Dough Unbaked', category: 'Bakery', unit: 'pcs', current_stock: 0.0, minimum_stock: 40.0, cost_per_unit: 8000, status: 'out_of_stock' },
  { id: 15, name: 'Paper Cup Hot 8oz Logo Syntax', category: 'Packaging', unit: 'pcs', current_stock: 350.0, minimum_stock: 100.0, cost_per_unit: 650, status: 'normal' },
  { id: 16, name: 'Plastic Cup Cold 16oz + Lid', category: 'Packaging', unit: 'pcs', current_stock: 85.0, minimum_stock: 200.0, cost_per_unit: 750, status: 'low_stock' },
];

export class PosMaterialService {
  static getMaterials() {
    return materialStore;
  }

  static createMaterial(data: Partial<Material>) {
    const newId = materialStore.length > 0 ? Math.max(...materialStore.map((m) => m.id)) + 1 : 1;
    const current = Number(data.current_stock || 0);
    const min = Number(data.minimum_stock || 5);
    const material: Material = {
      id: newId,
      name: data.name || 'Bahan Baku Baru',
      category: data.category || 'Lainnya',
      unit: data.unit || 'pcs',
      current_stock: current,
      minimum_stock: min,
      cost_per_unit: Number(data.cost_per_unit || 10000),
      status: current <= 0 ? 'out_of_stock' : current <= min ? 'low_stock' : 'normal',
    };
    materialStore.push(material);
    return material;
  }

  static adjustStock(id: number, type: 'in' | 'out', amount: number) {
    const item = materialStore.find((m) => m.id === id);
    if (!item) throw new Error('Bahan baku tidak ditemukan');

    if (type === 'in') {
      item.current_stock += amount;
    } else {
      item.current_stock = Math.max(0, item.current_stock - amount);
    }

    item.status =
      item.current_stock <= 0
        ? 'out_of_stock'
        : item.current_stock <= item.minimum_stock
        ? 'low_stock'
        : 'normal';

    return item;
  }
}
