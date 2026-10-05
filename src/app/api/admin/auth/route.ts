import { NextRequest, NextResponse } from 'next/server';
import { getSession, setSession, clearSession } from '@/core/auth/session';
import { prisma } from '@/core/db/prisma';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ message: 'Email dan password harus diisi' }, { status: 400 });
    }

    const user = await (prisma.user as any).findFirst({
      where: { OR: [{ email }, { username: email }] },
    });

    if (!user || user.password !== password) {
      return NextResponse.json({ message: 'Email atau password salah' }, { status: 401 });
    }

    const sessionUser = {
      id: user.id,
      email: user.email || user.username,
      name: user.name,
      role: user.role || 'admin',
    };

    await setSession(sessionUser);

    return NextResponse.json({ message: 'Login berhasil', user: sessionUser }, { status: 200 });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ message: 'Terjadi kesalahan server' }, { status: 500 });
  }
}

export async function DELETE() {
  try {
    await clearSession();
    return NextResponse.json({ message: 'Logout berhasil' }, { status: 200 });
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json({ message: 'Terjadi kesalahan server' }, { status: 500 });
  }
}
