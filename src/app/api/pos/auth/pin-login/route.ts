import { NextRequest } from 'next/server';
import { prisma } from '@/core/db/prisma';
import { signPosToken } from '@/modules/pos/core/pos-jwt';
import { resolveUserPermissions } from '@/modules/pos/auth/auth.service';
import { PosUserSession } from '@/modules/pos/core/pos-types';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const { businessId, pin } = body;

    const bId = Number(businessId);
    const cleanPin = String(pin || '').trim();

    if (!bId || isNaN(bId)) {
      return apiError('ID Outlet/Bisnis wajib dikirim.', 400);
    }
    if (!cleanPin) {
      return apiError('PIN Kasir wajib diisi.', 400);
    }

    // Cari user di tenant toko ini yang memiliki PIN cocok
    const user = await prisma.user.findFirst({
      where: {
        businessId: bId,
        pin: cleanPin,
      },
      include: {
        business: true,
      },
    });

    if (!user || !user.business) {
      return apiError('PIN Kasir tidak cocok dengan akun staf manapun di outlet ini.', 401);
    }

    if (!user.business.isActive || user.business.status !== 'ACTIVE') {
      return apiError('Toko/bisnis saat ini sedang dinonaktifkan atau belum disetujui.', 403);
    }

    const session: PosUserSession = {
      userId: user.id,
      businessId: user.business.id,
      name: user.name,
      email: user.email,
      role: user.role,
      businessName: user.business.name,
      permissions: resolveUserPermissions(user.role, user.permissions, user.business.rolePermissions),
    };

    const token = signPosToken(session);

    return apiSuccess({
      token,
      user: session,
      business: {
        id: user.business.id,
        name: user.business.name,
        slug: user.business.slug,
        address: user.business.address,
        phone: user.business.phone,
        receiptNotes: user.business.receiptNotes,
        status: user.business.status,
        isTrial: user.business.isTrial,
        trialEndsAt: user.business.trialEndsAt,
        enableDashboard: user.business.enableDashboard,
        enablePos: user.business.enablePos,
        enableTables: user.business.enableTables,
        enableKds: user.business.enableKds,
        enableProducts: user.business.enableProducts,
        enableInventory: user.business.enableInventory,
        enableCustomers: user.business.enableCustomers,
        enablePromotions: user.business.enablePromotions,
        enableEmployees: user.business.enableEmployees,
        attendanceMode: user.business.attendanceMode,
        enableReports: user.business.enableReports,
        enableSettings: user.business.enableSettings,
        taxPercent: Number(user.business.taxPercent ?? 10.0),
        isTaxInclusive: Boolean(user.business.isTaxInclusive ?? false),
        servicePercent: Number(user.business.servicePercent ?? 0.0),
      },
    }, `Masuk berhasil sebagai ${user.name} (${user.role.toUpperCase()})`);
  } catch (error: any) {
    return apiError(error.message || 'Gagal masuk dengan PIN', 500);
  }
}
