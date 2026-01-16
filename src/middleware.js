import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("admin_session")?.value || "";

  // 1. Definisikan Halaman yang dilindungi
  const isProtected = path.startsWith("/admin/dashboard");

  // 2. Definisikan Halaman Login
  const isLoginPage = path.startsWith("/admin/login");

  // A. Kalau mau masuk Dashboard tapi belum login -> Tendang ke Login
  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/admin/login", request.nextUrl));
  }

  // B. Kalau sudah login tapi buka halaman Login lagi -> Lempar ke Dashboard
  if (isLoginPage && token) {
    return NextResponse.redirect(new URL("/admin/dashboard", request.nextUrl));
  }

  return NextResponse.next();
}

// Config matcher agar middleware memantau URL yang relevan saja
export const config = {
  matcher: ["/admin/dashboard/:path*", "/admin/login"],
};
