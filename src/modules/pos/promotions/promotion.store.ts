export interface Promotion {
  id: number;
  name: string;
  code: string;
  type: 'percentage' | 'fixed';
  discount_value: number;
  min_purchase: number;
  usage_count: number;
  usage_limit: number | null;
  end_date: string | null;
  is_active: boolean;
}

let promoStore: Promotion[] = [
  { id: 1, name: 'Diskon Grand Opening', code: 'DISKON10', type: 'percentage', discount_value: 10, min_purchase: 50000, usage_count: 38, usage_limit: 100, end_date: '2026-12-31', is_active: true },
  { id: 2, name: 'Promo Payday Ceria', code: 'GAJIAN20', type: 'percentage', discount_value: 20, min_purchase: 100000, usage_count: 48, usage_limit: 50, end_date: '2026-11-05', is_active: true },
  { id: 3, name: 'Potongan Tunai Syntax', code: 'SYNTAX15', type: 'fixed', discount_value: 15000, min_purchase: 60000, usage_count: 24, usage_limit: null, end_date: null, is_active: true },
  { id: 4, name: 'Kopi Hemat Pagi', code: 'NGOPIHEMAT', type: 'fixed', discount_value: 8000, min_purchase: 30000, usage_count: 62, usage_limit: 150, end_date: '2026-12-01', is_active: true },
  { id: 5, name: 'Weekend Ramean Seru', code: 'WEEKEND25', type: 'percentage', discount_value: 25, min_purchase: 150000, usage_count: 19, usage_limit: 50, end_date: '2026-11-30', is_active: true },
  { id: 6, name: 'Diskon Khusus Member VIP', code: 'MEMBERVIP', type: 'percentage', discount_value: 15, min_purchase: 75000, usage_count: 76, usage_limit: null, end_date: null, is_active: true },
  { id: 7, name: 'Voucher Snack Sore Manis', code: 'FREESNACK', type: 'fixed', discount_value: 12000, min_purchase: 50000, usage_count: 14, usage_limit: 30, end_date: '2026-10-31', is_active: true },
  { id: 8, name: 'Kupon Spesial Akhir Tahun', code: 'YEAREND50', type: 'percentage', discount_value: 50, min_purchase: 200000, usage_count: 50, usage_limit: 50, end_date: '2025-12-31', is_active: false },
];

export class PosPromotionService {
  static getPromotions() {
    return promoStore;
  }

  static createPromotion(data: Partial<Promotion>) {
    const newId = promoStore.length > 0 ? Math.max(...promoStore.map((p) => p.id)) + 1 : 1;
    const promo: Promotion = {
      id: newId,
      name: data.name || 'Promo Baru',
      code: (data.code || `PROMO${newId}`).toUpperCase(),
      type: data.type || 'percentage',
      discount_value: Number(data.discount_value || 10),
      min_purchase: Number(data.min_purchase || 0),
      usage_count: 0,
      usage_limit: data.usage_limit ? Number(data.usage_limit) : null,
      end_date: data.end_date || null,
      is_active: data.is_active !== undefined ? data.is_active : true,
    };
    promoStore.push(promo);
    return promo;
  }

  static updatePromotion(id: number, data: Partial<Promotion>) {
    const idx = promoStore.findIndex((p) => p.id === id);
    if (idx === -1) throw new Error('Promosi tidak ditemukan');
    promoStore[idx] = {
      ...promoStore[idx],
      ...data,
    };
    return promoStore[idx];
  }

  static deletePromotion(id: number) {
    promoStore = promoStore.filter((p) => p.id !== id);
    return true;
  }
}
