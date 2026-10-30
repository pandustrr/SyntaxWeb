import { NextRequest } from 'next/server';
import { PosAuthService } from '@/modules/pos/auth/auth.service';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

export async function POST(request: NextRequest) {
  try {
    const rawBody = (await request.json().catch(() => ({}))) as Record<string, unknown>;
    const businessName = String(
      rawBody.businessName ||
      rawBody.business_name ||
      rawBody.cafeName ||
      rawBody.cafe_name ||
      rawBody.outletName ||
      ''
    ).trim();
    const name = String(
      rawBody.name ||
      rawBody.ownerName ||
      rawBody.owner_name ||
      rawBody.fullName ||
      rawBody.full_name ||
      ''
    ).trim();
    const email = String(rawBody.email || '').trim().toLowerCase();
    const password = rawBody.password ? String(rawBody.password).trim() : '';
    const phone = rawBody.phone ? String(rawBody.phone).trim() : undefined;
    const address = rawBody.address ? String(rawBody.address).trim() : undefined;
    const isTrial = rawBody.isTrial === true || rawBody.is_trial === true;
    const trialDays = rawBody.trialDays != null
        ? Number(rawBody.trialDays)
        : (rawBody.trial_days != null ? Number(rawBody.trial_days) : 14);
    const planId = rawBody.planId ? Number(rawBody.planId) : (rawBody.plan_id ? Number(rawBody.plan_id) : undefined);
    const planCode = rawBody.planCode ? String(rawBody.planCode) : (rawBody.plan_code ? String(rawBody.plan_code) : undefined);

    if (!businessName) {
      return apiError('Nama kafe/bisnis wajib diisi.', 400);
    }
    if (!name) {
      return apiError('Nama pemilik kafe wajib diisi.', 400);
    }
    if (!email) {
      return apiError('Email wajib diisi.', 400);
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return apiError('Format email tidak valid. Gunakan format contoh@domain.com.', 400);
    }
    if (!password) {
      return apiError('Password wajib diisi.', 400);
    }
    if (password.length < 6) {
      return apiError('Password minimal 6 karakter.', 400);
    }

    const result = await PosAuthService.registerCafe({
      businessName,
      name,
      email,
      password,
      phone,
      address,
      isTrial,
      trialDays,
      planId,
      planCode,
    });

    return apiSuccess(result, 'Pendaftaran kafe berhasil. Menunggu verifikasi SuperAdmin.', 201);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Gagal mendaftarkan kafe';
    return apiError(message, 400);
  }
}
