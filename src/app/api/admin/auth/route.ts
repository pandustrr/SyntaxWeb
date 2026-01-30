import { NextRequest, NextResponse } from 'next/server';
import { setSession, clearSession } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Validasi input
    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email dan password harus diisi' },
        { status: 400 }
      );
    }

    // Cari user di database
    // TODO: Implement proper password hashing dengan bcrypt
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || user.password !== password) {
      return NextResponse.json(
        { message: 'Email atau password salah' },
        { status: 401 }
      );
    }

    // Set session
    await setSession({
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    });

    return NextResponse.json(
      { message: 'Login berhasil', user: { id: user.id, email: user.email, name: user.name, role: user.role } },
      { status: 200 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { message: 'Terjadi kesalahan server' },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  try {
    await clearSession();
    return NextResponse.json({ message: 'Logout berhasil' }, { status: 200 });
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { message: 'Terjadi kesalahan server' },
      { status: 500 }
    );
  }
}
