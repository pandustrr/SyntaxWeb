import { prisma } from '@/core/db/prisma';

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

export class PosPromotionService {
  static async getPromotions(businessId: number): Promise<Promotion[]> {
    try {
      const list = await prisma.posPromotion.findMany({
        where: { businessId },
        orderBy: { id: 'desc' },
      });

      return list.map((p) => ({
        id: p.id,
        name: p.name,
        code: p.code,
        type: (p.type === 'fixed' ? 'fixed' : 'percentage') as 'percentage' | 'fixed',
        discount_value: Number(p.discountValue),
        min_purchase: Number(p.minPurchase),
        usage_count: p.usageCount,
        usage_limit: p.usageLimit,
        end_date: p.endDate ? p.endDate.toISOString().slice(0, 10) : null,
        is_active: p.isActive,
      }));
    } catch (e) {
      console.error('[PosPromotionService.getPromotions] error:', e);
      return [];
    }
  }

  static async createPromotion(businessId: number, data: Partial<Promotion>): Promise<Promotion> {
    const code = (data.code || `PROMO_${Date.now().toString(36)}`).toUpperCase().trim();
    const created = await prisma.posPromotion.create({
      data: {
        businessId,
        name: data.name || 'Promo Baru',
        code,
        type: data.type === 'fixed' ? 'fixed' : 'percentage',
        discountValue: Number(data.discount_value ?? 10),
        minPurchase: Number(data.min_purchase ?? 0),
        usageCount: 0,
        usageLimit: data.usage_limit ? Number(data.usage_limit) : null,
        endDate: data.end_date ? new Date(data.end_date) : null,
        isActive: data.is_active !== undefined ? Boolean(data.is_active) : true,
      },
    });

    return {
      id: created.id,
      name: created.name,
      code: created.code,
      type: created.type as 'percentage' | 'fixed',
      discount_value: Number(created.discountValue),
      min_purchase: Number(created.minPurchase),
      usage_count: created.usageCount,
      usage_limit: created.usageLimit,
      end_date: created.endDate ? created.endDate.toISOString().slice(0, 10) : null,
      is_active: created.isActive,
    };
  }

  static async updatePromotion(
    businessId: number,
    id: number,
    data: Partial<Promotion>
  ): Promise<Promotion> {
    const existing = await prisma.posPromotion.findFirst({
      where: { id, businessId },
    });
    if (!existing) throw new Error('Promosi tidak ditemukan di outlet Anda');

    const updateData: {
      name?: string;
      code?: string;
      type?: string;
      discountValue?: number;
      minPurchase?: number;
      usageLimit?: number | null;
      endDate?: Date | null;
      isActive?: boolean;
    } = {};

    if (data.name !== undefined) updateData.name = data.name;
    if (data.code !== undefined) updateData.code = data.code.toUpperCase().trim();
    if (data.type !== undefined) updateData.type = data.type;
    if (data.discount_value !== undefined) updateData.discountValue = Number(data.discount_value);
    if (data.min_purchase !== undefined) updateData.minPurchase = Number(data.min_purchase);
    if (data.usage_limit !== undefined) updateData.usageLimit = data.usage_limit ? Number(data.usage_limit) : null;
    if (data.end_date !== undefined) updateData.endDate = data.end_date ? new Date(data.end_date) : null;
    if (data.is_active !== undefined) updateData.isActive = Boolean(data.is_active);

    const updated = await prisma.posPromotion.update({
      where: { id },
      data: updateData,
    });

    return {
      id: updated.id,
      name: updated.name,
      code: updated.code,
      type: updated.type as 'percentage' | 'fixed',
      discount_value: Number(updated.discountValue),
      min_purchase: Number(updated.minPurchase),
      usage_count: updated.usageCount,
      usage_limit: updated.usageLimit,
      end_date: updated.endDate ? updated.endDate.toISOString().slice(0, 10) : null,
      is_active: updated.isActive,
    };
  }

  static async deletePromotion(businessId: number, id: number): Promise<boolean> {
    const existing = await prisma.posPromotion.findFirst({
      where: { id, businessId },
    });
    if (!existing) throw new Error('Promosi tidak ditemukan di outlet Anda');

    await prisma.posPromotion.delete({
      where: { id },
    });
    return true;
  }

  static async validatePromotion(
    businessId: number,
    code: string,
    subtotal: number
  ) {
    if (!code || !code.trim()) {
      throw new Error('Kode promo wajib diisi');
    }

    const cleanCode = code.trim().toUpperCase();
    const promo = await prisma.posPromotion.findFirst({
      where: {
        businessId,
        code: cleanCode,
      },
    });

    if (!promo) {
      throw new Error('Kode voucher tidak valid atau tidak terdaftar');
    }

    if (!promo.isActive) {
      throw new Error('Kode voucher sedang dinonaktifkan');
    }

    const now = new Date();
    if (promo.endDate && new Date(promo.endDate) < now) {
      throw new Error('Masa berlaku kode voucher telah berakhir');
    }

    if (promo.usageLimit !== null && promo.usageCount >= promo.usageLimit) {
      throw new Error('Kuota pemakaian kode voucher telah habis');
    }

    const minPurchase = Number(promo.minPurchase);
    if (subtotal < minPurchase) {
      throw new Error(
        `Minimal transaksi untuk kupon ini adalah Rp ${minPurchase.toLocaleString('id-ID')}`
      );
    }

    let discount = 0;
    if (promo.type === 'percentage') {
      discount = Math.round((subtotal * Number(promo.discountValue)) / 100);
    } else {
      discount = Number(promo.discountValue);
    }
    discount = Math.min(discount, subtotal);

    return {
      valid: true,
      promo_id: promo.id,
      code: promo.code,
      name: promo.name,
      type: promo.type,
      discount_value: Number(promo.discountValue),
      discount,
      min_purchase: minPurchase,
      subtotal,
      final_total: Math.max(0, subtotal - discount),
    };
  }
}
