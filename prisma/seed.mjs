import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Memulai seeding data...");

  // 1. Seed Web Admin
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
  console.log("Admin ready:", admin.email);

  // 2. Seed Demo POS Business (Tenant)
  const business = await prisma.posBusiness.upsert({
    where: { slug: "syntax-coffee" },
    update: {},
    create: {
      name: "Syntax Coffee & Eatery",
      slug: "syntax-coffee",
      address: "Jl. Pandu No. 12, Sleman, D.I. Yogyakarta",
      phone: "081234567890",
      receiptNotes: "Terima kasih atas kunjungan Anda!\nFollow IG: @syntaxcoffee",
      isActive: true,
    },
  });
  console.log("POS Business ready:", business.name);

  // 3. Seed Demo Cashier User
  const hashedPassword = await bcrypt.hash("password123", 10);
  const cashier = await prisma.user.upsert({
    where: { email: "kasir@syntax.id" },
    update: {
      businessId: business.id,
    },
    create: {
      email: "kasir@syntax.id",
      username: "kasir",
      password: hashedPassword,
      name: "Budi Santoso (Kasir)",
      role: "cashier",
      businessId: business.id,
    },
  });
  console.log("Cashier user ready:", cashier.email);

  // 4. Seed Categories
  const catCoffee = await prisma.posCategory.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      businessId: business.id,
      name: "Coffee & Tea",
      icon: "coffee",
      sortOrder: 1,
    },
  });

  const catNonCoffee = await prisma.posCategory.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      businessId: business.id,
      name: "Non-Coffee",
      icon: "cup-soda",
      sortOrder: 2,
    },
  });

  const catFood = await prisma.posCategory.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      businessId: business.id,
      name: "Makanan",
      icon: "utensils",
      sortOrder: 3,
    },
  });

  const catSnack = await prisma.posCategory.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      businessId: business.id,
      name: "Snack & Bakery",
      icon: "cookie",
      sortOrder: 4,
    },
  });

  // 5. Seed Products & Variants
  const p1 = await prisma.posProduct.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      businessId: business.id,
      categoryId: catCoffee.id,
      name: "Kopi Susu Gula Aren",
      sku: "CF-001",
      description: "Espresso robusta & arabica blend dengan susu fresh milk dan gula aren asli",
      price: 18000,
      costPrice: 8500,
      stock: 50,
      trackStock: true,
      variants: {
        create: [
          { name: "Ice", priceAdjustment: 0, stock: 30 },
          { name: "Hot", priceAdjustment: 0, stock: 20 },
          { name: "Large Ice", priceAdjustment: 4000, stock: 15 },
        ],
      },
    },
  });

  const p2 = await prisma.posProduct.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      businessId: business.id,
      categoryId: catCoffee.id,
      name: "Americano",
      sku: "CF-002",
      description: "Double shot espresso dengan air mineral hangat atau es batu",
      price: 15000,
      costPrice: 5000,
      stock: 60,
      trackStock: true,
      variants: {
        create: [
          { name: "Ice", priceAdjustment: 0, stock: 35 },
          { name: "Hot", priceAdjustment: 0, stock: 25 },
        ],
      },
    },
  });

  const p3 = await prisma.posProduct.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      businessId: business.id,
      categoryId: catNonCoffee.id,
      name: "Matcha Latte",
      sku: "NC-001",
      description: "Pure Japanese Uji matcha dengan susu creamy",
      price: 22000,
      costPrice: 11000,
      stock: 40,
      trackStock: true,
      variants: {
        create: [
          { name: "Ice", priceAdjustment: 0, stock: 25 },
          { name: "Hot", priceAdjustment: 0, stock: 15 },
        ],
      },
    },
  });

  const p4 = await prisma.posProduct.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      businessId: business.id,
      categoryId: catSnack.id,
      name: "Croissant Butter",
      sku: "BK-001",
      description: "French butter croissant renyah dan lembut di dalam",
      price: 16000,
      costPrice: 9000,
      stock: 25,
      trackStock: true,
    },
  });

  const p5 = await prisma.posProduct.upsert({
    where: { id: 5 },
    update: {},
    create: {
      id: 5,
      businessId: business.id,
      categoryId: catFood.id,
      name: "Nasi Goreng Spesial",
      sku: "FD-001",
      description: "Nasi goreng bumbu rempah spesial dengan telur ceplok dan ayam suwir",
      price: 25000,
      costPrice: 13000,
      stock: 30,
      trackStock: true,
    },
  });

  // 6. Seed Cafe Tables
  const tables = [
    { name: "Meja 01", capacity: 2 },
    { name: "Meja 02", capacity: 4 },
    { name: "Meja 03", capacity: 4 },
    { name: "Meja 04", capacity: 6 },
    { name: "Meja Bar 01", capacity: 1 },
  ];

  for (const t of tables) {
    const existing = await prisma.posCafeTable.findFirst({
      where: { businessId: business.id, name: t.name },
    });
    if (!existing) {
      await prisma.posCafeTable.create({
        data: {
          businessId: business.id,
          name: t.name,
          capacity: t.capacity,
        },
      });
    }
  }

  console.log("Seeding POS selesai dengan sukses!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

