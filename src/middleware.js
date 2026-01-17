import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("auth-token")?.value || "";

  // Definisikan status halaman
  const isAdminPath = path.startsWith("/admin");
  const isLoginPage = path === "/admin/login";

  // 1. Jika mencoba akses area admin tapi belum login (dan bukan halaman login)
  if (isAdminPath && !isLoginPage && !token) {
    return NextResponse.redirect(new URL("/admin/login", request.nextUrl));
  }

  // 2. Jika sudah login tapi mencoba akses halaman login lagi
  if (isLoginPage && token) {
    return NextResponse.redirect(new URL("/admin", request.nextUrl));
  }

  return NextResponse.next();
}

// Config matcher agar middleware memantau URL yang relevan saja
export const config = {
  matcher: ["/admin/:path*"],
};
