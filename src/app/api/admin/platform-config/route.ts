import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/core/auth/session';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { prisma } from '@/core/db/prisma';

export async function GET(request: NextRequest) {
  try {
    const webSession = await getSession();
    const posSession = getPosSessionFromRequest(request);
    const isAuthorized =
      (webSession && (webSession.role === 'admin' || webSession.role === 'super_admin')) ||
      (posSession && (posSession.role === 'admin' || posSession.role === 'super_admin'));

    if (!isAuthorized) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const configs = await prisma.posPlatformConfig.findMany();
    const configMap: Record<string, string> = {};
    for (const c of configs) {
      configMap[c.key] = c.value;
    }

    return NextResponse.json({
      success: true,
      data: {
        default_trial_days: Number(configMap['default_trial_days'] || 14),
        ...configMap,
      },
    }, { status: 200 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Gagal memuat konfigurasi platform';
    return NextResponse.json({ message }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const webSession = await getSession();
    const posSession = getPosSessionFromRequest(request);
    const isAuthorized =
      (webSession && (webSession.role === 'admin' || webSession.role === 'super_admin')) ||
      (posSession && (posSession.role === 'admin' || posSession.role === 'super_admin'));

    if (!isAuthorized) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { key, value } = body;

    if (!key || value === undefined) {
      return NextResponse.json({ message: 'Key dan value wajib diisi' }, { status: 400 });
    }

    const updated = await prisma.posPlatformConfig.upsert({
      where: { key: String(key) },
      update: { value: String(value) },
      create: { key: String(key), value: String(value) },
    });

    return NextResponse.json({
      success: true,
      message: 'Konfigurasi berhasil diperbarui',
      data: updated,
    }, { status: 200 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Gagal memperbarui konfigurasi';
    return NextResponse.json({ message }, { status: 500 });
  }
}
