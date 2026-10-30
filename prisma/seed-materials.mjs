import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const existingMats = await prisma.posMaterial.count({ where: { businessId: 1 } });
  if (existingMats === 0) {
    const arabika = await prisma.posMaterial.create({
      data: {
        businessId: 1,
        name: 'Biji Kopi Arabika Gayo Blend',
        category: 'Biji Kopi',
        unit: 'kg',
        currentStock: 12.5,
        minimumStock: 5.0,
        costPerUnit: 135000,
      },
    });

    const robusta = await prisma.posMaterial.create({
      data: {
        businessId: 1,
        name: 'Biji Kopi Robusta Dampit',
        category: 'Biji Kopi',
        unit: 'kg',
        currentStock: 8.0,
        minimumStock: 5.0,
        costPerUnit: 85000,
      },
    });

    const susu = await prisma.posMaterial.create({
      data: {
        businessId: 1,
        name: 'Susu Segar (Fresh Milk Greenfields)',
        category: 'Dairy',
        unit: 'liter',
        currentStock: 25.0,
        minimumStock: 12.0,
        costPerUnit: 19500,
      },
    });

    const gulaAren = await prisma.posMaterial.create({
      data: {
        businessId: 1,
        name: 'Gula Aren Cair Organik Nira',
        category: 'Pemanis',
        unit: 'liter',
        currentStock: 15.0,
        minimumStock: 5.0,
        costPerUnit: 28000,
      },
    });

    const caramel = await prisma.posMaterial.create({
      data: {
        businessId: 1,
        name: 'Sirup Karamel Monin Gourmet',
        category: 'Sirup',
        unit: 'botol',
        currentStock: 5.0,
        minimumStock: 2.0,
        costPerUnit: 135000,
      },
    });

    const vanilla = await prisma.posMaterial.create({
      data: {
        businessId: 1,
        name: 'Sirup Vanilla Monin Premium',
        category: 'Sirup',
        unit: 'botol',
        currentStock: 5.0,
        minimumStock: 2.0,
        costPerUnit: 135000,
      },
    });

    const plasticCup = await prisma.posMaterial.create({
      data: {
        businessId: 1,
        name: 'Plastic Cup Cold 16oz + Lid',
        category: 'Packaging',
        unit: 'pcs',
        currentStock: 250.0,
        minimumStock: 50.0,
        costPerUnit: 750,
      },
    });

    // Recipes
    // Product 1: Kopi Susu Gula Aren
    await prisma.posRecipeItem.createMany({
      data: [
        { productId: 1, materialId: arabika.id, amount: 0.018, unit: 'kg' },
        { productId: 1, materialId: susu.id, amount: 0.12, unit: 'liter' },
        { productId: 1, materialId: gulaAren.id, amount: 0.025, unit: 'liter' },
        { productId: 1, materialId: plasticCup.id, amount: 1.0, unit: 'pcs' },
      ],
    });

    // Product 2: Americano Classic
    await prisma.posRecipeItem.createMany({
      data: [
        { productId: 2, materialId: arabika.id, amount: 0.018, unit: 'kg' },
        { productId: 2, materialId: plasticCup.id, amount: 1.0, unit: 'pcs' },
      ],
    });

    // Product 3: Caffe Latte Creamy
    await prisma.posRecipeItem.createMany({
      data: [
        { productId: 3, materialId: arabika.id, amount: 0.018, unit: 'kg' },
        { productId: 3, materialId: susu.id, amount: 0.15, unit: 'liter' },
        { productId: 3, materialId: plasticCup.id, amount: 1.0, unit: 'pcs' },
      ],
    });

    // Product 4: Caramel Macchiato
    await prisma.posRecipeItem.createMany({
      data: [
        { productId: 4, materialId: arabika.id, amount: 0.018, unit: 'kg' },
        { productId: 4, materialId: susu.id, amount: 0.12, unit: 'liter' },
        { productId: 4, materialId: caramel.id, amount: 0.02, unit: 'botol' },
        { productId: 4, materialId: plasticCup.id, amount: 1.0, unit: 'pcs' },
      ],
    });

    console.log('Seeded materials and recipes for Business 1 successfully!');
  } else {
    console.log('Business 1 already has materials.');
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
    process.exit(0);
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
