import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { getSession } from '@/core/auth/session';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { prisma } from '@/core/db/prisma';

export async function GET(
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
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { id: rawId } = await params;
    const cafeId = parseInt(rawId, 10);
    if (isNaN(cafeId)) {
      return NextResponse.json({ message: 'ID kafe tidak valid' }, { status: 400 });
    }

    const users = await prisma.user.findMany({
      where: { businessId: cafeId },
      orderBy: { id: 'asc' },
      select: {
        id: true,
        name: true,
        username: true,
        email: true,
        role: true,
        pin: true,
        phone: true,
        position: true,
        createdAt: true,
      },
    });

    return NextResponse.json({
      success: true,
      users,
    }, { status: 200 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Gagal memuat akun staf tenant';
    return NextResponse.json({ message }, { status: 500 });
  }
}

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
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { id: rawId } = await params;
    const cafeId = parseInt(rawId, 10);
    const body = await request.json();
    const { userId, pin, name, role, position, password, phone } = body;

    const uId = Number(userId);
    if (!uId || isNaN(uId)) {
      return NextResponse.json({ message: 'userId wajib dikirim' }, { status: 400 });
    }

    const targetUser = await prisma.user.findFirst({
      where: { id: uId, businessId: cafeId },
    });

    if (!targetUser) {
      return NextResponse.json({ message: 'User tidak ditemukan di tenant ini' }, { status: 404 });
    }

    const updateData: any = {};
    if (pin !== undefined) updateData.pin = String(pin).trim() || null;
    if (name) updateData.name = String(name).trim();
    if (role) updateData.role = String(role).trim().toLowerCase();
    if (position !== undefined) updateData.position = position ? String(position).trim() : null;
    if (phone !== undefined) updateData.phone = phone ? String(phone).trim() : null;
    if (password && String(password).trim().length >= 6) {
      updateData.password = await bcrypt.hash(String(password).trim(), 10);
    }

    const updated = await prisma.user.update({
      where: { id: uId },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        pin: true,
        position: true,
      },
    });

    return NextResponse.json({
      success: true,
      message: `Akun ${updated.name} berhasil diperbarui (PIN: ${updated.pin || 'Belum diatur'})`,
      user: updated,
    }, { status: 200 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Gagal memperbarui akun staf tenant';
    return NextResponse.json({ message }, { status: 500 });
  }
}

export async function POST(
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
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { id: rawId } = await params;
    const cafeId = parseInt(rawId, 10);
    const body = await request.json();
    const { name, email, password, role, pin, position, phone } = body;

    const rawName = String(name || '').trim();
    const cleanEmail = String(email || '').trim().toLowerCase();
    const rawPass = String(password || 'password123').trim();
    const targetRole = String(role || 'cashier').trim().toLowerCase();
    const targetPin = String(pin || (targetRole === 'manager' ? '2222' : (targetRole === 'kitchen' ? '5555' : '1234'))).trim();

    if (!rawName || !cleanEmail) {
      return NextResponse.json({ message: 'Nama dan email wajib diisi' }, { status: 400 });
    }

    const existing = await prisma.user.findUnique({
      where: { email: cleanEmail },
    });
    if (existing) {
      return NextResponse.json({ message: 'Email sudah terdaftar di sistem' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(rawPass, 10);
    const username = cleanEmail.split('@')[0].replace(/[^a-z0-9_-]/gi, '') + '_' + Math.floor(Math.random() * 1000);

    const created = await prisma.user.create({
      data: {
        name: rawName,
        email: cleanEmail,
        username,
        password: hashedPassword,
        role: targetRole,
        pin: targetPin,
        position: position || (targetRole === 'manager' ? 'Store Manager' : (targetRole === 'kitchen' ? 'Barista / Kitchen' : 'Kasir POS')),
        phone: phone || null,
        businessId: cafeId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        pin: true,
      },
    });

    return NextResponse.json({
      success: true,
      message: `Akun staf ${created.name} berhasil dibuat dengan PIN: ${created.pin}`,
      user: created,
    }, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Gagal menambahkan akun staf tenant';
    return NextResponse.json({ message }, { status: 500 });
  }
}
