'use server';

import bcrypt from 'bcryptjs';
import { prisma } from '@/core/db/prisma';
import { setSession, clearSession } from '@/core/auth/session';
import type { LoginCredentials, LoginResult } from '../types';

export async function loginAction(credentials: LoginCredentials): Promise<LoginResult> {
  try {
    const { email, password } = credentials;

    if (!email || !password) {
      return { success: false, message: 'Email dan password harus diisi.' };
    }

    const user = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { username: email }],
      },
    });

    if (!user) {
      return { success: false, message: 'Email atau password salah.' };
    }

    const isHashed = Boolean(
      user.password &&
      (user.password.startsWith('$2a$') ||
       user.password.startsWith('$2b$') ||
       user.password.startsWith('$2y$'))
    );

    const isPasswordValid = isHashed
      ? await bcrypt.compare(password, user.password)
      : user.password === password;

    if (!isPasswordValid) {
      return { success: false, message: 'Email atau password salah.' };
    }

    const sessionUser = {
      id: user.id,
      email: user.email || user.username,
      name: user.name,
      role: user.role || 'admin',
    };

    await setSession(sessionUser);

    return { success: true, message: 'Login berhasil.', user: sessionUser };
  } catch (error) {
    console.error('[Auth] Login error:', error);
    return { success: false, message: 'Terjadi kesalahan server.' };
  }
}

export async function logoutAction(): Promise<{ success: boolean }> {
  try {
    await clearSession();
    return { success: true };
  } catch (error) {
    console.error('[Auth] Logout error:', error);
    return { success: false };
  }
}
