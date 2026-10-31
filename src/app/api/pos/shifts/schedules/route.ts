import { NextRequest } from 'next/server';
import { prisma } from '@/core/db/prisma';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

export async function GET(request: NextRequest) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) return apiError('Unauthorized', 401);

    let schedules = await prisma.posShiftSchedule.findMany({
      where: {
        businessId: session.businessId,
        isActive: true,
      },
      orderBy: { id: 'asc' },
    });

    // Jika belum ada jadwal shift sama sekali, otomatis inisialisasi 2 shift default
    if (schedules.length === 0) {
      await prisma.posShiftSchedule.createMany({
        data: [
          {
            businessId: session.businessId,
            name: 'Shift 1 (Pagi)',
            startTime: '08:00',
            endTime: '16:00',
            cashierNames: JSON.stringify(['Kasir Pagi']),
            baristaNames: JSON.stringify(['Barista Pagi']),
            kitchenNames: JSON.stringify(['Cook Pagi']),
          },
          {
            businessId: session.businessId,
            name: 'Shift 2 (Sore)',
            startTime: '16:00',
            endTime: '23:00',
            cashierNames: JSON.stringify(['Kasir Sore']),
            baristaNames: JSON.stringify(['Barista Sore']),
            kitchenNames: JSON.stringify(['Cook Sore']),
          },
        ],
      });

      schedules = await prisma.posShiftSchedule.findMany({
        where: { businessId: session.businessId, isActive: true },
        orderBy: { id: 'asc' },
      });
    }

    const formatted = schedules.map((s) => ({
      id: s.id,
      name: s.name,
      startTime: s.startTime,
      endTime: s.endTime,
      cashierNames: s.cashierNames ? JSON.parse(s.cashierNames) : [],
      baristaNames: s.baristaNames ? JSON.parse(s.baristaNames) : [],
      kitchenNames: s.kitchenNames ? JSON.parse(s.kitchenNames) : [],
      leaderName: s.leaderName,
      isActive: s.isActive,
    }));

    return apiSuccess(formatted, 'Jadwal shift berhasil dimuat');
  } catch (error: any) {
    return apiError(error.message || 'Gagal memuat jadwal shift', 400);
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) return apiError('Unauthorized', 401);

    const ALLOWED = ['owner', 'manager', 'admin', 'super_admin'];
    if (!ALLOWED.includes(session.role)) {
      return apiError('Hanya Owner atau Manager yang dapat menambahkan jadwal shift baru', 403);
    }

    const body = await request.json();
    const { name, startTime, endTime, cashierNames, baristaNames, kitchenNames, leaderName } = body;

    if (!name || !name.trim()) {
      return apiError('Nama shift wajib diisi', 400);
    }

    const created = await prisma.posShiftSchedule.create({
      data: {
        businessId: session.businessId,
        name: String(name).trim(),
        startTime: startTime ? String(startTime).trim() : '08:00',
        endTime: endTime ? String(endTime).trim() : '16:00',
        cashierNames: Array.isArray(cashierNames) ? JSON.stringify(cashierNames) : null,
        baristaNames: Array.isArray(baristaNames) ? JSON.stringify(baristaNames) : null,
        kitchenNames: Array.isArray(kitchenNames) ? JSON.stringify(kitchenNames) : null,
        leaderName: leaderName ? String(leaderName).trim() : null,
      },
    });

    return apiSuccess(created, 'Jadwal shift berhasil ditambahkan', 201);
  } catch (error: any) {
    return apiError(error.message || 'Gagal menambahkan jadwal shift', 400);
  }
}
