import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  console.log("Memulai seed...");
  try {
    const admin = await prisma.user.upsert({
      where: { username: "admin" },
      update: {},
      create: {
        username: "admin",
        password: "admin123", // Password sederhana untuk demo
        name: "Pandu Admin",
      },
    });
    console.log("Seed berhasil. Admin created:", admin.username);
  } catch (err) {
    console.error("Error saat seeding:", err);
  } finally {
    await prisma.$disconnect();
  }
}

main();
