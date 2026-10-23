import { NextRequest } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/core/db/prisma';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

export async function PUT(request: NextRequest) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    const { current_password, password, password_confirmation } = await request.json();

    if (!password || password.length < 6) {
      return apiError('Password baru minimal 6 karakter', 400);
    }

    if (password_confirmation && password !== password_confirmation) {
      return apiError('Konfirmasi password tidak cocok', 400);
    }

    const user = await prisma.user.findUnique({
      where: { id: session.userId },
    });

    if (!user) {
      return apiError('User tidak ditemukan', 404);
    }

    if (current_password) {
      let isMatch = false;
      if (user.password.startsWith('$2')) {
        isMatch = await bcrypt.compare(current_password, user.password);
      } else {
        isMatch = user.password === current_password;
      }

      if (!isMatch) {
        return apiError('Password lama salah', 400);
      }
    }

    const newHashed = await bcrypt.hash(password, 10);
    await prisma.user.update({
      where: { id: session.userId },
      data: { password: newHashed },
    });

    return apiSuccess(null, 'Password berhasil diperbarui');
  } catch (error: any) {
    return apiError(error.message || 'Gagal mengubah password', 400);
  }
}
