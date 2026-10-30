import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/core/auth/session';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { prisma } from '@/core/db/prisma';

export async function PATCH(
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
      return NextResponse.json({ message: 'Unauthorized. Akses khusus SuperAdmin.' }, { status: 401 });
    }

    const { id: rawId } = await params;
    const cafeId = parseInt(rawId, 10);
    if (isNaN(cafeId)) {
      return NextResponse.json({ message: 'ID kafe tidak valid' }, { status: 400 });
    }

    const body = await request.json();
    const updateData: any = {};

    if (body.enableDashboard !== undefined) updateData.enableDashboard = Boolean(body.enableDashboard);
    if (body.enablePos !== undefined) updateData.enablePos = Boolean(body.enablePos);
    if (body.enableTables !== undefined) updateData.enableTables = Boolean(body.enableTables);
    if (body.enableKds !== undefined) updateData.enableKds = Boolean(body.enableKds);
    if (body.enableProducts !== undefined) updateData.enableProducts = Boolean(body.enableProducts);
    if (body.enableInventory !== undefined) updateData.enableInventory = Boolean(body.enableInventory);
    if (body.enableCustomers !== undefined) updateData.enableCustomers = Boolean(body.enableCustomers);
    if (body.enablePromotions !== undefined) updateData.enablePromotions = Boolean(body.enablePromotions);
    if (body.enableEmployees !== undefined) updateData.enableEmployees = Boolean(body.enableEmployees);
    if (body.enableReports !== undefined) updateData.enableReports = Boolean(body.enableReports);
    if (body.enableSettings !== undefined) updateData.enableSettings = Boolean(body.enableSettings);

    if (body.attendanceMode !== undefined) {
      const mode = String(body.attendanceMode).toLowerCase();
      if (['disabled', 'internal', 'slovv'].includes(mode)) {
        updateData.attendanceMode = mode;
        updateData.slovvSyncEnabled = mode === 'slovv';
      }
    }

    if (body.slovvBaseUrl !== undefined) updateData.slovvBaseUrl = String(body.slovvBaseUrl).trim();
    if (body.slovvUsername !== undefined) updateData.slovvUsername = String(body.slovvUsername).trim();
    if (body.slovvPassword !== undefined) updateData.slovvPassword = String(body.slovvPassword).trim();

    if (body.rolePermissions !== undefined) {
      updateData.rolePermissions = typeof body.rolePermissions === 'string'
        ? body.rolePermissions
        : JSON.stringify(body.rolePermissions);
    }

    const updated = await prisma.posBusiness.update({
      where: { id: cafeId },
      data: updateData,
    });

    return NextResponse.json({
      success: true,
      message: `Izin 12 fitur outlet ${updated.name} berhasil diperbarui.`,
      features: {
        enableDashboard: updated.enableDashboard,
        enablePos: updated.enablePos,
        enableTables: updated.enableTables,
        enableKds: updated.enableKds,
        enableProducts: updated.enableProducts,
        enableInventory: updated.enableInventory,
        enableCustomers: updated.enableCustomers,
        enablePromotions: updated.enablePromotions,
        enableEmployees: updated.enableEmployees,
        attendanceMode: updated.attendanceMode,
        enableReports: updated.enableReports,
        enableSettings: updated.enableSettings,
        rolePermissions: updated.rolePermissions,
        slovvSyncEnabled: updated.slovvSyncEnabled,
      },
    }, { status: 200 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Gagal memperbarui izin fitur';
    return NextResponse.json({ message }, { status: 500 });
  }
}
