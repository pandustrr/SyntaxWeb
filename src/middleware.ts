import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ADMIN_ROUTES } from '@/config/constants';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect admin routes (except login)
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    const session = request.cookies.get('session');
    if (!session) {
      return NextResponse.redirect(new URL(ADMIN_ROUTES.login, request.url));
    }
  }

  // Redirect to dashboard if already logged in
  if (pathname === '/admin/login') {
    const session = request.cookies.get('session');
    if (session) {
      return NextResponse.redirect(new URL(ADMIN_ROUTES.dashboard, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};

