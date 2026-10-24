import { NextRequest } from 'next/server';
import { Prisma } from '@prisma/client';
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
      receipt_header: biz.receiptHeader || (biz.address ? `Selamat Datang di ${biz.name}\n${biz.address}` : biz.name),
      receipt_footer: biz.receiptFooter || biz.receiptNotes || 'Terima kasih atas kunjungan Anda!\nFollow IG kami',
      receipt_paper_size: biz.receiptPaperSize || '58mm',
      show_logo_on_receipt: biz.showLogoOnReceipt ?? true,
      show_wifi_on_receipt: biz.showWifiOnReceipt ?? false,
      wifi_password: biz.wifiPassword || '',
      tax_percent: biz.taxPercent ? Number(biz.taxPercent) : 10.0,
      is_tax_inclusive: biz.isTaxInclusive ?? false,
      service_percent: biz.servicePercent ? Number(biz.servicePercent) : 0.0,
      logo_url: biz.logoUrl || null,
      midtrans_server_key: '',
      midtrans_client_key: '',
      midtrans_is_production: false,
    };

    return apiSuccess(settingsData, 'Pengaturan toko berhasil dimuat');
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Gagal memuat pengaturan toko';
    return apiError(message, 400);
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    const body = await request.json();
    const updateData: Prisma.PosBusinessUpdateInput = {};

    if (body.name !== undefined) updateData.name = body.name;
    if (body.phone !== undefined) updateData.phone = body.phone;
    if (body.address !== undefined) updateData.address = body.address;
    if (body.receipt_header !== undefined) updateData.receiptHeader = body.receipt_header;
    if (body.receipt_footer !== undefined) {
      updateData.receiptFooter = body.receipt_footer;
      updateData.receiptNotes = body.receipt_footer;
    }
    if (body.receipt_paper_size !== undefined) updateData.receiptPaperSize = body.receipt_paper_size;
    if (body.show_logo_on_receipt !== undefined) updateData.showLogoOnReceipt = Boolean(body.show_logo_on_receipt);
    if (body.show_wifi_on_receipt !== undefined) updateData.showWifiOnReceipt = Boolean(body.show_wifi_on_receipt);
    if (body.wifi_password !== undefined) updateData.wifiPassword = body.wifi_password;
    if (body.tax_percent !== undefined) updateData.taxPercent = Number(body.tax_percent);
    if (body.is_tax_inclusive !== undefined) updateData.isTaxInclusive = Boolean(body.is_tax_inclusive);
    if (body.service_percent !== undefined) updateData.servicePercent = Number(body.service_percent);
    if (body.logo_url !== undefined) updateData.logoUrl = body.logo_url;

    const updated = await prisma.posBusiness.update({
      where: { id: session.businessId },
      data: updateData,
    });

    return apiSuccess(updated, 'Pengaturan berhasil diperbarui');
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Gagal memperbarui pengaturan';
    return apiError(message, 400);
  }
}
