import { NextRequest } from 'next/server';
import { prisma } from '@/core/db/prisma';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    const { id } = await params;
    const body = await request.json();

    const updateData: any = {};
    if (body.name !== undefined) updateData.name = body.name;
    if (body.email !== undefined) updateData.email = body.email;
    if (body.phone !== undefined) updateData.phone = body.phone;
    if (body.position !== undefined) updateData.position = body.position;
    if (body.base_salary !== undefined) updateData.baseSalary = Number(body.base_salary);
    if (body.role !== undefined) updateData.role = String(body.role).toLowerCase();

    if (body.permissions !== undefined) {
      updateData.permissions = Array.isArray(body.permissions)
        ? JSON.stringify(body.permissions)
        : null;
    }

    const updated = await prisma.user.update({
      where: { id: Number(id) },
      data: updateData,
    });

    return apiSuccess(updated, 'Data karyawan berhasil diperbarui');
  } catch (error: any) {
    return apiError(error.message || 'Gagal memperbarui karyawan', 400);
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

    const { id } = await params;

    await prisma.user.delete({
      where: { id: Number(id) },
    });

    return apiSuccess(null, 'Karyawan berhasil dihapus');
  } catch (error: any) {
    return apiError(error.message || 'Gagal menghapus karyawan', 400);
  }
}
