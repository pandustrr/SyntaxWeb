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
    const posLower = (body.position || '').toLowerCase();

    // Tentukan role staf (Manager, Cashier, Kitchen)
    let targetRole = body.role ? String(body.role).toLowerCase() : (posLower.includes('kitchen') || posLower.includes('barista') ? 'kitchen' : (posLower.includes('manager') ? 'manager' : 'cashier'));
    if (!['owner', 'manager', 'cashier', 'kitchen'].includes(targetRole)) {
      targetRole = 'cashier';
    }

    if (targetRole === 'owner') {
      return apiError('Hanya dapat ada 1 akun Owner per outlet kafe.', 400);
    }

    if (targetRole === 'manager' && session.role !== 'owner' && session.role !== 'admin' && session.role !== 'super_admin') {
      return apiError('Hanya Owner yang dapat mengangkat Store Manager baru', 403);
    }

    // Validasi pembatasan role: maksimal 1 akun Manager, 1 akun Kasir, 1 akun Kitchen per outlet
    if (['manager', 'cashier', 'kitchen'].includes(targetRole)) {
      const existingRoleUser = await prisma.user.findFirst({
        where: {
          businessId: session.businessId,
          role: targetRole,
        },
        select: { id: true, name: true },
      });

      if (existingRoleUser) {
        const roleLabel = targetRole === 'manager'
          ? 'Store Manager'
          : (targetRole === 'kitchen' ? 'Kitchen / Barista' : 'Kasir POS');
        return apiError(`Outlet Anda sudah memiliki 1 akun ${roleLabel} (${existingRoleUser.name}). Silakan edit akun karyawan tersebut jika ingin mengalihkan role ini.`, 400);
      }
    }

    const permissionsJson = Array.isArray(body.permissions)
      ? JSON.stringify(body.permissions)
      : null;

    const created = await prisma.user.create({
      data: {
        email: cleanEmail,
        username,
        name: rawName,
        password: defaultPassword,
        role: targetRole,
        phone: body.phone ? String(body.phone) : null,
        position: body.position ? String(body.position) : (targetRole === 'manager' ? 'Store Manager' : (targetRole === 'kitchen' ? 'Barista / Kitchen' : 'Kasir POS')),
        baseSalary: body.base_salary ? Number(body.base_salary) : null,
        permissions: permissionsJson,
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

