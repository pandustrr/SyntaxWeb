import { NextRequest, NextResponse } from 'next/server';
import { Prisma } from '@prisma/client';
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

    const whereClause: Prisma.PosBusinessWhereInput = {};
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
        isTrial: cafe.isTrial,
        trialEndsAt: cafe.trialEndsAt,
        isActive: cafe.isActive,
        createdAt: cafe.createdAt,
        owner: cafe.users.find((u) => u.role === 'owner') || cafe.users[0] || null,
        userCount: cafe._count.users,
        orderCount: cafe._count.orders,
        productCount: cafe._count.products,
        enableDashboard: cafe.enableDashboard,
        enablePos: cafe.enablePos,
        enableTables: cafe.enableTables,
        enableKds: cafe.enableKds,
        enableProducts: cafe.enableProducts,
        enableInventory: cafe.enableInventory,
        enableCustomers: cafe.enableCustomers,
        enablePromotions: cafe.enablePromotions,
        enableEmployees: cafe.enableEmployees,
        attendanceMode: cafe.attendanceMode,
        enableReports: cafe.enableReports,
        enableSettings: cafe.enableSettings,
        rolePermissions: cafe.rolePermissions,
        slovvBaseUrl: cafe.slovvBaseUrl,
        slovvUsername: cafe.slovvUsername,
        slovvSyncEnabled: cafe.slovvSyncEnabled,
      })),
    }, { status: 200 });
  } catch (error: unknown) {
    console.error('Error fetching cafes:', error);
    const message = error instanceof Error ? error.message : 'Terjadi kesalahan server';
    return NextResponse.json({ message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const webSession = await getSession();
    const posSession = getPosSessionFromRequest(request);

    const isAuthorized =
      (webSession && (webSession.role === 'admin' || webSession.role === 'super_admin')) ||
      (posSession && (posSession.role === 'admin' || posSession.role === 'super_admin'));

    if (!isAuthorized) {
      return NextResponse.json({ message: 'Unauthorized. Akses khusus SuperAdmin.' }, { status: 401 });
    }

    const body = await request.json();
    const { businessName, name, email, password, phone, address, isTrial, trialDays, status } = body;

    if (!businessName || !name || !email || !password) {
      return NextResponse.json({ message: 'Nama bisnis, nama PIC/owner, email, dan password wajib diisi.' }, { status: 400 });
    }

    const { PosAuthService } = await import('@/modules/pos/auth/auth.service');
    const result = await PosAuthService.registerCafe({
      businessName,
      name,
      email,
      password,
      phone,
      address,
      isTrial: isTrial !== undefined ? Boolean(isTrial) : true,
      trialDays: trialDays ? Number(trialDays) : 14,
    });

    if (status && ['ACTIVE', 'PENDING_APPROVAL', 'SUSPENDED'].includes(status)) {
      await prisma.posBusiness.update({
        where: { id: result.business.id },
        data: {
          status,
          isActive: status === 'ACTIVE',
        },
      });
      result.business.status = status;
    }

    return NextResponse.json({
      success: true,
      message: result.message,
      data: result,
    }, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Gagal membuat akun kafe';
    return NextResponse.json({ message }, { status: 400 });
  }
}
