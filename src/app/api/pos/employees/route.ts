import { NextRequest } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/core/db/prisma';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';
import { resolveUserPermissions } from '@/modules/pos/auth/auth.service';

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

    const employees = users.map((u) => {
      const activePermissions = resolveUserPermissions(u.role, u.permissions);

      return {
        id: u.id,
        name: u.name,
        email: u.email,
        role: u.role,
        phone: u.phone || '08123456789',
        position:
          u.position ||
          (u.role === 'owner'
            ? 'Owner Toko'
            : u.role === 'manager'
            ? 'Store Manager'
            : u.role === 'kitchen'
            ? 'Head Barista / Kitchen'
            : 'Kasir POS'),
        base_salary: u.baseSalary ? Number(u.baseSalary) : (u.role === 'manager' ? 5500000 : 3500000),
        status: 'active',
        permissions: activePermissions,
        join_date: u.createdAt.toISOString().slice(0, 10),
      };
    });

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
    const defaultPassword = await bcrypt.hash(body.password || 'password123', 10);

    const email = body.email || `staf${Date.now()}@syntax.id`;
    const username = body.name ? body.name.toLowerCase().replace(/\s+/g, '_') : `staf_${Date.now()}`;

    // Tentukan role staf
    let targetRole = body.role ? String(body.role).toLowerCase() : 'cashier';
    if (!['owner', 'manager', 'cashier', 'kitchen'].includes(targetRole)) {
      targetRole = body.position?.toLowerCase().includes('manager') ? 'manager' : 'cashier';
    }

    const permissionsJson = Array.isArray(body.permissions)
      ? JSON.stringify(body.permissions)
      : null;

    const created = await prisma.user.create({
      data: {
        email,
        username,
        name: body.name || 'Staff Baru',
        password: defaultPassword,
        role: targetRole,
        phone: body.phone ? String(body.phone) : null,
        position: body.position ? String(body.position) : null,
        baseSalary: body.base_salary ? Number(body.base_salary) : null,
        permissions: permissionsJson,
        businessId: session.businessId,
      },
    });

    return apiSuccess(created, 'Karyawan berhasil didaftarkan', 201);
  } catch (error: any) {
    return apiError(error.message || 'Gagal menambahkan karyawan', 400);
  }
}

