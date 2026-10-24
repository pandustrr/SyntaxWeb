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
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { id: rawId } = await params;
    const cafeId = parseInt(rawId, 10);
    if (isNaN(cafeId)) {
      return NextResponse.json({ message: 'ID kafe tidak valid' }, { status: 400 });
    }

    const body = await request.json();
    const { status } = body;

    const validStatuses = ['PENDING_APPROVAL', 'ACTIVE', 'SUSPENDED', 'REJECTED'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json({ message: 'Status tidak valid' }, { status: 400 });
    }

    const updated = await prisma.posBusiness.update({
      where: { id: cafeId },
      data: {
        status,
        isActive: status === 'ACTIVE',
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: `Status kafe ${updated.name} berhasil diubah menjadi ${status}`,
        cafe: updated,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Gagal mengubah status kafe';
    return NextResponse.json({ message }, { status: 500 });
  }
}
