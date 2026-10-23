import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

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

    const stat = fs.statSync(targetPath);
    const fileStream = fs.createReadStream(targetPath);

    return new NextResponse(fileStream as any, {
      headers: {
        'Content-Type': 'application/vnd.android.package-archive',
        'Content-Disposition': 'attachment; filename="syntax-pos-v1.0.0.apk"',
        'Content-Length': stat.size.toString(),
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error: any) {
    console.error('Download APK error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Gagal mengunduh file APK',
        error: error.message,
      },
      { status: 500 }
    );
  }
}
