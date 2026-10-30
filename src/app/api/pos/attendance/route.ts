import { NextRequest } from 'next/server';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { PosAttendanceService } from '@/modules/pos/attendance/attendance.service';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

export async function GET(request: NextRequest) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) return apiError('Unauthorized', 401);

    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date') || undefined;
    const month = searchParams.get('month') || undefined;
    const status = searchParams.get('status') || undefined;
    const employeeName = searchParams.get('q') || undefined;
    const limit = searchParams.get('limit') ? Number(searchParams.get('limit')) : 100;

    const attendances = await PosAttendanceService.getAttendances(session.businessId, {
      date,
      month,
      status,
      employeeName,
      limit,
    });

    return apiSuccess(attendances, 'Data absensi berhasil dimuat');
  } catch (error: any) {
    return apiError(error.message || 'Gagal memuat absensi', 400);
  }
}


export async function POST(request: NextRequest) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) return apiError('Unauthorized', 401);

    const body = await request.json();
    if (!body.employeeName) {
      return apiError('Nama karyawan wajib diisi', 400);
    }

    const recorded = await PosAttendanceService.recordInternalAttendance(session.businessId, {
      employeeName: body.employeeName,
      employeeId: body.employeeId,
      shift: body.shift,
      status: body.status,
      checkinTime: body.checkinTime,
      checkoutTime: body.checkoutTime,
      lateMinutes: body.lateMinutes ? Number(body.lateMinutes) : undefined,
      photoUrl: body.photoUrl,
    });

    return apiSuccess(recorded, 'Absensi staf berhasil dicatat', 201);
  } catch (error: any) {
    return apiError(error.message || 'Gagal mencatat absensi', 400);
  }
}

