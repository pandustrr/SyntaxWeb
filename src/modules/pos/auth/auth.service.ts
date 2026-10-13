import { prisma } from '@/core/db/prisma';
import bcrypt from 'bcryptjs';
import { signPosToken } from '../core/pos-jwt';
import { PosUserSession } from '../core/pos-types';

export interface PosLoginInput {
  emailOrUsername: string;
  password: string;
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
      throw new Error('Pengguna ini belum terdaftar di toko/bisnis POS manapun.');
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
      },
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
