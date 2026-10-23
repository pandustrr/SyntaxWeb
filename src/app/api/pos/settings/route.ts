import { NextRequest } from 'next/server';
import { prisma } from '@/core/db/prisma';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

export async function GET(request: NextRequest) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    const biz = await prisma.posBusiness.findUnique({
      where: { id: session.businessId },
    });

    if (!biz) {
      return apiError('Bisnis tidak ditemukan', 404);
    }

    const settingsData = {
      name: biz.name,
      category: 'Cafe & Resto',
      phone: biz.phone || '',
      address: biz.address || '',
      qris_label: `${biz.name} QRIS`,
      receipt_header: biz.address ? `Selamat Datang di ${biz.name}\n${biz.address}` : biz.name,
      receipt_footer: biz.receiptNotes || 'Terima kasih atas kunjungan Anda!\nFollow IG kami',
      midtrans_server_key: '',
      midtrans_client_key: '',
      midtrans_is_production: false,
    };

    return apiSuccess(settingsData, 'Pengaturan toko berhasil dimuat');
  } catch (error: any) {
    return apiError(error.message || 'Gagal memuat pengaturan toko', 400);
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    const body = await request.json();
    const updateData: any = {};

    if (body.name) updateData.name = body.name;
    if (body.receipt_footer !== undefined) updateData.receiptNotes = body.receipt_footer;

    const updated = await prisma.posBusiness.update({
      where: { id: session.businessId },
      data: updateData,
    });

    return apiSuccess(updated, 'Pengaturan berhasil diperbarui');
  } catch (error: any) {
    return apiError(error.message || 'Gagal memperbarui pengaturan', 400);
  }
}
