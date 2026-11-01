import { prisma } from '@/core/db/prisma';

export interface CreateOrderItemInput {
  productId: number;
  variantId?: number | null;
  quantity: number;
  notes?: string;
  modifiers?: any[];
}

export interface CreateOrderInput {
  orderType?: 'dine_in' | 'take_away' | string;
  tableId?: number | null;
  customerId?: number | null;
  shiftId?: number | null;
  promoCode?: string | null;
  discount?: number;
  tax?: number;
  paymentMethod: 'cash' | 'qris' | 'transfer' | string;
  paidAmount: number;
  status?: string;
  notes?: string;
  createdAt?: Date | string | null;
  items: CreateOrderItemInput[];
}

export class PosOrderService {
  /**
   * Transaksi checkout kasir (DB Transaction aman: buat order & kurangi stok)
   */
  static async createOrder(businessId: number, userId: number, input: CreateOrderInput) {
    if (!businessId || businessId <= 0) {
      throw new Error('Akun Anda belum ditautkan ke toko/bisnis POS manapun.');
    }

    if (!input.items || input.items.length === 0) {
      throw new Error('Keranjang belanja tidak boleh kosong.');
    }

    return await prisma.$transaction(async (tx) => {
      // 1. Ambil data produk yang dibeli + varian + resep bahan baku
      const productIds = input.items.map((i) => i.productId);
      const products = await tx.posProduct.findMany({
        where: {
          id: { in: productIds },
          businessId,
        },
        include: {
          variants: true,
          recipes: {
            include: { material: true },
          },
        },
      });

      const productMap = new Map(products.map((p) => [p.id, p]));

      // 2. Kalkulasi subtotal dari server (tidak percaya angka mentah dari client)
      let subtotal = 0;
      const preparedItems = [];

      for (const item of input.items) {
        const product = productMap.get(item.productId);
        if (!product) {
          throw new Error(`Produk dengan ID #${item.productId} tidak ditemukan.`);
        }

        let unitPrice = Number(product.price);
        let variantName = '';

        if (item.variantId) {
          const variant = product.variants.find((v) => v.id === item.variantId);
          if (!variant) {
            throw new Error(`Varian tidak valid untuk produk ${product.name}.`);
          }
          unitPrice += Number(variant.priceAdjustment);
          variantName = ` (${variant.name})`;
        }

        let modifierPrice = 0;
        let modifierSummary = '';
        if (Array.isArray(item.modifiers) && item.modifiers.length > 0) {
          for (const m of item.modifiers) {
            const mPrice = Number(m.price || 0) * Number(m.quantity || 1);
            modifierPrice += mPrice;
          }
          const modNames = item.modifiers.map((m: any) => m.name).join(', ');
          modifierSummary = ` + [${modNames}]`;
        }

        unitPrice += modifierPrice;
        const lineSubtotal = unitPrice * item.quantity;
        subtotal += lineSubtotal;

        // Kurangi stok jika produk memantau stok (trackStock)
        if (product.trackStock) {
          if (product.stock < item.quantity) {
            throw new Error(`Stok ${product.name} tidak mencukupi (sisa ${product.stock}).`);
          }

          await tx.posProduct.update({
            where: { id: product.id },
            data: { stock: { decrement: item.quantity } },
          });

          // Kurangi stok varian jika varian mencatat stok
          if (item.variantId) {
            const variant = product.variants.find((v) => v.id === item.variantId);
            if (variant && variant.stock !== null) {
              await tx.posProductVariant.update({
                where: { id: item.variantId },
                data: { stock: { decrement: item.quantity } },
              });
            }
          }
        }

        // Otomatisasi pemotongan bahan baku resep (BOM)
        if (product.recipes && product.recipes.length > 0) {
          for (const recipe of product.recipes) {
            const recipeAmount = Number(recipe.amount);
            if (recipeAmount > 0) {
              const neededAmount = recipeAmount * item.quantity;
              await tx.posMaterial.update({
                where: { id: recipe.materialId },
                data: { currentStock: { decrement: neededAmount } },
              });
            }
          }
        }

        const fullNotes = [
          item.notes,
          modifierSummary ? `Add-on: ${item.modifiers.map((m: any) => `${m.name}${Number(m.price) > 0 ? ` (+Rp ${m.price})` : ''}`).join(', ')}` : null,
        ].filter(Boolean).join(' | ');

        preparedItems.push({
          productId: product.id,
          variantId: item.variantId || null,
          productName: `${product.name}${variantName}${modifierSummary}`,
          price: unitPrice,
          quantity: item.quantity,
          subtotal: lineSubtotal,
          station: (item as any).station || (product as any).station || 'kitchen',
          notes: fullNotes || item.notes || null,
        });
      }

      // 3. Validasi & Kalkulasi Voucher Promo
      let discount = Number(input.discount || 0);
      let appliedPromoCode: string | null = null;

      if (input.promoCode) {
        const cleanCode = input.promoCode.trim().toUpperCase();
        const promo = await tx.posPromotion.findFirst({
          where: {
            businessId,
            code: cleanCode,
            isActive: true,
          },
        });

        if (promo) {
          const now = new Date();
          const isNotExpired = !promo.endDate || new Date(promo.endDate) >= now;
          const hasQuota = promo.usageLimit === null || promo.usageCount < promo.usageLimit;
          const meetsMinPurchase = subtotal >= Number(promo.minPurchase);

          if (isNotExpired && hasQuota && meetsMinPurchase) {
            appliedPromoCode = promo.code;
            let promoDiscount = 0;
            if (promo.type === 'percentage') {
              promoDiscount = Math.round((subtotal * Number(promo.discountValue)) / 100);
            } else {
              promoDiscount = Number(promo.discountValue);
            }
            discount = Math.max(discount, promoDiscount);

            await tx.posPromotion.update({
              where: { id: promo.id },
              data: { usageCount: { increment: 1 } },
            });
          }
        }
      }

      // 4. Kalkulasi total
      const tax = Number(input.tax || 0);
      const total = Math.max(0, subtotal - discount + tax);
      const paidAmount = Number(input.paidAmount || 0);

      if (input.paymentMethod === 'cash' && paidAmount < total) {
        throw new Error(`Jumlah bayar tunai (Rp ${paidAmount}) kurang dari total tagihan (Rp ${total}).`);
      }

      const changeAmount = input.paymentMethod === 'cash' ? Math.max(0, paidAmount - total) : 0;

      // 5. Auto-link ke Shift kasir aktif bila tidak dikirim & validasi tenant shift
      let resolvedShiftId: number | null = null;
      if (input.shiftId) {
        const targetShift = await tx.posShift.findFirst({
          where: { id: input.shiftId, businessId, status: 'open' },
          select: { id: true },
        });
        if (targetShift) {
          resolvedShiftId = targetShift.id;
        }
      }

      if (!resolvedShiftId) {
        const openShift = await tx.posShift.findFirst({
          where: { businessId, userId, status: 'open' },
          orderBy: { id: 'desc' },
          select: { id: true },
        });
        if (openShift) {
          resolvedShiftId = openShift.id;
        }
      }

      // 6. Integrasi CRM Member Loyalitas
      let resolvedCustomerId: number | null = null;
      if (input.customerId) {
        const customer = await tx.posCustomer.findFirst({
          where: { id: input.customerId, businessId },
        });
        if (customer) {
          resolvedCustomerId = customer.id;
          const pointsEarned = Math.floor(total / 10000); // 1 Poin per kelipatan Rp 10.000
          const newTotalSpend = Number(customer.totalSpend) + total;

          // Auto-upgrade tier membership
          let newLevel = customer.membershipLevel;
          if (newTotalSpend >= 5000000) newLevel = 'Platinum';
          else if (newTotalSpend >= 2000000) newLevel = 'Gold';
          else if (newTotalSpend >= 500000) newLevel = 'Silver';

          await tx.posCustomer.update({
            where: { id: customer.id },
            data: {
              totalSpend: { increment: total },
              totalVisit: { increment: 1 },
              totalPoints: { increment: pointsEarned },
              membershipLevel: newLevel,
            },
          });
        }
      }

      // 7. Otomatisasi Status Meja Dine-in -> Occupied & Validasi Tenant Meja
      const orderType = input.orderType || 'dine_in';
      let resolvedTableId: number | null = null;
      if (input.tableId) {
        const table = await tx.posCafeTable.findFirst({
          where: { id: input.tableId, businessId },
        });
        if (table) {
          resolvedTableId = table.id;
          if (orderType === 'dine_in') {
            await tx.posCafeTable.update({
              where: { id: table.id },
              data: { status: 'occupied' },
            });
          }
        }
      }

      // 8. Generate Order Number unik anti-bentrok: TRX-[BIZ]-[YYYYMMDD]-[SEQ]-[RANDOM]
      const today = new Date();
      const dateStr = today.toISOString().slice(0, 10).replace(/-/g, '');
      const bizPrefix = String(businessId).padStart(2, '0');

      const countToday = await tx.posOrder.count({
        where: {
          businessId,
          createdAt: {
            gte: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
          },
        },
      });

      // Loop pencegahan benturan milidetik saat multi-device checkout serentak
      let orderNumber = '';
      let isUnique = false;
      let attempt = 0;

      while (!isUnique && attempt < 5) {
        attempt++;
        const randomSuffix = Math.floor(1000 + Math.random() * 9000);
        const sequence = String(countToday + attempt).padStart(4, '0');
        orderNumber = `TRX-${bizPrefix}-${dateStr}-${sequence}-${randomSuffix}`;

        const existing = await tx.posOrder.findFirst({
          where: { orderNumber },
          select: { id: true },
        });
        if (!existing) {
          isUnique = true;
        }
      }

      // 9. Simpan Order & Items
      const order = await tx.posOrder.create({
        data: {
          businessId,
          userId,
          customerId: resolvedCustomerId,
          shiftId: resolvedShiftId,
          tableId: resolvedTableId,
          promoCode: appliedPromoCode,
          orderNumber,
          orderType,
          subtotal,
          discount,
          tax,
          total,
          paymentMethod: input.paymentMethod,
          paymentStatus: 'paid',
          paidAmount: input.paymentMethod === 'cash' ? paidAmount : total,
          changeAmount,
          status: input.status || (orderType === 'dine_in' ? 'pending' : 'completed'),
          notes: input.notes || null,
          createdAt: input.createdAt ? new Date(input.createdAt) : undefined,
          items: {
            create: preparedItems,
          },
        },
        include: {
          items: true,
          table: true,
          customer: {
            select: { id: true, name: true, phone: true, membershipLevel: true, totalPoints: true },
          },
          user: {
            select: { id: true, name: true },
          },
          business: {
            select: {
              name: true,
              address: true,
              phone: true,
              receiptNotes: true,
              receiptHeader: true,
              receiptFooter: true,
              receiptPaperSize: true,
              showLogoOnReceipt: true,
              showWifiOnReceipt: true,
              wifiPassword: true,
            },
          },
        },
      });

      return order;
    });
  }

