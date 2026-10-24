import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/core/auth/session';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { prisma } from '@/core/db/prisma';

export async function GET(request: NextRequest) {
  try {
    const webSession = await getSession();
    const posSession = getPosSessionFromRequest(request);

    const isAuthorized =
      (webSession && (webSession.role === 'admin' || webSession.role === 'super_admin')) ||
      (posSession && (posSession.role === 'admin' || posSession.role === 'super_admin'));

    if (!isAuthorized) {
      return NextResponse.json({ message: 'Unauthorized. Akses khusus SuperAdmin.' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const query = searchParams.get('q') || '';

    const whereClause: any = {};
    if (status && status !== 'ALL') {
      whereClause.status = status;
    }
    if (query) {
      whereClause.OR = [
        { name: { contains: query } },
        { slug: { contains: query } },
        { phone: { contains: query } },
      ];
    }

    const cafes = await prisma.posBusiness.findMany({
      where: whereClause,
      include: {
        users: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
          },
        },
        _count: {
          select: {
            orders: true,
            products: true,
            categories: true,
            tables: true,
            users: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    const counts = {
      total: await prisma.posBusiness.count(),
      pending: await prisma.posBusiness.count({ where: { status: 'PENDING_APPROVAL' } }),
      active: await prisma.posBusiness.count({ where: { status: 'ACTIVE' } }),
      suspended: await prisma.posBusiness.count({ where: { status: 'SUSPENDED' } }),
      rejected: await prisma.posBusiness.count({ where: { status: 'REJECTED' } }),
    };

    return NextResponse.json({
      success: true,
      counts,
      cafes: cafes.map((cafe) => ({
        id: cafe.id,
        name: cafe.name,
        slug: cafe.slug,
        address: cafe.address,
        phone: cafe.phone,
        status: cafe.status,
        isActive: cafe.isActive,
        createdAt: cafe.createdAt,
        owner: cafe.users.find((u) => u.role === 'owner') || cafe.users[0] || null,
        userCount: cafe._count.users,
        orderCount: cafe._count.orders,
        productCount: cafe._count.products,
      })),
    }, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching cafes:', error);
    return NextResponse.json({ message: error.message || 'Terjadi kesalahan server' }, { status: 500 });
  }
}
