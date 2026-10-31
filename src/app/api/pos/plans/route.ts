import { NextResponse } from 'next/server';
import { prisma } from '@/core/db/prisma';
import { DEFAULT_POS_PLANS } from '@/modules/pos/core/pos-plans';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const config = await prisma.posPlatformConfig.findUnique({
      where: { key: 'default_trial_days' },
    });

    let rawPlans = await prisma.posSubscriptionPlan.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: 'asc' },
    });

    // Otomatisasi inisialisasi paket standar jika tabel paket di database masih kosong
    if (rawPlans.length === 0) {
      for (const p of DEFAULT_POS_PLANS) {
        await prisma.posSubscriptionPlan.upsert({
          where: { code: p.code },
          update: {
            name: p.name,
            price: p.price,
            period: p.period,
            badge: p.badge,
            description: p.description,
            isPopular: p.isPopular,
            isActive: p.isActive,
            sortOrder: p.sortOrder,
            benefits: JSON.stringify(p.benefits),
          },
          create: {
            name: p.name,
            code: p.code,
            price: p.price,
            period: p.period,
            badge: p.badge,
            description: p.description,
            isPopular: p.isPopular,
            isActive: p.isActive,
            sortOrder: p.sortOrder,
            benefits: JSON.stringify(p.benefits),
          },
        });
      }

      rawPlans = await prisma.posSubscriptionPlan.findMany({
        where: { isActive: true },
        orderBy: { sortOrder: 'asc' },
      });
    }

    const defaultTrialDays = config ? Number(config.value) : 14;

    const plans = rawPlans.map((p) => {
      let parsedBenefits: string[] = [];
      try {
        parsedBenefits = JSON.parse(p.benefits);
      } catch {
        parsedBenefits = [p.benefits];
      }
      return {
        id: p.id,
        name: p.name,
        code: p.code,
        price: Number(p.price),
        period: p.period,
        description: p.description,
        badge: p.badge,
        isPopular: p.isPopular,
        benefits: parsedBenefits,
      };
    });

    return NextResponse.json({
      success: true,
      data: {
        defaultTrialDays,
        plans,
      },
    }, { status: 200 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Gagal memuat paket langganan';
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}

