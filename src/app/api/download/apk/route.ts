import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { Readable } from 'stream';
import { prisma } from '@/core/db/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const apkDir = path.join(process.cwd(), 'public', 'downloads');
    const primaryApkPath = path.join(apkDir, 'syntax-pos.apk');
    const fallbackApkPath = path.join(apkDir, 'app-release.apk');
    const debugApkPath = path.join(apkDir, 'app-debug.apk');

    let targetPath = '';
    if (fs.existsSync(primaryApkPath)) {
      targetPath = primaryApkPath;
    } else if (fs.existsSync(fallbackApkPath)) {
      targetPath = fallbackApkPath;
    } else if (fs.existsSync(debugApkPath)) {
      targetPath = debugApkPath;
    }

    if (!targetPath) {
      return NextResponse.json(
        {
          success: false,
          message: 'File APK sedang dalam proses build atau belum diunggah ke server.',
        },
        { status: 404 }
      );
    }

    let appVersion = '1.0.0';
    try {
      const config = await prisma.posPlatformConfig.findUnique({
        where: { key: 'app_version' },
      });
      if (config?.value) appVersion = config.value.trim();
    } catch (_) {}

    const filename = `syntax-pos-v${appVersion}.apk`;
    const stat = fs.statSync(targetPath);
    const fileStream = fs.createReadStream(targetPath);
    const webStream = Readable.toWeb(fileStream) as ReadableStream;

    return new NextResponse(webStream, {
      headers: {
        'Content-Type': 'application/vnd.android.package-archive',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Content-Length': stat.size.toString(),
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Download APK error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Gagal mengunduh file APK',
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}

