import { prisma } from '@/core/db/prisma';

export class PosDashboardService {
  /**
   * Ringkasan performa penjualan (Hari ini, Minggu ini, Bulan ini)
   */
  static async getSummary(businessId: number) {
    const now = new Date();
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - 7);
    startOfWeek.setHours(0, 0, 0, 0);

    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    const [todayOrders, weekOrders, monthOrders, totalProducts] = await Promise.all([
      prisma.posOrder.findMany({
        where: {
          businessId,
          status: { not: 'cancelled' },
          createdAt: { gte: startOfToday },
        },
        select: { total: true },
      }),
      prisma.posOrder.findMany({
        where: {
          businessId,
          status: { not: 'cancelled' },
          createdAt: { gte: startOfWeek },
        },
        select: { total: true },
      }),
      prisma.posOrder.findMany({
        where: {
          businessId,
          status: { not: 'cancelled' },
          createdAt: { gte: startOfMonth },
        },
        select: { total: true },
      }),
      prisma.posProduct.count({
        where: { businessId, isActive: true },
      }),
    ]);

    const todayRev = todayOrders.reduce((sum, o) => sum + Number(o.total), 0);
    const weekRev = weekOrders.reduce((sum, o) => sum + Number(o.total), 0);
    const monthRev = monthOrders.reduce((sum, o) => sum + Number(o.total), 0);

    return {
      today: {
        revenue: todayRev,
        orders: todayOrders.length,
      },
      week: {
        revenue: weekRev,
        orders: weekOrders.length,
      },
      month: {
        revenue: monthRev,
        orders: monthOrders.length,
      },
      totals: {
        products: totalProducts,
        customers: 14,
      },
    };
  }

  /**
   * Grafik tren omzet harian
   */
  static async getRevenueChart(businessId: number, days: number = 7) {
    const result = [];
    const now = new Date();

    for (let i = days - 1; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(now.getDate() - i);
      const dayStart = new Date(d.getFullYear(), d.getMonth(), d.getDate());
      const dayEnd = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 23, 59, 59, 999);
      const dateStr = dayStart.toISOString().slice(0, 10);

      const orders = await prisma.posOrder.findMany({
        where: {
          businessId,
          status: { not: 'cancelled' },
          createdAt: {
            gte: dayStart,
            lte: dayEnd,
          },
        },
        select: { total: true },
      });

      const dayRevenue = orders.reduce((sum, o) => sum + Number(o.total), 0);
      result.push({
        date: dateStr,
        revenue: dayRevenue,
        orders: orders.length,
      });
    }

    return result;
  }

  /**
   * Produk terlaris (Top Selling)
   */
  static async getTopProducts(businessId: number, limit: number = 5) {
    const items = await prisma.posOrderItem.groupBy({
      by: ['productId', 'productName'],
      where: {
        order: {
          businessId,
          status: { not: 'cancelled' },
        },
      },
      _sum: {
        quantity: true,
        subtotal: true,
      },
      orderBy: {
        _sum: {
          quantity: 'desc',
        },
      },
      take: limit,
    });

    if (items.length === 0) {
      // Fallback ke produk katalog aktif
      const defaultProds = await prisma.posProduct.findMany({
        where: { businessId, isActive: true },
        take: limit,
        select: { id: true, name: true, price: true },
      });
      return defaultProds.map((p) => ({
        id: p.id,
        name: p.name,
        total_qty: 0,
        revenue: Number(p.price),
      }));
    }

    return items.map((it) => ({
      id: it.productId,
      name: it.productName,
      total_qty: it._sum.quantity || 0,
      revenue: Number(it._sum.subtotal || 0),
    }));
  }

  /**
   * Deteksi stok menipis / kritis
   */
  static async getLowStock(businessId: number) {
    const products = await prisma.posProduct.findMany({
      where: {
        businessId,
        isActive: true,
        trackStock: true,
        stock: { lte: 20 },
      },
      include: {
        category: { select: { name: true } },
      },
      orderBy: { stock: 'asc' },
      take: 10,
    });

    return products.map((p) => ({
      id: p.id,
      name: p.name,
      category: p.category?.name || 'Menu',
      unit: 'porsi',
      current_stock: p.stock ?? 0,
      minimum_stock: 10,
      status: (p.stock ?? 0) <= 0 ? 'out_of_stock' : 'low_stock',
    }));
  }
}
