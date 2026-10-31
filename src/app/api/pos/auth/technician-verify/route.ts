import { NextRequest } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/core/db/prisma';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const { emailOrUsername, password, pin } = body;

    // 1. Verifikasi via Kredensial SuperAdmin
    if (emailOrUsername && password) {
      const user = await prisma.user.findFirst({
        where: {
          OR: [
            { email: String(emailOrUsername).trim() },
            { username: String(emailOrUsername).trim() },
          ],
        },
      });

      if (!user || !['admin', 'super_admin'].includes(user.role)) {
        return apiError('Hanya akun SuperAdmin yang berwenang membuka Mode Teknisi POS.', 403);
      }

      let isValid = false;
      try {
        isValid = await bcrypt.compare(password, user.password);
      } catch (_) {
        isValid = false;
      }
      if (!isValid && user.password === password) {
        isValid = true;
      }

      if (!isValid) {
        return apiError('Password SuperAdmin salah.', 401);
      }

      return apiSuccess({
        authorized: true,
        method: 'superadmin_credentials',
        technician: user.name,
      }, 'Otorisasi Teknisi SuperAdmin Berhasil');
    }

    // 2. Verifikasi via PIN Keamanan Dinamis Server (Diaturlan di Website SuperAdmin)
    if (pin) {
      const config = await prisma.posPlatformConfig.findUnique({
        where: { key: 'technician_pin' },
      });
      const validPin = config?.value?.trim() || process.env.TECHNICIAN_PIN?.trim() || '2026';
      if (String(pin).trim() === validPin) {
        return apiSuccess({
          authorized: true,
          method: 'dynamic_server_pin',
          technician: 'Syntax Authorized Technician',
        }, 'Otorisasi PIN Teknisi Berhasil');
      }
      return apiError('PIN Keamanan Teknisi salah. Silakan periksa PIN di website admin Syntax.', 401);
    }

    return apiError('Kredensial SuperAdmin atau PIN Teknisi wajib dikirim.', 400);
  } catch (error: any) {
    return apiError(error.message || 'Gagal memverifikasi teknisi', 500);
  }
}
