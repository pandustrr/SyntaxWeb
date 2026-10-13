import { prisma } from '@/core/db/prisma';

export interface CreateOrderItemInput {
  productId: number;
  variantId?: number | null;
  quantity: number;
  notes?: string;
}

export interface CreateOrderInput {
  orderType?: 'dine_in' | 'take_away';
  tableId?: number | null;
  shiftId?: number | null;
  discount?: number;
  tax?: number;
  paymentMethod: 'cash' | 'qris' | 'transfer';
  paidAmount: number;
  notes?: string;
  items: CreateOrderItemInput[];
}

export class PosOrderService {
  /**
   * Transaksi checkout kasir (DB Transaction aman: buat order & kurangi stok)
   */
  static async createOrder(businessId: number, userId: number, input: CreateOrderInput) {
    if (!input.items || input.items.length === 0) {
      throw new Error('Keranjang belanja tidak boleh kosong.');
    }

    return await prisma.$transaction(async (tx) => {
      // 1. Ambil data produk yang dibeli untuk validasi harga & stok
      const productIds = input.items.map((i) => i.productId);
      const products = await tx.posProduct.findMany({
        where: {
          id: { in: productIds },
          businessId,
        },
        include: {
          variants: true,
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

        preparedItems.push({
          productId: product.id,
          variantId: item.variantId || null,
          productName: `${product.name}${variantName}`,
          price: unitPrice,
          quantity: item.quantity,
          subtotal: lineSubtotal,
          notes: item.notes || null,
        });
      }

      // 3. Kalkulasi total
      const discount = input.discount || 0;
      const tax = input.tax || 0;
      const total = Math.max(0, subtotal - discount + tax);
      const paidAmount = Number(input.paidAmount || 0);

      if (input.paymentMethod === 'cash' && paidAmount < total) {
        throw new Error(`Jumlah bayar tunai (Rp ${paidAmount}) kurang dari total tagihan (Rp ${total}).`);
      }

      const changeAmount = input.paymentMethod === 'cash' ? Math.max(0, paidAmount - total) : 0;

      // 4. Generate Order Number unik: TRX-YYYYMMDD-XXXX
      const today = new Date();
      const dateStr = today.toISOString().slice(0, 10).replace(/-/g, '');
      const countToday = await tx.posOrder.count({
        where: {
          businessId,
          createdAt: {
            gte: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
          },
        },
      });
      const orderNumber = `TRX-${dateStr}-${String(countToday + 1).padStart(4, '0')}`;

      // 5. Simpan Order & Items
      const order = await tx.posOrder.create({
        data: {
          businessId,
          userId,
          shiftId: input.shiftId || null,
          tableId: input.tableId || null,
          orderNumber,
          orderType: input.orderType || 'dine_in',
          subtotal,
          discount,
          tax,
          total,
          paymentMethod: input.paymentMethod,
          paymentStatus: 'paid',
          paidAmount: input.paymentMethod === 'cash' ? paidAmount : total,
          changeAmount,
          status: 'completed',
          notes: input.notes || null,
          items: {
            create: preparedItems,
          },
        },
        include: {
          items: true,
          table: true,
          user: {
            select: { id: true, name: true },
          },
          business: {
            select: { name: true, address: true, phone: true, receiptNotes: true },
          },
        },
      });

      return order;
    });
  }

  /**
   * Mengambil riwayat transaksi terkini untuk kasir
   */
  static async getOrderHistory(businessId: number, limit: number = 30) {
    return await prisma.posOrder.findMany({
      where: { businessId },
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: {
        items: true,
        table: { select: { id: true, name: true } },
        user: { select: { id: true, name: true } },
      },
    });
  }
}
