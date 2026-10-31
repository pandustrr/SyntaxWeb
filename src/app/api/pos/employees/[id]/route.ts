import { NextRequest } from 'next/server';
import { prisma } from '@/core/db/prisma';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

const ALLOWED_MANAGEMENT_ROLES = ['owner', 'manager', 'admin', 'super_admin'];

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    if (!ALLOWED_MANAGEMENT_ROLES.includes(session.role)) {
      return apiError('Akses ditolak. Hanya Owner atau Store Manager yang dapat mengedit karyawan.', 403);
    }

    const { id } = await params;
    const employeeId = Number(id);
    if (isNaN(employeeId)) {
      return apiError('ID karyawan tidak valid', 400);
    }

    // Pastikan karyawan milik tenant yang sama (Cross-tenant IDOR protection)
    const targetUser = await prisma.user.findFirst({
      where: {
        id: employeeId,
        businessId: session.businessId,
      },
    });

    if (!targetUser) {
      return apiError('Karyawan tidak ditemukan di toko Anda', 404);
    }

    // Manager tidak boleh mengubah data Owner
    if (session.role === 'manager' && targetUser.role === 'owner') {
      return apiError('Manager tidak memiliki izin untuk mengedit akun Owner.', 403);
    }

    const body = await request.json();
    const updateData: {
      name?: string;
      email?: string;
      role?: string;
      phone?: string | null;
      position?: string | null;
      baseSalary?: number | null;
      pin?: string | null;
      permissions?: string | null;
    } = {};

    if (body.name) updateData.name = String(body.name).trim();
    if (body.pin !== undefined) updateData.pin = body.pin ? String(body.pin).trim() : null;

    if (body.email) {
      const cleanEmail = String(body.email).trim().toLowerCase();
      if (cleanEmail !== targetUser.email) {
        const existing = await prisma.user.findUnique({
          where: { email: cleanEmail },
        });
        if (existing) {
          return apiError('Email sudah digunakan oleh akun lain.', 400);
        }
        updateData.email = cleanEmail;
      }
    }

    if (body.role && ALLOWED_MANAGEMENT_ROLES.includes(session.role)) {
      const cleanTargetRole = String(body.role).toLowerCase();
      if (['owner', 'manager'].includes(cleanTargetRole) && session.role !== 'owner' && session.role !== 'admin' && session.role !== 'super_admin') {
        return apiError('Hanya Owner yang dapat mengangkat role Manager.', 403);
      }
      if (cleanTargetRole === 'owner') {
        return apiError('Role Owner tidak dapat dialihkan sembarangan.', 400);
      }
      if (['cashier', 'kitchen', 'manager'].includes(cleanTargetRole)) {
        if (cleanTargetRole !== targetUser.role) {
          const existingRoleUser = await prisma.user.findFirst({
            where: {
              businessId: session.businessId,
              role: cleanTargetRole,
              id: { not: employeeId },
            },
            select: { id: true, name: true },
          });
          if (existingRoleUser) {
            const roleLabel = cleanTargetRole === 'manager'
              ? 'Store Manager'
              : (cleanTargetRole === 'kitchen' ? 'Kitchen / Barista' : 'Kasir POS');
            return apiError(`Outlet Anda sudah memiliki akun ${roleLabel} (${existingRoleUser.name}). Ganti atau edit role karyawan tersebut terlebih dahulu.`, 400);
          }
        }
        updateData.role = cleanTargetRole;
      }
    }

    if (body.phone !== undefined) updateData.phone = body.phone ? String(body.phone).trim() : null;
    if (body.position !== undefined) updateData.position = body.position ? String(body.position).trim() : null;
    if (body.base_salary !== undefined) updateData.baseSalary = Number(body.base_salary);

    if (body.permissions !== undefined) {
      updateData.permissions = Array.isArray(body.permissions)
        ? JSON.stringify(body.permissions)
        : null;
    }

    const updated = await prisma.user.update({
      where: { id: employeeId },
      data: updateData,
    });

    return apiSuccess(updated, 'Data karyawan berhasil diperbarui');
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Gagal memperbarui karyawan';
    return apiError(message, 400);
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    if (!ALLOWED_MANAGEMENT_ROLES.includes(session.role)) {
      return apiError('Akses ditolak. Hanya Owner atau Store Manager yang dapat menghapus karyawan.', 403);
    }

    const { id } = await params;
    const employeeId = Number(id);
    if (isNaN(employeeId)) {
      return apiError('ID karyawan tidak valid', 400);
    }

    // Cegah menghapus akun sendiri
    if (employeeId === session.userId) {
      return apiError('Anda tidak dapat menghapus akun Anda sendiri.', 400);
    }

    // Pastikan karyawan ada dan milik tenant yang sama (Cross-tenant IDOR protection)
    const targetUser = await prisma.user.findFirst({
      where: {
        id: employeeId,
        businessId: session.businessId,
      },
    });

    if (!targetUser) {
      return apiError('Karyawan tidak ditemukan di toko Anda', 404);
    }

    // Akun Owner toko tidak boleh dihapus melalui endpoint karyawan
    if (targetUser.role === 'owner') {
      return apiError('Akun Owner toko tidak dapat dihapus.', 403);
    }

    // Manager tidak boleh menghapus sesama Manager
    if (session.role === 'manager' && targetUser.role === 'manager') {
      return apiError('Store Manager tidak diizinkan menghapus sesama Manager.', 403);
    }

    await prisma.user.delete({
      where: { id: employeeId },
    });

    return apiSuccess(null, 'Karyawan berhasil dihapus');
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Gagal menghapus karyawan';
    return apiError(message, 400);
  }
}

