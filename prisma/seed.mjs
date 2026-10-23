import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { categoryDefs } from "./seed-data/categories.mjs";
import { tablesData } from "./seed-data/tables.mjs";
import { getAllProducts } from "./seed-data/products.mjs";
import { generateSampleOrders } from "./seed-data/orders.mjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🚀 Memulai seeding data komprehensif Syntax POS & Web...");

  // 1. Seed Users (Super Admin, Manager, Kasir 1, Kasir 2, Barista)
  const defaultPasswordHash = await bcrypt.hash("password123", 10);

  const admin = await prisma.user.upsert({
    where: { email: "admin@syntaxweb.com" },
    update: {},
    create: {
      email: "admin@syntaxweb.com",
      username: "admin",
      password: "admin123",
      name: "SyntaxWeb Admin",
      role: "admin",
    },
  });
  console.log("✅ Super Admin ready:", admin.email);

  // 2. Seed Demo POS Business (Tenant)
  const business = await prisma.posBusiness.upsert({
    where: { slug: "syntax-coffee" },
    update: {
      name: "Syntax Coffee & Eatery",
      address: "Jl. Pandu No. 12, Sleman, D.I. Yogyakarta",
      phone: "081234567890",
      receiptNotes: "Terima kasih atas kunjungan Anda!\nFollow IG: @syntaxcoffee\nFree Wi-Fi: SyntaxGuest / pass: ngopidulu",
      isActive: true,
    },
    create: {
      name: "Syntax Coffee & Eatery",
      slug: "syntax-coffee",
      address: "Jl. Pandu No. 12, Sleman, D.I. Yogyakarta",
      phone: "081234567890",
      receiptNotes: "Terima kasih atas kunjungan Anda!\nFollow IG: @syntaxcoffee\nFree Wi-Fi: SyntaxGuest / pass: ngopidulu",
      isActive: true,
    },
  });
  console.log("✅ POS Business ready:", business.name);

  // 3. Seed POS Staff
  const cashier1 = await prisma.user.upsert({
    where: { email: "kasir@syntax.id" },
    update: { businessId: business.id },
    create: {
      email: "kasir@syntax.id",
      username: "kasir",
      password: defaultPasswordHash,
      name: "Budi Santoso (Kasir Pagi)",
      role: "cashier",
      businessId: business.id,
    },
  });

  await prisma.user.upsert({
    where: { email: "kasir2@syntax.id" },
    update: { businessId: business.id },
    create: {
      email: "kasir2@syntax.id",
      username: "kasir2",
      password: defaultPasswordHash,
      name: "Siti Rahma (Kasir Sore)",
      role: "cashier",
      businessId: business.id,
    },
  });

  await prisma.user.upsert({
    where: { email: "manager@syntax.id" },
    update: { businessId: business.id },
    create: {
      email: "manager@syntax.id",
      username: "manager",
      password: defaultPasswordHash,
      name: "Dimas Pratama (Store Manager)",
      role: "manager",
      businessId: business.id,
    },
  });

  await prisma.user.upsert({
    where: { email: "barista@syntax.id" },
    update: { businessId: business.id },
    create: {
      email: "barista@syntax.id",
      username: "barista",
      password: defaultPasswordHash,
      name: "Fajar Wicaksono (Head Barista)",
      role: "kitchen",
      businessId: business.id,
    },
  });
  console.log("✅ Staff POS ready (Admin, Manager, Kasir 1 & 2, Kitchen/Barista)");

  // 4. Seed Categories
  const categoryMap = {};
  for (const cat of categoryDefs) {
    const existing = await prisma.posCategory.findFirst({
      where: { businessId: business.id, name: cat.name },
    });
    if (existing) {
      const updated = await prisma.posCategory.update({
        where: { id: existing.id },
        data: { icon: cat.icon, sortOrder: cat.sortOrder },
      });
      categoryMap[cat.name] = updated.id;
    } else {
      const created = await prisma.posCategory.create({
        data: {
          businessId: business.id,
          name: cat.name,
          icon: cat.icon,
          sortOrder: cat.sortOrder,
        },
      });
      categoryMap[cat.name] = created.id;
    }
  }
  console.log(`✅ Kategori POS siap: ${Object.keys(categoryMap).length} kategori aktif.`);

  // 5. Seed Products & Variants
  const productsList = getAllProducts(categoryMap);
  const productMapBySku = {};

  for (const item of productsList) {
    const { variants, ...prodData } = item;
    const existing = await prisma.posProduct.findFirst({
      where: { businessId: business.id, sku: prodData.sku },
    });

    let product;
    if (existing) {
      product = await prisma.posProduct.update({
        where: { id: existing.id },
        data: {
          categoryId: prodData.categoryId,
          name: prodData.name,
          description: prodData.description,
          price: prodData.price,
          costPrice: prodData.costPrice,
          stock: prodData.stock,
          trackStock: true,
          isActive: true,
        },
      });

      await prisma.posProductVariant.deleteMany({
        where: { productId: product.id },
      });
    } else {
      product = await prisma.posProduct.create({
        data: {
          ...prodData,
          businessId: business.id,
          trackStock: true,
          isActive: true,
        },
      });
    }

    if (variants && variants.length > 0) {
      for (const v of variants) {
        await prisma.posProductVariant.create({
          data: {
            productId: product.id,
            name: v.name,
            priceAdjustment: v.priceAdjustment,
            stock: v.stock ?? null,
          },
        });
      }
    }

    productMapBySku[prodData.sku] = product;
  }
  console.log(`✅ Menu POS siap: ${productsList.length} produk + variasi berhasil dimuat.`);

  // 6. Seed Meja Cafe
  const tableMap = {};
  for (const t of tablesData) {
    const existing = await prisma.posCafeTable.findFirst({
      where: { businessId: business.id, name: t.name },
    });
    if (existing) {
      const updated = await prisma.posCafeTable.update({
        where: { id: existing.id },
        data: { capacity: t.capacity, status: t.status },
      });
      tableMap[t.name] = updated;
    } else {
      const created = await prisma.posCafeTable.create({
        data: {
          businessId: business.id,
          name: t.name,
          capacity: t.capacity,
          status: t.status,
        },
      });
      tableMap[t.name] = created;
    }
  }
  console.log(`✅ Meja Cafe siap: ${tablesData.length} meja dikonfigurasi.`);

  // 7. Seed Shifts (Shift Kemarin & Shift Hari Ini)
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  yesterday.setHours(8, 0, 0, 0);

  const yesterdayEnd = new Date(yesterday);
  yesterdayEnd.setHours(17, 0, 0, 0);

  let closedShift = await prisma.posShift.findFirst({
    where: {
      businessId: business.id,
      userId: cashier1.id,
      status: "closed",
    },
  });

  if (!closedShift) {
    closedShift = await prisma.posShift.create({
      data: {
        businessId: business.id,
        userId: cashier1.id,
        startTime: yesterday,
        endTime: yesterdayEnd,
        startingCash: 200000,
        expectedCash: 318800,
        actualCash: 318800,
        difference: 0,
        status: "closed",
        notes: "Shift kemarin ditutup rapi tanpa selisih.",
      },
    });
  }

  const todayMorning = new Date();
  todayMorning.setHours(8, 30, 0, 0);

  let openShift = await prisma.posShift.findFirst({
    where: {
      businessId: business.id,
      userId: cashier1.id,
      status: "open",
    },
  });

  if (!openShift) {
    openShift = await prisma.posShift.create({
      data: {
        businessId: business.id,
        userId: cashier1.id,
        startTime: todayMorning,
        startingCash: 300000,
        status: "open",
        notes: "Shift aktif hari ini, modal awal kas Rp 300.000.",
      },
    });
  }
  console.log("✅ Shift Kasir siap (1 Shift closed + 1 Shift open aktif).");

  // 8. Seed Sample Orders
  const sampleOrders = generateSampleOrders({
    closedShiftId: closedShift.id,
    openShiftId: openShift.id,
    tables: tableMap,
    products: productMapBySku,
    cashierId: cashier1.id,
  });

  for (const ord of sampleOrders) {
    const existingOrder = await prisma.posOrder.findUnique({
      where: { orderNumber: ord.orderNumber },
    });

    if (!existingOrder) {
      await prisma.posOrder.create({
        data: {
          businessId: business.id,
          userId: cashier1.id,
          shiftId: ord.shiftId,
          tableId: ord.tableId,
          orderNumber: ord.orderNumber,
          orderType: ord.orderType,
          subtotal: ord.subtotal,
          discount: ord.discount || 0,
          tax: ord.tax || 0,
          total: ord.total,
          paymentMethod: ord.paymentMethod,
          paymentStatus: "paid",
          paidAmount: ord.paidAmount,
          changeAmount: ord.changeAmount || 0,
          status: "completed",
          notes: ord.notes || null,
          createdAt: ord.createdAt,
          items: {
            create: ord.items,
          },
        },
      });
    }
  }
  console.log(`✅ Riwayat Order siap: ${sampleOrders.length} transaksi contoh tersimpan.`);

  console.log("\n🎉 SEEDING DATA POS LENGKAP SELESAI DENGAN SUKSES!");
  console.log("------------------------------------------------------------------");
  console.log("Tenant Bisnis    : Syntax Coffee & Eatery (slug: syntax-coffee)");
  console.log("Akun Kasir 1     : kasir@syntax.id / password: password123");
  console.log("Akun Kasir 2     : kasir2@syntax.id / password: password123");
  console.log("Akun Manager     : manager@syntax.id / password: password123");
  console.log("Akun Barista     : barista@syntax.id / password: password123");
  console.log("Akun Admin Web   : admin@syntaxweb.com / password: admin123");
  console.log(`Total Kategori   : ${Object.keys(categoryMap).length} kategori`);
  console.log(`Total Produk     : ${productsList.length} produk komplit dengan varian`);
  console.log(`Total Meja       : ${tablesData.length} meja cafe`);
  console.log("------------------------------------------------------------------");
}

main()
  .catch((e) => {
    console.error("❌ Terjadi kesalahan saat seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

