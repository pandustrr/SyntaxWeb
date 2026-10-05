'use server';

import { prisma } from '@/core/db/prisma';
import { getSession } from '@/core/auth/session';
import type { AdminUser } from '../types';

async function requireAdmin() {
  const session = await getSession();
  if (!session || session.role !== 'admin') throw new Error('Forbidden');
  return session;
}

export async function getUsersAction(): Promise<{ users: AdminUser[]; error?: string }> {
  try {
    await requireAdmin();
    const users = await (prisma.user as any).findMany({ orderBy: { createdAt: 'desc' } });
    return {
      users: users.map((u: any) => ({
        id: u.id,
        email: u.email,
        username: u.username,
        name: u.name,
        role: u.role,
        createdAt: u.createdAt?.toISOString(),
      })),
    };
  } catch (error: any) {
    return { users: [], error: error.message };
  }
}

export async function createUserAction(
  data: Pick<AdminUser, 'name' | 'email' | 'role'> & { password: string }
): Promise<{ user?: AdminUser; error?: string }> {
  try {
    await requireAdmin();
    if (!data.name || !data.email || !data.password) {
      return { error: 'Nama, email, dan password harus diisi.' };
    }
    const user = await (prisma.user as any).create({
      data: { name: data.name, email: data.email, password: data.password, role: data.role || 'user' },
    });
    return { user: { id: user.id, email: user.email, name: user.name, role: user.role } };
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function deleteUserAction(id: number): Promise<{ success: boolean; error?: string }> {
  try {
    await requireAdmin();
    await (prisma.user as any).delete({ where: { id } });
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
