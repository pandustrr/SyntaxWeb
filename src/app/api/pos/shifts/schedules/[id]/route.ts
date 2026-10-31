import { NextRequest } from 'next/server';
import { prisma } from '@/core/db/prisma';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

const ALLOWED = ['owner', 'manager', 'admin', 'super_admin'];

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) return apiError('Unauthorized', 401);

    if (!ALLOWED.includes(session.role)) {
      return apiError('Hanya Owner atau Manager yang dapat mengedit jadwal shift', 403);
    }

    const { id } = await params;
    const scheduleId = Number(id);
    if (isNaN(scheduleId)) return apiError('ID jadwal shift tidak valid', 400);

    const target = await prisma.posShiftSchedule.findFirst({
      where: { id: scheduleId, businessId: session.businessId },
    });
    if (!target) return apiError('Jadwal shift tidak ditemukan', 404);

    const body = await request.json();
    const updateData: any = {};

    if (body.name) updateData.name = String(body.name).trim();
    if (body.startTime) updateData.startTime = String(body.startTime).trim();
    if (body.endTime) updateData.endTime = String(body.endTime).trim();
    if (body.cashierNames !== undefined) {
      updateData.cashierNames = Array.isArray(body.cashierNames) ? JSON.stringify(body.cashierNames) : null;
    }
    if (body.baristaNames !== undefined) {
      updateData.baristaNames = Array.isArray(body.baristaNames) ? JSON.stringify(body.baristaNames) : null;
    }
    if (body.kitchenNames !== undefined) {
      updateData.kitchenNames = Array.isArray(body.kitchenNames) ? JSON.stringify(body.kitchenNames) : null;
    }
    if (body.leaderName !== undefined) {
      updateData.leaderName = body.leaderName ? String(body.leaderName).trim() : null;
    }
    if (body.isActive !== undefined) {
      updateData.isActive = Boolean(body.isActive);
    }

    const updated = await prisma.posShiftSchedule.update({
      where: { id: scheduleId },
      data: updateData,
    });

    return apiSuccess(updated, 'Jadwal shift berhasil diperbarui');
  } catch (error: any) {
    return apiError(error.message || 'Gagal memperbarui jadwal shift', 400);
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) return apiError('Unauthorized', 401);

    if (!ALLOWED.includes(session.role)) {
      return apiError('Hanya Owner atau Manager yang dapat menghapus jadwal shift', 403);
    }

    const { id } = await params;
    const scheduleId = Number(id);
    if (isNaN(scheduleId)) return apiError('ID jadwal shift tidak valid', 400);

    const target = await prisma.posShiftSchedule.findFirst({
      where: { id: scheduleId, businessId: session.businessId },
    });
    if (!target) return apiError('Jadwal shift tidak ditemukan', 404);

    await prisma.posShiftSchedule.delete({
      where: { id: scheduleId },
    });

    return apiSuccess(null, 'Jadwal shift berhasil dihapus');
  } catch (error: any) {
    return apiError(error.message || 'Gagal menghapus jadwal shift', 400);
  }
}
