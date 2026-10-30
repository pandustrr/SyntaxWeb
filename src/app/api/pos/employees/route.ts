import { NextRequest } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/core/db/prisma';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

export async function GET(request: NextRequest) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    const users = await prisma.user.findMany({
      where: { businessId: session.businessId },
      orderBy: { id: 'asc' },
    });

    const employees = users.map((u) => ({
      id: u.id,
      name: u.name,
      email: u.email,
      phone: '08123456789',
      position:
        u.role === 'cashier'
          ? 'Kasir POS'
          : u.role === 'manager'
          ? 'Store Manager'
          : u.role === 'kitchen'
          ? 'Head Barista / Kitchen'
          : u.role,
      base_salary: u.role === 'manager' ? 5500000 : 3500000,
      status: 'active',
      join_date: u.createdAt.toISOString().slice(0, 10),
    }));

    return apiSuccess(employees, 'Daftar karyawan berhasil dimuat');
  } catch (error: any) {
    return apiError(error.message || 'Gagal memuat karyawan', 400);
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    const ALLOWED_MANAGEMENT_ROLES = ['owner', 'manager', 'admin', 'super_admin'];
    if (!ALLOWED_MANAGEMENT_ROLES.includes(session.role)) {
      return apiError('Hanya Owner atau Store Manager yang dapat mendaftarkan karyawan baru', 403);
    }

    const body = await request.json();
    const rawName = body.name ? String(body.name).trim() : '';
    if (!rawName) {
      return apiError('Nama karyawan wajib diisi', 400);
    }

    const defaultPassword = await bcrypt.hash(body.password ? String(body.password) : 'password123', 10);
    const cleanEmail = (body.email ? String(body.email).trim().toLowerCase() : `staf_${Date.now()}@syntax.id`);

    const existingEmail = await prisma.user.findUnique({
      where: { email: cleanEmail },
    });
    if (existingEmail) {
      return apiError('Email karyawan sudah digunakan', 400);
    }

    const username = rawName.toLowerCase().replace(/[^a-z0-9]/g, '_') + '_' + Math.floor(Math.random() * 1000);

    let assignedRole = 'cashier';
    const posLower = (body.position || body.role || '').toLowerCase();
    if (posLower.includes('kitchen') || posLower.includes('barista')) {
      assignedRole = 'kitchen';
    } else if (posLower.includes('manager')) {
      if (session.role !== 'owner' && session.role !== 'admin' && session.role !== 'super_admin') {
        return apiError('Hanya Owner yang dapat mengangkat Store Manager baru', 403);
      }
      assignedRole = 'manager';
    }

    const created = await prisma.user.create({
      data: {
        email: cleanEmail,
        username,
        name: rawName,
        password: defaultPassword,
        role: assignedRole,
        businessId: session.businessId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    return apiSuccess(created, 'Karyawan berhasil didaftarkan', 201);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Gagal menambahkan karyawan';
    return apiError(message, 400);
  }
}
