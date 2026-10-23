import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ADMIN_ROUTES } from '@/config/constants';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Handle CORS for all API routes (especially POS API used by Flutter web)
  if (pathname.startsWith('/api/')) {
    if (request.method === 'OPTIONS') {
      return new NextResponse(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    const response = NextResponse.next();
    Object.entries(corsHeaders).forEach(([key, value]) => {
      response.headers.set(key, value);
    });
    return response;
  }

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
  matcher: ['/admin/:path*', '/api/:path*'],
};


