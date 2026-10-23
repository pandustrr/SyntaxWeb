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

    const body = await request.json();
    const defaultPassword = await bcrypt.hash('password123', 10);

    const email = body.email || `staf${Date.now()}@syntax.id`;
    const username = body.name ? body.name.toLowerCase().replace(/\s+/g, '_') : `staf_${Date.now()}`;

    const created = await prisma.user.create({
      data: {
        email,
        username,
        name: body.name || 'Staff Baru',
        password: defaultPassword,
        role: body.position?.toLowerCase().includes('manager') ? 'manager' : 'cashier',
        businessId: session.businessId,
      },
    });

    return apiSuccess(created, 'Karyawan berhasil didaftarkan', 201);
  } catch (error: any) {
    return apiError(error.message || 'Gagal menambahkan karyawan', 400);
  }
}
