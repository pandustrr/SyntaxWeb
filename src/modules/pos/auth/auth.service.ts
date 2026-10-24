import { prisma } from '@/core/db/prisma';
import bcrypt from 'bcryptjs';
import { signPosToken } from '../core/pos-jwt';
import { PosUserSession } from '../core/pos-types';

export interface PosLoginInput {
  emailOrUsername: string;
  password: string;
}

export interface PosRegisterInput {
  businessName: string;
  name: string;
  email: string;
  password: string;
  phone?: string;
  address?: string;
}

export interface PosLoginResponse {
  token: string;
  user: PosUserSession;
  business: {
    id: number;
    name: string;
    slug: string;
    address: string | null;
    phone: string | null;
    receiptNotes: string | null;
    status?: string;
  };
}

export class PosAuthService {
  static async login(input: PosLoginInput): Promise<PosLoginResponse> {
    const { emailOrUsername, password } = input;

    if (!emailOrUsername || !password) {
      throw new Error('Email/username dan password wajib diisi.');
    }

    // Cari user berdasarkan email atau username
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { email: emailOrUsername },
          { username: emailOrUsername },
        ],
      },
      include: {
        business: true,
      },
    });

    if (!user) {
      throw new Error('Akun tidak ditemukan.');
    }

    // Verifikasi password (bcrypt atau fallback plaintext)
    let isPasswordValid = false;
    try {
      isPasswordValid = await bcrypt.compare(password, user.password);
    } catch {
      isPasswordValid = false;
    }

    if (!isPasswordValid && user.password === password) {
      isPasswordValid = true;
    }

    if (!isPasswordValid) {
      throw new Error('Password salah.');
    }

    // Validasi tenant / business
    if (!user.businessId || !user.business) {
      if (user.role === 'admin' || user.role === 'super_admin') {
        const adminSession: PosUserSession = {
          userId: user.id,
          businessId: 0,
          name: user.name,
          email: user.email,
          role: user.role,
          businessName: 'Syntax Platform Admin',
        };
        const token = signPosToken(adminSession);
        return {
          token,
          user: adminSession,
          business: {
            id: 0,
            name: 'Syntax SuperAdmin Platform',
            slug: 'superadmin',
            address: null,
            phone: null,
            receiptNotes: null,
            status: 'ACTIVE',
          },
        };
      }
      throw new Error('Pengguna ini belum terdaftar di toko/bisnis POS manapun.');
    }

    if (user.business.status === 'PENDING_APPROVAL') {
      throw new Error('Pendaftaran kafe sedang menunggu persetujuan SuperAdmin Syntax. Silakan hubungi admin.');
    }

    if (user.business.status === 'SUSPENDED') {
      throw new Error('Akun bisnis kafe ini sedang dinonaktifkan sementara oleh Administrator.');
    }

    if (user.business.status === 'REJECTED') {
      throw new Error('Pendaftaran kafe ini ditolak oleh Administrator.');
    }

    if (!user.business.isActive) {
      throw new Error('Toko/bisnis saat ini sedang dinonaktifkan.');
    }

    const session: PosUserSession = {
      userId: user.id,
      businessId: user.business.id,
      name: user.name,
      email: user.email,
      role: user.role,
      businessName: user.business.name,
    };

    const token = signPosToken(session);

    return {
      token,
      user: session,
      business: {
        id: user.business.id,
        name: user.business.name,
        slug: user.business.slug,
        address: user.business.address,
        phone: user.business.phone,
        receiptNotes: user.business.receiptNotes,
        status: user.business.status,
      },
    };
  }

  static async registerCafe(input: PosRegisterInput) {
    const { businessName, name, email, password, phone, address } = input;
    const cleanEmail = email.trim().toLowerCase();
    const cleanBiz = businessName.trim();
    const cleanName = name.trim();

    if (!cleanBiz || !cleanName || !cleanEmail || !password) {
      throw new Error('Nama bisnis, nama pemilik, email, dan password wajib diisi.');
    }

    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: cleanEmail },
          { username: cleanEmail },
        ],
      },
    });

    if (existingUser) {
      throw new Error('Email atau username sudah terdaftar. Silakan gunakan email lain atau hubungi admin.');
    }

    const baseSlug = cleanBiz
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '') || 'cafe';
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    let slug = `${baseSlug}-${randomSuffix}`;
    const existingSlug = await prisma.posBusiness.findUnique({
      where: { slug },
    });
    if (existingSlug) {
      slug = `${baseSlug}-${Date.now().toString().slice(-4)}`;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const business = await prisma.posBusiness.create({
      data: {
        name: cleanBiz,
        slug,
        address: address?.trim() || null,
        phone: phone?.trim() || null,
        status: 'PENDING_APPROVAL',
        isActive: true,
        receiptHeader: address ? `Selamat Datang di ${cleanBiz}\n${address}` : cleanBiz,
        receiptNotes: 'Terima kasih atas kunjungan Anda!',
        receiptFooter: 'WiFi: SyntaxGuest',
        receiptPaperSize: '58mm',
        showLogoOnReceipt: true,
        showWifiOnReceipt: false,
        taxPercent: 10.00,
        isTaxInclusive: false,
        servicePercent: 0.00,
        categories: {
          create: [
            { name: 'Kopi & Espresso', sortOrder: 1 },
            { name: 'Non-Kopi', sortOrder: 2 },
            { name: 'Makanan & Snack', sortOrder: 3 },
          ],
        },
        tables: {
          create: [
            { name: 'Meja 01', capacity: 4, status: 'available' },
            { name: 'Meja 02', capacity: 4, status: 'available' },
            { name: 'Meja 03', capacity: 2, status: 'available' },
            { name: 'Meja 04', capacity: 6, status: 'available' },
          ],
        },
      },
    });

    const cleanUsernameBase = cleanEmail.split('@')[0].replace(/[^a-z0-9_-]/gi, '') || 'user';
    let username = `${cleanUsernameBase}-${randomSuffix}`;
    const existingUsername = await prisma.user.findUnique({
      where: { username },
    });
    if (existingUsername) {
      username = `${cleanUsernameBase}-${Date.now().toString().slice(-4)}`;
    }

    const user = await prisma.user.create({
      data: {
        name: cleanName,
        email: cleanEmail,
        username,
        password: hashedPassword,
        role: 'owner',
        businessId: business.id,
      },
    });

    const session: PosUserSession = {
      userId: user.id,
      businessId: business.id,
      name: user.name,
      email: user.email,
      role: user.role,
      businessName: business.name,
    };

    const token = signPosToken(session);

    return {
      token,
      user: session,
      business: {
        id: business.id,
        name: business.name,
        slug: business.slug,
        status: business.status,
        address: business.address,
        phone: business.phone,
      },
      message: 'Pendaftaran kafe berhasil! Status saat ini: Menunggu Persetujuan SuperAdmin.',
    };
  }

  static async getProfile(userId: number) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        business: true,
      },
    });

    if (!user) throw new Error('User tidak ditemukan.');

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      business: user.business,
    };
  }
}
