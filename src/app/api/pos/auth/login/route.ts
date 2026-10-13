import { NextRequest } from 'next/server';
import { PosAuthService } from '@/modules/pos/auth/auth.service';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { emailOrUsername, password } = body;

    const result = await PosAuthService.login({
      emailOrUsername: emailOrUsername || body.email || body.username,
      password,
    });

    return apiSuccess(result, 'Login kasir berhasil');
  } catch (error: any) {
    return apiError(error.message || 'Terjadi kesalahan saat login', 400);
  }
}
