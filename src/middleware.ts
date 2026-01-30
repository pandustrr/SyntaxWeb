import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect admin routes (except login)
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    const session = request.cookies.get('session');

    if (!session) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // Redirect to dashboard if already logged in and trying to access login
  if (pathname === '/admin/login') {
    const session = request.cookies.get('session');

    if (session) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
