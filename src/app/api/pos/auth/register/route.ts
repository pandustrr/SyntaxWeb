import { NextRequest } from 'next/server';
import { PosAuthService } from '@/modules/pos/auth/auth.service';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const businessName = body.businessName || body.business_name;
    const name = body.name;
    const email = body.email;
    const password = body.password;
    const phone = body.phone;
    const address = body.address;

    if (!businessName || !name || !email || !password) {
      return apiError('Nama kafe, nama pemilik, email, dan password wajib diisi.', 400);
    }

    const result = await PosAuthService.registerCafe({
      businessName,
      name,
      email,
      password,
      phone,
      address,
    });

    return apiSuccess(result, 'Pendaftaran kafe berhasil. Menunggu verifikasi SuperAdmin.', 201);
  } catch (error: any) {
    return apiError(error.message || 'Gagal mendaftarkan kafe', 400);
  }
}
