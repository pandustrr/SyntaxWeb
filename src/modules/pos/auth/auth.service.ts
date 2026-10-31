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
  isTrial?: boolean;
  trialDays?: number;
  planId?: number;
  planCode?: string;
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
    isTrial?: boolean;
    trialEndsAt?: Date | null;
    enableDashboard?: boolean;
    enablePos?: boolean;
    enableTables?: boolean;
    enableKds?: boolean;
    enableProducts?: boolean;
    enableInventory?: boolean;
    enableCustomers?: boolean;
    enablePromotions?: boolean;
    enableEmployees?: boolean;
    attendanceMode?: string;
    enableReports?: boolean;
    enableSettings?: boolean;
    taxPercent?: number;
    isTaxInclusive?: boolean;
    servicePercent?: number;
  };
}

export function resolveUserPermissions(
  role: string,
  customPermissionsJson?: string | null,
  businessRolePermissionsJson?: string | null
): string[] {
  const cleanRole = (role || '').toLowerCase();

  // 1. OWNER selalu default mendapatkan SEMUA 12 FITUR!
  if (['owner', 'admin', 'super_admin'].includes(cleanRole)) {
    return [
      'dashboard', 'pos', 'tables', 'kds', 'products', 'inventory',
      'customers', 'promotions', 'employees', 'attendance', 'reports', 'settings'
    ];
  }

  // 2. Jika user memiliki izin khusus perorangan yang diatur Owner
  if (customPermissionsJson) {
    try {
      const parsed = JSON.parse(customPermissionsJson);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch (_) {}
  }

  // 3. Jika outlet memiliki template per-role yang diatur SuperAdmin di /admin/cafes
  if (businessRolePermissionsJson) {
    try {
      const bizPerms = JSON.parse(businessRolePermissionsJson);
      const roleMapped = cleanRole === 'kitchen_bar' || cleanRole === 'barista' ? 'kitchen' : (cleanRole === 'kasir' ? 'cashier' : cleanRole);
      if (Array.isArray(bizPerms[roleMapped]) && bizPerms[roleMapped].length > 0) {
        return bizPerms[roleMapped];
      }
    } catch (_) {}
  }

  // 4. Default role standar
  if (cleanRole === 'manager') {
    return [
      'dashboard', 'pos', 'tables', 'kds', 'products', 'inventory',
      'customers', 'promotions', 'employees', 'attendance', 'reports'
    ];
  }

  if (['kitchen', 'kitchen_bar', 'barista'].includes(cleanRole)) {
    return ['kds', 'inventory'];
  }

  // Default cashier / kasir
  return ['pos', 'tables', 'kds', 'customers', 'promotions', 'employees'];
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
        // Ambil toko aktif pertama (default tenant) agar SuperAdmin dapat langsung mengoperasikan & menguji POS
        const activeBusiness = await prisma.posBusiness.findFirst({
          where: { isActive: true },
          orderBy: { id: 'asc' },
        });

        if (activeBusiness) {
          const adminSession: PosUserSession = {
            userId: user.id,
            businessId: activeBusiness.id,
            name: user.name,
            email: user.email,
            role: user.role,
            businessName: activeBusiness.name,
            permissions: resolveUserPermissions(user.role, user.permissions, activeBusiness.rolePermissions),
          };
          const token = signPosToken(adminSession);
          return {
            token,
            user: adminSession,
            business: {
              id: activeBusiness.id,
              name: activeBusiness.name,
              slug: activeBusiness.slug,
              address: activeBusiness.address,
              phone: activeBusiness.phone,
              receiptNotes: activeBusiness.receiptNotes,
              status: activeBusiness.status,
              isTrial: activeBusiness.isTrial,
              trialEndsAt: activeBusiness.trialEndsAt,
              enableDashboard: activeBusiness.enableDashboard,
              enablePos: activeBusiness.enablePos,
              enableTables: activeBusiness.enableTables,
              enableKds: activeBusiness.enableKds,
              enableProducts: activeBusiness.enableProducts,
              enableInventory: activeBusiness.enableInventory,
              enableCustomers: activeBusiness.enableCustomers,
              enablePromotions: activeBusiness.enablePromotions,
              enableEmployees: activeBusiness.enableEmployees,
              attendanceMode: activeBusiness.attendanceMode,
              enableReports: activeBusiness.enableReports,
              enableSettings: activeBusiness.enableSettings,
              taxPercent: Number(activeBusiness.taxPercent ?? 10.0),
              isTaxInclusive: Boolean(activeBusiness.isTaxInclusive ?? false),
              servicePercent: Number(activeBusiness.servicePercent ?? 0.0),
            },
          };
        }
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

    // Cek batas waktu masa uji coba gratis (Trial Expiry)
    if (user.business.isTrial && user.business.trialEndsAt) {
      const now = new Date();
      const expiry = new Date(user.business.trialEndsAt);
      if (now > expiry) {
        throw new Error(
          `Masa uji coba gratis (Trial) kafe Anda telah berakhir pada ${expiry.toLocaleDateString('id-ID')}. Silakan hubungi SuperAdmin Syntax untuk aktivasi lisensi tenant resmi.`
        );
      }
    }

    const session: PosUserSession = {
      userId: user.id,
      businessId: user.business.id,
      name: user.name,
      email: user.email,
      role: user.role,
      businessName: user.business.name,
      permissions: resolveUserPermissions(user.role, user.permissions, user.business.rolePermissions),
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
        isTrial: user.business.isTrial,
        trialEndsAt: user.business.trialEndsAt,
        enableDashboard: user.business.enableDashboard,
        enablePos: user.business.enablePos,
        enableTables: user.business.enableTables,
        enableKds: user.business.enableKds,
        enableProducts: user.business.enableProducts,
        enableInventory: user.business.enableInventory,
        enableCustomers: user.business.enableCustomers,
        enablePromotions: user.business.enablePromotions,
        enableEmployees: user.business.enableEmployees,
        attendanceMode: user.business.attendanceMode,
        enableReports: user.business.enableReports,
        enableSettings: user.business.enableSettings,
        taxPercent: Number(user.business.taxPercent ?? 10.0),
        isTaxInclusive: Boolean(user.business.isTaxInclusive ?? false),
        servicePercent: Number(user.business.servicePercent ?? 0.0),
      },
    };
  }

  static async registerCafe(input: PosRegisterInput) {
    const { businessName, name, email, password, phone, address, isTrial, trialDays } = input;
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
    const isFreeTrial = Boolean(isTrial);
    const validTrialDays = Number(trialDays && trialDays > 0 ? trialDays : 14);
    const trialEndsAt = isFreeTrial ? new Date(Date.now() + validTrialDays * 24 * 60 * 60 * 1000) : null;
    const initialStatus = isFreeTrial ? 'ACTIVE' : 'PENDING_APPROVAL';

    let resolvedPlanId: number | null = input.planId ? Number(input.planId) : null;
    if (!resolvedPlanId && input.planCode) {
      const foundPlan = await prisma.posSubscriptionPlan.findUnique({
        where: { code: input.planCode.toLowerCase() },
      });
      if (foundPlan) resolvedPlanId = foundPlan.id;
    }

    const business = await prisma.posBusiness.create({
      data: {
        name: cleanBiz,
        slug,
        address: address?.trim() || null,
        phone: phone?.trim() || null,
        status: initialStatus,
        isTrial: isFreeTrial,
        trialEndsAt,
        planId: resolvedPlanId,
        subscribedAt: !isFreeTrial && resolvedPlanId ? new Date() : null,
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
        pin: '0000',
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
        isTrial: business.isTrial,
        trialEndsAt: business.trialEndsAt,
        taxPercent: Number(business.taxPercent ?? 10.0),
        isTaxInclusive: Boolean(business.isTaxInclusive ?? false),
        servicePercent: Number(business.servicePercent ?? 0.0),
      },
      message: isFreeTrial
        ? `Pendaftaran uji coba gratis berhasil! Masa aktif uji coba ${validTrialDays} hari.`
        : 'Pendaftaran kafe berhasil! Status saat ini: Menunggu Persetujuan SuperAdmin.',
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
