import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Memulai seeding data admin...");

  const admin = await prisma.user.upsert({
    where: { email: "admin@syntaxweb.com" },
    update: {},
    create: {
      email: "admin@syntaxweb.com",
      username: "admin",
      password: "admin123", // Gantilah dengan password yang lebih kuat nanti
      name: "SyntaxWeb Admin",
      role: "admin",
    },
  });

  console.log({ admin });
  console.log("Seeding selesai!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
