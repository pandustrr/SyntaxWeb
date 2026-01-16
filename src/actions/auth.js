"use server";

import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(formData) {
  const username = formData.get("username");
  const password = formData.get("password");

  // 1. BACKEND LOGIC: Cari user di MySQL via Prisma
  const user = await prisma.user.findUnique({
    where: { username: username },
  });

  // 2. BACKEND LOGIC: Cek password (Sangat sederhana, aslinya harus di-hash)
  if (!user || user.password !== password) {
    return { error: "Username atau Password salah!" };
  }

  // 3. BACKEND LOGIC: Simpan session (Contoh pakai Cookie sederhana)
  const cookieStore = await cookies();
  cookieStore.set("admin_session", "true", { httpOnly: true });

  // 4. BACKEND LOGIC: Redirect jika sukses
  redirect("/admin");
}
