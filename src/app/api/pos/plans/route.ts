import { NextResponse } from 'next/server';
import { prisma } from '@/core/db/prisma';

export const DEFAULT_POS_PLANS = [
  {
    id: 1,
    name: 'Paket Starter POS',
    code: 'starter',
    price: 79000,
    period: 'bulan',
    badge: 'Booth / Kedai',
    description: 'Cocok untuk kedai kopi booth, take-away, angkringan modern, dan gerai boba.',
    isPopular: false,
    isActive: true,
    sortOrder: 1,
    benefits: [
      'Kasir POS & Mode Offline (Database SQLite)',
      'Katalog Produk Menu & Cache Foto Disk',
      'Manajemen Shift Kasir & Rekonsiliasi Kas Laci',
      'Cetak Struk Thermal (Bluetooth & LAN Wi-Fi)',
      'Perhitungan Pajak Toko Dinamis (PB1 Resto)',
      'Laporan Omzet Penjualan Harian',
      'Slot Akun: 1 Kasir (+ 1 Owner Toko)',
    ],
  },
  {
    id: 2,
    name: 'Paket Pro Kafe',
    code: 'pro',
    price: 149000,
    period: 'bulan',
    badge: 'Paling Populer',
    description: 'Paling diminati coffee shop dine-in, kafe tongkrongan, bistro, dan resto makan.',
    isPopular: true,
    isActive: true,
    sortOrder: 2,
    benefits: [
      'Semua Fitur Paket Starter Lengkap',
      'Manajemen Meja Dine-in (Denah & Status Meja)',
      'Kitchen Display System (Layar Dapur / Barista)',
      'Inventori Bahan Baku & Resep BOM Otomatis',
      'CRM Member & Program Poin Loyalitas',
      'Voucher & Kupon Promo Kasir',
      'Laporan Laba Kotor & Menu Terlaris',
      'Slot Akun: 1 Manager, 1 Kasir, 1 Kitchen (+ Owner)',
    ],
  },
  {
    id: 3,
    name: 'Paket Enterprise',
    code: 'enterprise',
    price: 299000,
    period: 'bulan',
    badge: 'Multi-Cabang',
    description: 'Solusi lengkap resto keluarga besar, kafe 2-3 lantai, dan bisnis kuliner multi-cabang.',
    isPopular: false,
    isActive: true,
    sortOrder: 3,
    benefits: [
      'Semua Fitur Paket Pro Kafe Lengkap',
      'Mendukung hingga 3 Cabang / Outlet Sekaligus',
      'Absensi Karyawan & Penggajian (Termasuk Slovv Sync)',
      'Akun Staf Bebas Tanpa Batas Kuota',
      'Ekspor Rekap Finansial & Pajak Lengkap (CSV / Excel)',
      'Prioritas Layanan Dukungan Teknis Langsung',
    ],
  },
  {
    id: 4,
    name: 'Paket Beli Putus (Lifetime)',
    code: 'lifetime',
    price: 3900000,
    period: 'lifetime',
    badge: 'Sekali Bayar',
    description: 'Beli lisensi sekali seumur hidup tanpa beban biaya langganan bulanan selamanya.',
    isPopular: false,
    isActive: true,
    sortOrder: 4,
    benefits: [
      '11 Modul Sidebar Aktif Penuh Selamanya',
      'Bebas Biaya Langganan Bulanan Seumur Hidup',
      'Aplikasi Android APK & Windows Desktop Siap Pakai',
      'Meja Dine-in, Dapur KDS, Resep Bahan BOM & CRM Aktif',
      'Slot Akun: 1 Manager, 1 Kasir, 1 Kitchen (+ Owner)',
      'Gratis Cloud Backup Database SyntaxWeb 1 Tahun',
    ],
  },
];

export async function GET() {
  try {
    const config = await prisma.posPlatformConfig.findUnique({
      where: { key: 'default_trial_days' },
    });

    let rawPlans = await prisma.posSubscriptionPlan.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: 'asc' },
    });

    // Otomatisasi inisialisasi paket standar jika tabel paket di database masih kosong
    if (rawPlans.length === 0) {
      for (const p of DEFAULT_POS_PLANS) {
        await prisma.posSubscriptionPlan.upsert({
          where: { code: p.code },
          update: {
            name: p.name,
            price: p.price,
            period: p.period,
            badge: p.badge,
            description: p.description,
            isPopular: p.isPopular,
            isActive: p.isActive,
            sortOrder: p.sortOrder,
            benefits: JSON.stringify(p.benefits),
          },
          create: {
            name: p.name,
            code: p.code,
            price: p.price,
            period: p.period,
            badge: p.badge,
            description: p.description,
            isPopular: p.isPopular,
            isActive: p.isActive,
            sortOrder: p.sortOrder,
            benefits: JSON.stringify(p.benefits),
          },
        });
      }

      rawPlans = await prisma.posSubscriptionPlan.findMany({
        where: { isActive: true },
        orderBy: { sortOrder: 'asc' },
      });
    }

    const defaultTrialDays = config ? Number(config.value) : 14;

    const plans = rawPlans.map((p) => {
      let parsedBenefits: string[] = [];
      try {
        parsedBenefits = JSON.parse(p.benefits);
      } catch {
        parsedBenefits = [p.benefits];
      }
      return {
        id: p.id,
        name: p.name,
        code: p.code,
        price: Number(p.price),
        period: p.period,
        description: p.description,
        badge: p.badge,
        isPopular: p.isPopular,
        benefits: parsedBenefits,
      };
    });

    return NextResponse.json({
      success: true,
      data: {
        defaultTrialDays,
        plans,
      },
    }, { status: 200 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Gagal memuat paket langganan';
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}

