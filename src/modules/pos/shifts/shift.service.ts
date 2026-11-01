import { prisma } from '@/core/db/prisma';

export interface OpenShiftInput {
  startingCash: number;
  shiftName?: string;
  cashierNames?: string[] | string;
  baristaNames?: string[] | string;
  kitchenNames?: string[] | string;
  leaderName?: string;
  openedByName?: string;
  notes?: string;
}

export class PosShiftService {
  /**
   * Mengambil shift yang sedang aktif (status: open) untuk toko/outlet ini
   */
  static async getCurrentShift(businessId: number, _userId?: number) {
    // Cari shift toko yang berstatus 'open'
    const shift = await prisma.posShift.findFirst({
      where: {
        businessId,
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
   * Buka shift kasir baru dengan modal uang kas awal (cash float) & tim roster bertugas
   */
  static async openShift(
    businessId: number,
    userId: number,
    startingCashOrInput: number | OpenShiftInput,
    legacyNotes?: string
  ) {
    if (!businessId || businessId <= 0) {
      throw new Error('Akun Anda belum ditautkan ke toko/bisnis POS manapun.');
    }

    const input: OpenShiftInput = typeof startingCashOrInput === 'number'
      ? { startingCash: startingCashOrInput, notes: legacyNotes }
      : startingCashOrInput;

    const startingCash = Number(input.startingCash || 0);

    // Cek apakah ada shift yang masih aktif di toko ini
    const existing = await prisma.posShift.findFirst({
      where: {
        businessId,
        status: 'open',
      },
    });

    if (existing) {
      throw new Error(`Outlet ini masih memiliki shift aktif (${existing.shiftName || 'Shift'}) yang belum ditutup.`);
    }

    const formatArray = (val?: string[] | string) => {
      if (!val) return null;
      if (Array.isArray(val)) return JSON.stringify(val);
      return String(val);
    };

    return await prisma.posShift.create({
      data: {
        businessId,
        userId,
        shiftName: input.shiftName || 'Shift 1 (Pagi)',
        cashierNames: formatArray(input.cashierNames),
        baristaNames: formatArray(input.baristaNames),
        kitchenNames: formatArray(input.kitchenNames),
        leaderName: input.leaderName || null,
        openedByName: input.openedByName || null,
        startingCash,
        notes: input.notes || null,
        status: 'open',
        startTime: new Date(),
      },
    });
  }

  /**
   * Tutup shift kasir dan hitung rekonsiliasi kas (selisih uang fisik vs sistem)
   */
  static async closeShift(
    businessId: number,
    userId: number,
    shiftId: number,
    actualCash: number,
    notes?: string,
    closedByName?: string
  ) {
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
        closedByName: closedByName || null,
        notes: notes ? (shift.notes ? `${shift.notes}\n${notes}` : notes) : shift.notes,
      },
    });
  }

  /**
   * Mengambil riwayat shift kasir dengan filter tanggal (Hari ini, Kemarin, rentang tanggal)
   * dan rincian breakdown metode pembayaran serta tim operasional
   */
  static async getShiftHistory(
    businessId: number,
    options?: {
      limit?: number;
      date?: string; // 'today' | 'yesterday' | 'YYYY-MM-DD'
      dateFrom?: string;
      dateTo?: string;
    }
  ) {
    const limit = options?.limit ?? 30;
    const where: any = { businessId };

    if (options?.date) {
      const now = new Date();
      let targetStart: Date;
      let targetEnd: Date;

      if (options.date === 'today') {
        targetStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        targetEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
      } else if (options.date === 'yesterday') {
        const y = new Date(now);
        y.setDate(now.getDate() - 1);
        targetStart = new Date(y.getFullYear(), y.getMonth(), y.getDate());
        targetEnd = new Date(y.getFullYear(), y.getMonth(), y.getDate(), 23, 59, 59, 999);
      } else {
        const parsed = new Date(options.date);
        targetStart = new Date(parsed.getFullYear(), parsed.getMonth(), parsed.getDate());
        targetEnd = new Date(parsed.getFullYear(), parsed.getMonth(), parsed.getDate(), 23, 59, 59, 999);
      }

      where.startTime = {
        gte: targetStart,
        lte: targetEnd,
      };
    } else if (options?.dateFrom || options?.dateTo) {
      where.startTime = {};
      if (options.dateFrom) {
        where.startTime.gte = new Date(`${options.dateFrom}T00:00:00.000Z`);
      }
      if (options.dateTo) {
        where.startTime.lte = new Date(`${options.dateTo}T23:59:59.999Z`);
      }
    }

    const shifts = await prisma.posShift.findMany({
      where,
      orderBy: { id: 'desc' },
      take: limit,
      include: {
        user: { select: { id: true, name: true, username: true } },
        orders: {
          select: {
            id: true,
            total: true,
            subtotal: true,
            discount: true,
            tax: true,
            paymentMethod: true,
            status: true,
            createdAt: true,
          },
        },
      },
    });

    const parseList = (val: any) => {
      if (!val) return [];
      if (Array.isArray(val)) return val;
      try {
        const parsed = JSON.parse(val);
        if (Array.isArray(parsed)) return parsed;
      } catch (_) {
        if (typeof val === 'string' && val.trim()) return [val.trim()];
      }
      return [];
    };

    return shifts.map((s) => {
      const validOrders = s.orders.filter((o) => o.status !== 'cancelled');

      let cashSales = 0;
      let qrisSales = 0;
      let transferSales = 0;
      let debitSales = 0;
      let otherSales = 0;
      let totalDiscount = 0;
      let totalTax = 0;

      for (const o of validOrders) {
        const tot = Number(o.total || 0);
        totalDiscount += Number(o.discount || 0);
        totalTax += Number(o.tax || 0);
        const pm = (o.paymentMethod || 'cash').toLowerCase();

        if (pm === 'cash') cashSales += tot;
        else if (pm === 'qris') qrisSales += tot;
        else if (pm === 'transfer' || pm === 'bank_transfer') transferSales += tot;
        else if (pm === 'debit' || pm === 'edc' || pm === 'card') debitSales += tot;
        else otherSales += tot;
      }

      const nonCashSales = qrisSales + transferSales + debitSales + otherSales;
      const totalSales = cashSales + nonCashSales;
      const startCash = Number(s.startingCash || 0);
      const expectedCash = s.expectedCash !== null && s.expectedCash !== undefined
        ? Number(s.expectedCash)
        : startCash + cashSales;
      const actualCash = s.actualCash !== null && s.actualCash !== undefined
        ? Number(s.actualCash)
        : null;
      const difference = actualCash !== null ? actualCash - expectedCash : Number(s.difference || 0);

      const cashierList = parseList(s.cashierNames);
      const baristaList = parseList(s.baristaNames);
      const kitchenList = parseList(s.kitchenNames);

      return {
        id: s.id,
        shift_name: s.shiftName || 'Shift 1 (Pagi)',
        shiftName: s.shiftName || 'Shift 1 (Pagi)',
        user: { name: s.user?.name || s.openedByName || 'Kasir' },
        cashier_name: cashierList.length > 0 ? cashierList.join(', ') : (s.openedByName || s.user?.name || 'Kasir'),
        leader_name: s.leaderName || null,
        opened_by: s.openedByName || s.user?.name || 'Kasir',
        closed_by: s.closedByName || null,
        cashier_names: cashierList,
        barista_names: baristaList,
        kitchen_names: kitchenList,
        start_time: s.startTime ? s.startTime.toISOString() : null,
        opened_at: s.startTime ? s.startTime.toISOString() : null,
        end_time: s.endTime ? s.endTime.toISOString() : null,
        closed_at: s.endTime ? s.endTime.toISOString() : null,
        status: s.status,
        starting_cash: startCash,
        opening_cash: startCash,
        expected_cash: expectedCash,
        actual_cash: actualCash,
        difference: difference,
        cash_sales: cashSales,
        non_cash_sales: nonCashSales,
        qris_sales: qrisSales,
        transfer_sales: transferSales,
        debit_sales: debitSales,
        total_sales: totalSales,
        total_discount: totalDiscount,
        total_tax: totalTax,
        transaction_count: validOrders.length,
        notes: s.notes,
      };
    });
  }
}
