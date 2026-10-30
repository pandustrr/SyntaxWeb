import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/core/db/prisma';
import os from 'os';

export async function GET(request: NextRequest) {
  const startTime = Date.now();

  try {
    // 1. Tes konektivitas database
    await prisma.$queryRaw`SELECT 1`;
    const dbLatencyMs = Date.now() - startTime;

    // 2. Info Server
    const memoryUsage = process.memoryUsage();
    const systemMemory = {
      total_mb: Math.round(os.totalmem() / 1024 / 1024),
      free_mb: Math.round(os.freemem() / 1024 / 1024),
      process_rss_mb: Math.round(memoryUsage.rss / 1024 / 1024),
      process_heap_used_mb: Math.round(memoryUsage.heapUsed / 1024 / 1024),
    };

    // 3. Ringkasan database pos
    const [totalCafes, totalOrders, activeCafes] = await Promise.all([
      prisma.posBusiness.count(),
      prisma.posOrder.count(),
      prisma.posBusiness.count({ where: { status: 'ACTIVE' } }),
    ]);

    return NextResponse.json({
      status: 'healthy',
      app: 'SyntaxPOS Backend Cloud',
      version: '1.0.0',
      timestamp: new Date().toISOString(),
      uptime_seconds: Math.floor(process.uptime()),
      database: {
        status: 'connected',
        latency_ms: dbLatencyMs,
        total_cafes: totalCafes,
        active_cafes: activeCafes,
        total_orders: totalOrders,
      },
      system: {
        platform: process.platform,
        node_version: process.version,
        memory: systemMemory,
      },
    }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({
      status: 'unhealthy',
      error: error.message || 'Database connection error',
      timestamp: new Date().toISOString(),
    }, { status: 503 });
  }
}
