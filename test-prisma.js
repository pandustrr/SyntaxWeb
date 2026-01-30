const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient({
  datasourceUrl: "mysql://root@localhost:3306/syntaxweb_db",
});

async function test() {
  try {
    console.log("Menghubungkan...");
    await prisma.$connect();
    console.log("Terhubung!");
    const count = await prisma.user.count();
    console.log("Jumlah user:", count);
  } catch (err) {
    console.error("Gagal:", err);
  } finally {
    await prisma.$disconnect();
  }
}

test();
