import { prisma } from '@/core/db/prisma';

export class PosShiftService {
  /**
   * Mengambil shift yang sedang aktif (status: open) untuk kasir di toko ini
   */
  static async getCurrentShift(businessId: number, userId: number) {
    const shift = await prisma.posShift.findFirst({
      where: {
        businessId,
        userId,
        status: 'open',
      },
      orderBy: {
        id: 'desc',
      },
      include: {
        orders: {
          select: {
            id: true,
            orderNumber: true,
            total: true,
            paymentMethod: true,
            createdAt: true,
          },
        },
      },
    });

    if (!shift) return null;

    // Hitung ringkasan penerimaan kas sementara
    const cashOrders = shift.orders.filter((o) => o.paymentMethod === 'cash');
    const nonCashOrders = shift.orders.filter((o) => o.paymentMethod !== 'cash');

    const totalCashSales = cashOrders.reduce((sum, o) => sum + Number(o.total), 0);
    const totalNonCashSales = nonCashOrders.reduce((sum, o) => sum + Number(o.total), 0);

    return {
      ...shift,
      summary: {
        orderCount: shift.orders.length,
        totalCashSales,
        totalNonCashSales,
        totalSales: totalCashSales + totalNonCashSales,
        currentEstimatedCash: Number(shift.startingCash) + totalCashSales,
      },
    };
  }

  /**
   * Buka shift kasir baru dengan modal uang kas awal (cash float)
   */
  static async openShift(businessId: number, userId: number, startingCash: number, notes?: string) {
    // Cek apakah ada shift yang masih menggantung/belum ditutup
    const existing = await prisma.posShift.findFirst({
      where: {
        businessId,
        userId,
        status: 'open',
      },
    });

    if (existing) {
      throw new Error('Anda masih memiliki shift aktif yang belum ditutup.');
    }

    return await prisma.posShift.create({
      data: {
        businessId,
        userId,
        startingCash,
        notes: notes || null,
        status: 'open',
        startTime: new Date(),
      },
    });
  }

  /**
   * Tutup shift kasir dan hitung rekonsiliasi kas (selisih uang fisik vs sistem)
   */
  static async closeShift(businessId: number, userId: number, shiftId: number, actualCash: number, notes?: string) {
    const shift = await prisma.posShift.findFirst({
      where: {
        id: shiftId,
        businessId,
        status: 'open',
      },
      include: {
        orders: {
          where: {
            paymentStatus: 'paid',
          },
        },
      },
    });

    if (!shift) {
      throw new Error('Shift aktif tidak ditemukan.');
    }

    // Hitung total penerimaan kas selama shift ini
    const cashSales = shift.orders
      .filter((o) => o.paymentMethod === 'cash')
      .reduce((sum, o) => sum + Number(o.total), 0);

    const expectedCash = Number(shift.startingCash) + cashSales;
    const difference = actualCash - expectedCash;

    return await prisma.posShift.update({
      where: { id: shiftId },
      data: {
        status: 'closed',
        endTime: new Date(),
        expectedCash,
        actualCash,
        difference,
        notes: notes ? (shift.notes ? `${shift.notes}\n${notes}` : notes) : shift.notes,
      },
    });
  }

  /**
   * Mengambil riwayat seluruh shift kasir
   */
  static async getShiftHistory(businessId: number, limit: number = 30) {
    const shifts = await prisma.posShift.findMany({
      where: { businessId },
      orderBy: { id: 'desc' },
      take: limit,
      include: {
        user: { select: { id: true, name: true, username: true } },
        orders: {
          select: {
            id: true,
            total: true,
            paymentMethod: true,
          },
        },
      },
    });

    return shifts.map((s) => {
      const cashSales = s.orders
        .filter((o) => o.paymentMethod === 'cash')
        .reduce((sum, o) => sum + Number(o.total), 0);
      const totalSales = s.orders.reduce((sum, o) => sum + Number(o.total), 0);

      return {
        id: s.id,
        user: { name: s.user?.name || 'Kasir' },
        cashier_name: s.user?.name || 'Kasir',
        start_time: s.startTime ? s.startTime.toISOString() : null,
        opened_at: s.startTime ? s.startTime.toISOString() : null,
        end_time: s.endTime ? s.endTime.toISOString() : null,
        closed_at: s.endTime ? s.endTime.toISOString() : null,
        status: s.status,
        starting_cash: Number(s.startingCash),
        opening_cash: Number(s.startingCash),
        expected_cash: s.expectedCash ? Number(s.expectedCash) : null,
        actual_cash: s.actualCash ? Number(s.actualCash) : null,
        difference: s.difference ? Number(s.difference) : 0,
        cash_sales: cashSales,
        total_sales: totalSales,
        transaction_count: s.orders.length,
        notes: s.notes,
      };
    });
  }
}