  /**
   * Mengambil riwayat transaksi terkini untuk kasir & KDS
   */
  static async getOrderHistory(
    businessId: number,
    options?: {
      limit?: number;
      status?: string;
      dateFrom?: string;
      dateTo?: string;
      tableId?: number;
    }
  ) {
    const where: any = { businessId };

    if (options?.status && options.status !== 'all') {
      if (options.status === 'active' || options.status === 'kds') {
        where.status = { in: ['pending', 'preparing', 'ready'] };
      } else {
        where.status = options.status;
      }
    }

    if (options?.tableId) {
      where.tableId = options.tableId;
    }

    if (options?.dateFrom || options?.dateTo) {
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
      take: options?.limit || 50,
      orderBy: { createdAt: 'desc' },
      include: {
        items: {
          include: {
            product: {
              select: { id: true, name: true, station: true },
            },
          },
        },
        table: { select: { id: true, name: true } },
        customer: { select: { id: true, name: true, phone: true, membershipLevel: true, totalPoints: true } },
        user: { select: { id: true, name: true } },
      },
    });

    return orders.map((o) => ({
      ...o,
      order_number: o.orderNumber,
      payment_method: o.paymentMethod,
      channel: o.orderType,
      created_at: o.createdAt.toISOString(),
      updated_at: o.updatedAt.toISOString(),
      completed_at: o.status === 'completed' ? o.updatedAt.toISOString() : null,
      cafe_table: o.table ? { id: o.table.id, code: o.table.name, name: o.table.name } : null,
      customer: o.customer ? { id: o.customer.id, name: o.customer.name, phone: o.customer.phone, membershipLevel: o.customer.membershipLevel } : { name: 'Pelanggan Umum' },
      items: o.items.map((it) => ({
        ...it,
        name_snapshot: it.productName,
        station: (it as any).station || (it as any).product?.station || 'kitchen',
        unit_price: Number(it.price),
      })),
    }));
  }

  /**
   * Mengambil detail transaksi tunggal lengkap (untuk cetak ulang struk / popup detail)
   */
  static async getOrderById(businessId: number, orderId: number) {
    const order = await prisma.posOrder.findFirst({
      where: { id: orderId, businessId },
      include: {
        items: {
          include: {
            variant: { select: { id: true, name: true } },
          },
        },
        table: { select: { id: true, name: true, capacity: true } },
        user: { select: { id: true, name: true, email: true } },
        customer: {
          select: {
            id: true,
            name: true,
            phone: true,
            email: true,
            membershipLevel: true,
            totalPoints: true,
          },
        },
        business: {
          select: {
            id: true,
            name: true,
            address: true,
            phone: true,
            logoUrl: true,
            receiptHeader: true,
            receiptFooter: true,
            receiptNotes: true,
            receiptPaperSize: true,
            showLogoOnReceipt: true,
            showWifiOnReceipt: true,
            wifiPassword: true,
            taxPercent: true,
            isTaxInclusive: true,
            servicePercent: true,
          },
        },
      },
    });

    if (!order) {
      throw new Error('Pesanan tidak ditemukan atau Anda tidak memiliki akses.');
    }

    return {
      ...order,
      order_number: order.orderNumber,
      payment_method: order.paymentMethod,
      channel: order.orderType,
      created_at: order.createdAt.toISOString(),
      cafe_table: order.table ? { id: order.table.id, code: order.table.name, name: order.table.name } : null,
      customer: order.customer || { name: 'Pelanggan Umum' },
      items: order.items.map((it) => ({
        ...it,
        name_snapshot: it.productName,
        unit_price: Number(it.price),
      })),
    };
  }

  /**
   * Update status pesanan (e.g. pending -> processing -> ready -> completed)
   * Otomatis membebaskan meja saat completed / cancelled jika tidak ada order aktif lain
   */
  static async updateOrderStatus(businessId: number, orderId: number, status: string) {
    const existing = await prisma.posOrder.findFirst({
      where: { id: orderId, businessId },
    });
    if (!existing) {
      throw new Error('Pesanan tidak ditemukan atau Anda tidak memiliki akses.');
    }

    const updated = await prisma.posOrder.update({
      where: { id: orderId },
      data: { status },
    });

    // Lepas status meja jika pesanan selesai atau dibatalkan
    if (['completed', 'cancelled'].includes(status) && existing.tableId) {
      const remainingOrders = await prisma.posOrder.count({
        where: {
          businessId,
          tableId: existing.tableId,
          id: { not: orderId },
          status: { in: ['pending', 'preparing', 'ready'] },
        },
      });

      if (remainingOrders === 0) {
        await prisma.posCafeTable.updateMany({
          where: { id: existing.tableId, businessId },
          data: { status: 'available' },
        });
      }
    }

    return updated;
  }

  /**
   * Batalkan pesanan dan kembalikan stok produk, varian, dan bahan baku resep (BOM)
   */
  static async cancelOrder(businessId: number, orderId: number, reason?: string) {
    const order = await prisma.posOrder.findFirst({
      where: { id: orderId, businessId },
      include: { items: true },
    });
    if (!order) {
      throw new Error('Pesanan tidak ditemukan atau Anda tidak memiliki akses.');
    }
    if (order.status === 'cancelled') {
      return order;
    }

    return await prisma.$transaction(async (tx) => {
      // 1. Kembalikan stok item produk yang sebelumnya telah dipotong
      for (const item of order.items) {
        const product = await tx.posProduct.findUnique({
          where: { id: item.productId },
        });
        if (product && product.trackStock) {
          await tx.posProduct.update({
            where: { id: item.productId },
            data: { stock: { increment: item.quantity } },
          });
          if (item.variantId) {
            await tx.posProductVariant.update({
              where: { id: item.variantId },
              data: { stock: { increment: item.quantity } },
            });
          }
        }
      }

      // 2. Kembalikan stok bahan baku resep (BOM)
      const orderProducts = await tx.posProduct.findMany({
        where: {
          id: { in: order.items.map((it) => it.productId) },
        },
        include: {
          recipes: true,
        },
      });
      const prodMap = new Map(orderProducts.map((p) => [p.id, p]));

      for (const item of order.items) {
        const prod = prodMap.get(item.productId);
        if (prod && prod.recipes && prod.recipes.length > 0) {
          for (const recipe of prod.recipes) {
            const returnAmount = Number(recipe.amount) * item.quantity;
            await tx.posMaterial.update({
              where: { id: recipe.materialId },
              data: { currentStock: { increment: returnAmount } },
            });
          }
        }
      }

      // 3. Rollback loyalitas CRM jika transaksi punya member
      if (order.customerId) {
        const pointsDeducted = Math.floor(Number(order.total) / 10000);
        await tx.posCustomer.update({
          where: { id: order.customerId },
          data: {
            totalSpend: { decrement: Number(order.total) },
            totalVisit: { decrement: 1 },
            totalPoints: { decrement: pointsDeducted },
          },
        });
      }

      // 4. Rollback pemakaian promo
      if (order.promoCode) {
        await tx.posPromotion.updateMany({
          where: { businessId, code: order.promoCode },
          data: { usageCount: { decrement: 1 } },
        });
      }

      // 5. Bebaskan meja jika tidak ada order aktif lain
      if (order.tableId) {
        const remainingOrders = await tx.posOrder.count({
          where: {
            businessId,
            tableId: order.tableId,
            id: { not: order.id },
            status: { in: ['pending', 'preparing', 'ready'] },
          },
        });
        if (remainingOrders === 0) {
          await tx.posCafeTable.updateMany({
            where: { id: order.tableId, businessId },
            data: { status: 'available' },
          });
        }
      }

      return await tx.posOrder.update({
        where: { id: orderId },
        data: {
          status: 'cancelled',
          notes: reason ? `Dibatalkan: ${reason}` : 'Dibatalkan oleh kasir/dapur',
        },
      });
    });
  }
}
