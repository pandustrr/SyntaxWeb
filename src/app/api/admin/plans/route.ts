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
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const plans = await prisma.posSubscriptionPlan.findMany({
      orderBy: { sortOrder: 'asc' },
    });

    return NextResponse.json({
      success: true,
      data: plans.map((p) => {
        let benefits: string[] = [];
        try {
          benefits = JSON.parse(p.benefits);
        } catch {
          benefits = [p.benefits];
        }
        return {
          ...p,
          price: Number(p.price),
          benefits,
        };
      }),
    }, { status: 200 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Gagal memuat paket langganan';
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
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { name, code, price, period, description, benefits, badge, isPopular, sortOrder } = body;

    if (!name || !code || price === undefined) {
      return NextResponse.json({ message: 'Nama paket, kode, dan harga wajib diisi' }, { status: 400 });
    }

    const benefitsStr = Array.isArray(benefits) ? JSON.stringify(benefits) : String(benefits || '[]');

    const created = await prisma.posSubscriptionPlan.create({
      data: {
        name: String(name),
        code: String(code).toLowerCase(),
        price: Number(price),
        period: period || 'bulan',
        description: description || null,
        benefits: benefitsStr,
        badge: badge || null,
        isPopular: Boolean(isPopular),
        sortOrder: sortOrder ? Number(sortOrder) : 0,
        isActive: true,
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Paket langganan berhasil dibuat',
      data: created,
    }, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Gagal membuat paket langganan';
    return NextResponse.json({ message }, { status: 400 });
  }
}
