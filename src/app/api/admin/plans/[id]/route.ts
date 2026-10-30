import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/core/auth/session';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { prisma } from '@/core/db/prisma';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const webSession = await getSession();
    const posSession = getPosSessionFromRequest(request);
    const isAuthorized =
      (webSession && (webSession.role === 'admin' || webSession.role === 'super_admin')) ||
      (posSession && (posSession.role === 'admin' || posSession.role === 'super_admin'));

    if (!isAuthorized) {
      return NextResponse.json({ message: 'Unauthorized. Akses khusus SuperAdmin.' }, { status: 401 });
    }

    const { id: rawId } = await params;
    const planId = parseInt(rawId, 10);
    if (isNaN(planId)) {
      return NextResponse.json({ message: 'ID paket tidak valid' }, { status: 400 });
    }

    const body = await request.json();
    const { name, price, period, description, benefits, badge, isPopular, isActive, sortOrder } = body;

    const updateData: any = {};
    if (name !== undefined) updateData.name = String(name);
    if (price !== undefined) updateData.price = Number(price);
    if (period !== undefined) updateData.period = String(period);
    if (description !== undefined) updateData.description = description ? String(description) : null;
    if (badge !== undefined) updateData.badge = badge ? String(badge) : null;
    if (isPopular !== undefined) updateData.isPopular = Boolean(isPopular);
    if (isActive !== undefined) updateData.isActive = Boolean(isActive);
    if (sortOrder !== undefined) updateData.sortOrder = Number(sortOrder);
    if (benefits !== undefined) {
      updateData.benefits = Array.isArray(benefits) ? JSON.stringify(benefits) : String(benefits);
    }

    const updated = await prisma.posSubscriptionPlan.update({
      where: { id: planId },
      data: updateData,
    });

    return NextResponse.json({
      success: true,
      message: `Paket "${updated.name}" berhasil diperbarui`,
      data: updated,
    }, { status: 200 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Gagal memperbarui paket langganan';
    return NextResponse.json({ message }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const webSession = await getSession();
    const posSession = getPosSessionFromRequest(request);
    const isAuthorized =
      (webSession && (webSession.role === 'admin' || webSession.role === 'super_admin')) ||
      (posSession && (posSession.role === 'admin' || posSession.role === 'super_admin'));

    if (!isAuthorized) {
      return NextResponse.json({ message: 'Unauthorized. Akses khusus SuperAdmin.' }, { status: 401 });
    }

    const { id: rawId } = await params;
    const planId = parseInt(rawId, 10);
    if (isNaN(planId)) {
      return NextResponse.json({ message: 'ID paket tidak valid' }, { status: 400 });
    }

    await prisma.posSubscriptionPlan.delete({
      where: { id: planId },
    });

    return NextResponse.json({
      success: true,
      message: 'Paket langganan berhasil dihapus',
    }, { status: 200 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Gagal menghapus paket langganan';
    return NextResponse.json({ message }, { status: 500 });
  }
}
