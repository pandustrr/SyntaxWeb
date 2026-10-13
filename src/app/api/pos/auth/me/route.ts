import { NextRequest } from 'next/server';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { PosAuthService } from '@/modules/pos/auth/auth.service';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

export async function GET(request: NextRequest) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized / Token tidak valid', 401);
    }

    const profile = await PosAuthService.getProfile(session.userId);
    return apiSuccess(profile, 'Profil kasir berhasil diambil');
  } catch (error: any) {
    return apiError(error.message || 'Gagal mengambil profil', 400);
  }
}
