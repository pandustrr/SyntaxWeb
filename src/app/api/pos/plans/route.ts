import { NextResponse } from 'next/server';
import { prisma } from '@/core/db/prisma';

export async function GET() {
  try {
    const [config, rawPlans] = await Promise.all([
      prisma.posPlatformConfig.findUnique({
        where: { key: 'default_trial_days' },
      }),
      prisma.posSubscriptionPlan.findMany({
        where: { isActive: true },
        orderBy: { sortOrder: 'asc' },
      }),
    ]);

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
