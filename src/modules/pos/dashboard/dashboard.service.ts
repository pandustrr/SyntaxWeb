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

    const [todayOrders, weekOrders, monthOrders, totalProducts, totalCustomers] = await Promise.all([
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
      prisma.posCustomer.count({
        where: { businessId },
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
        customers: totalCustomers,
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
   * Peringkat Penjualan Produk: Produk Terlaris (Top Selling) & Produk Terendah (Least Selling)
   */
  static async getProductSalesRanking(
    businessId: number,
    options?: { dateFrom?: string; dateTo?: string; limit?: number }
  ) {
    const limit = options?.limit ?? 10;
    const allProducts = await prisma.posProduct.findMany({
      where: { businessId, isActive: true },
      select: {
        id: true,
        name: true,
        price: true,
        stock: true,
        category: { select: { name: true } },
      },
    });

    const whereOrder: any = {
      businessId,
      status: { not: 'cancelled' },
    };

    if (options?.dateFrom || options?.dateTo) {
      whereOrder.createdAt = {};
      if (options.dateFrom) {
        whereOrder.createdAt.gte = new Date(`${options.dateFrom}T00:00:00.000Z`);
      }
      if (options.dateTo) {
        whereOrder.createdAt.lte = new Date(`${options.dateTo}T23:59:59.999Z`);
      }
    }

    const salesGroup = await prisma.posOrderItem.groupBy({
      by: ['productId', 'productName'],
      where: {
        order: whereOrder,
      },
      _sum: {
        quantity: true,
        subtotal: true,
      },
    });

    const salesMap = new Map<number, { qty: number; revenue: number }>();
    for (const s of salesGroup) {
      salesMap.set(s.productId, {
        qty: s._sum.quantity || 0,
        revenue: Number(s._sum.subtotal || 0),
      });
    }

    const performanceList = allProducts.map((p) => {
      const sales = salesMap.get(p.id) || { qty: 0, revenue: 0 };
      return {
        id: p.id,
        name: p.name,
        category: p.category?.name || 'Menu',
        price: Number(p.price || 0),
        stock: p.stock ?? 0,
        total_qty: sales.qty,
        revenue: sales.revenue,
      };
    });

    // 1. Top Products: Qty terbanyak descending
    const topProducts = [...performanceList]
      .sort((a, b) => b.total_qty !== a.total_qty ? b.total_qty - a.total_qty : b.revenue - a.revenue)
      .slice(0, limit);

    // 2. Least Products: Qty terendah ascending
    const leastProducts = [...performanceList]
      .sort((a, b) => a.total_qty !== b.total_qty ? a.total_qty - b.total_qty : a.revenue - b.revenue)
      .slice(0, limit);

    return {
      top_products: topProducts,
      least_products: leastProducts,
    };
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
   * Deteksi stok menipis / kritis (Menu Produk + Bahan Baku Gudang)
   */
  static async getLowStock(businessId: number) {
    const [products, materials] = await Promise.all([
      prisma.posProduct.findMany({
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
      }),
      prisma.posMaterial.findMany({
        where: {
          businessId,
        },
        orderBy: { currentStock: 'asc' },
      }),
    ]);

    const lowMaterials = materials.filter(
      (m) => Number(m.currentStock) <= Number(m.minimumStock)
    );

    const mappedProducts = products.map((p) => ({
      id: p.id,
      name: p.name,
      type: 'product',
      category: p.category?.name || 'Menu',
      unit: 'porsi',
      current_stock: p.stock ?? 0,
      minimum_stock: 10,
      status: (p.stock ?? 0) <= 0 ? 'out_of_stock' : 'low_stock',
    }));

    const mappedMaterials = lowMaterials.map((m) => {
      const cur = Number(m.currentStock);
      const min = Number(m.minimumStock);
      return {
        id: m.id,
        name: m.name,
        type: 'material',
        category: m.category || 'Bahan Baku',
        unit: m.unit || 'pcs',
        current_stock: cur,
        minimum_stock: min,
        status: cur <= 0 ? 'out_of_stock' : 'low_stock',
      };
    });

    return [...mappedProducts, ...mappedMaterials];
  }

  /**
   * Laporan Penjualan Lengkap (Omzet, HPP/COGS, Profit Bersih, Metode Bayar, Dine-in vs Takeaway)
   */
  static async getBusinessReport(
    businessId: number,
    options?: { dateFrom?: string; dateTo?: string; shiftId?: number }
  ) {
    const where: any = {
      businessId,
      status: { not: 'cancelled' },
    };

    if (options?.shiftId) {
      where.shiftId = options.shiftId;
    } else if (options?.dateFrom || options?.dateTo) {
      where.createdAt = {};
      if (options.dateFrom) {
        where.createdAt.gte = new Date(`${options.dateFrom}T00:00:00.000Z`);
      }
      if (options.dateTo) {
        where.createdAt.lte = new Date(`${options.dateTo}T23:59:59.999Z`);
      }
    }

    const orders = await prisma.posOrder.findMany({
      where,
      include: {
        items: {
          include: {
            product: { select: { costPrice: true } },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    let grossRevenue = 0;
    let totalDiscount = 0;
    let totalTax = 0;
    let totalNet = 0;
    let totalEstimatedCOGS = 0;

    const paymentMethods: Record<string, { count: number; total: number }> = {
      cash: { count: 0, total: 0 },
      qris: { count: 0, total: 0 },
      transfer: { count: 0, total: 0 },
    };

    const channels: Record<string, { count: number; total: number }> = {
      dine_in: { count: 0, total: 0 },
      take_away: { count: 0, total: 0 },
    };

    for (const order of orders) {
      const sub = Number(order.subtotal);
      const disc = Number(order.discount);
      const tax = Number(order.tax);
      const tot = Number(order.total);

      grossRevenue += sub;
      totalDiscount += disc;
      totalTax += tax;
      totalNet += tot;

      // Hitung HPP / COGS estimasi dari costPrice produk
      for (const item of order.items) {
        const costPrice = Number(item.product?.costPrice || 0);
        totalEstimatedCOGS += costPrice * item.quantity;
      }

      // Distribusi metode bayar
      const pm = order.paymentMethod.toLowerCase();
      if (!paymentMethods[pm]) {
        paymentMethods[pm] = { count: 0, total: 0 };
      }
      paymentMethods[pm].count += 1;
      paymentMethods[pm].total += tot;

      // Distribusi channel
      const ch = order.orderType.toLowerCase();
      if (!channels[ch]) {
        channels[ch] = { count: 0, total: 0 };
      }
      channels[ch].count += 1;
      channels[ch].total += tot;
    }

    const grossProfit = Math.max(0, totalNet - totalEstimatedCOGS);
    const profitMargin = totalNet > 0 ? Math.round((grossProfit / totalNet) * 100) : 0;
    const aov = orders.length > 0 ? Math.round(totalNet / orders.length) : 0;

    // Rekonsiliasi perbandingan sesi shift vs transaksi harian pada rentang waktu yang sama
    const shiftWhere: any = { businessId };
    if (options?.shiftId) {
      shiftWhere.id = options.shiftId;
    } else if (options?.dateFrom || options?.dateTo) {
      const sStart = options.dateFrom ? new Date(`${options.dateFrom}T00:00:00.000Z`) : undefined;
      const sEnd = options.dateTo ? new Date(`${options.dateTo}T23:59:59.999Z`) : undefined;
      if (sStart && sEnd) {
        shiftWhere.OR = [
          { startTime: { gte: sStart, lte: sEnd } },
          { endTime: { gte: sStart, lte: sEnd } },
          { status: 'open', startTime: { lte: sEnd } },
        ];
      } else if (sStart) {
        shiftWhere.OR = [
          { startTime: { gte: sStart } },
          { endTime: { gte: sStart } },
          { status: 'open' },
        ];
      } else if (sEnd) {
        shiftWhere.startTime = { lte: sEnd };
      }
    }

    const shifts = await prisma.posShift.findMany({
      where: shiftWhere,
      orderBy: { id: 'desc' },
      include: {
        user: { select: { id: true, name: true } },
        orders: {
          where: { status: { not: 'cancelled' } },
          select: { id: true, total: true, paymentMethod: true },
        },
      },
    });

    let totalShiftStartingCash = 0;
    let totalShiftCashSales = 0;
    let totalShiftNonCashSales = 0;
    let totalShiftSales = 0;
    let totalShiftExpectedCash = 0;
    let totalShiftActualCash = 0;
    let totalShiftDifference = 0;

    const mappedShifts = shifts.map((sh) => {
      let shCash = 0;
      let shNonCash = 0;
      for (const o of sh.orders) {
        const val = Number(o.total || 0);
        const pm = (o.paymentMethod || '').toLowerCase();
        if (pm === 'cash') {
          shCash += val;
        } else {
          shNonCash += val;
        }
      }
      const shTotal = shCash + shNonCash;
      const shStart = Number(sh.startingCash || 0);
      const shExpected = sh.expectedCash !== null ? Number(sh.expectedCash) : shStart + shCash;
      const shActual = sh.actualCash !== null ? Number(sh.actualCash) : null;
      const shDiff = shActual !== null ? shActual - shExpected : Number(sh.difference || 0);

      totalShiftStartingCash += shStart;
      totalShiftCashSales += shCash;
      totalShiftNonCashSales += shNonCash;
      totalShiftSales += shTotal;
      totalShiftExpectedCash += shExpected;
      if (shActual !== null) totalShiftActualCash += shActual;
      totalShiftDifference += shDiff;

      return {
        id: sh.id,
        shift_name: sh.shiftName || `Shift #${sh.id}`,
        status: sh.status,
        cashier_name: sh.openedByName || sh.user?.name || 'Kasir',
        start_time: sh.startTime.toISOString(),
        end_time: sh.endTime ? sh.endTime.toISOString() : null,
        starting_cash: shStart,
        cash_sales: shCash,
        non_cash_sales: shNonCash,
        total_sales: shTotal,
        expected_cash: shExpected,
        actual_cash: shActual,
        difference: shDiff,
        transaction_count: sh.orders.length,
      };
    });

    const unassignedOrders = orders.filter((o) => !o.shiftId);
    const unassignedTotal = unassignedOrders.reduce((sum, o) => sum + Number(o.total || 0), 0);
    const isSynchronized = Math.abs(totalNet - totalShiftSales) < 0.01;

    const cancelledCount = await prisma.posOrder.count({
      where: {
        businessId,
        status: 'cancelled',
        ...(options?.shiftId ? { shiftId: options.shiftId } : where.createdAt ? { createdAt: where.createdAt } : {}),
      },
    });

    return {
      total_orders: orders.length + cancelledCount,
      completed_orders: orders.length,
      cancelled_orders: cancelledCount,
      gross_revenue: grossRevenue,
      total_discount: totalDiscount,
      total_tax: totalTax,
      net_revenue: totalNet,
      total_cogs: totalEstimatedCOGS,
      gross_profit: grossProfit,
      profit_margin_percent: profitMargin,
      average_order_value: aov,
      payment_methods: paymentMethods,
      channels,
      shifts_summary: {
        total_shifts: shifts.length,
        total_starting_cash: totalShiftStartingCash,
        total_cash_sales: totalShiftCashSales,
        total_non_cash_sales: totalShiftNonCashSales,
        total_expected_cash: totalShiftExpectedCash,
        total_actual_cash: totalShiftActualCash,
        total_difference: totalShiftDifference,
        shift_sales_total: totalShiftSales,
        is_synchronized: isSynchronized,
        unassigned_orders_count: unassignedOrders.length,
        unassigned_orders_total: unassignedTotal,
        shifts: mappedShifts,
      },
    };
  }
}
