import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

export interface SessionUser {
  id: number;
  email: string;
  name: string;
  role: string;
}

export async function getSession(): Promise<SessionUser | null> {
  const cookieStore = await cookies();
  const session = cookieStore.get('session');

  if (!session) return null;

  try {
    const user = JSON.parse(session.value) as SessionUser;
    return user;
  } catch {
    return null;
  }
}

export async function setSession(user: SessionUser): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set('session', JSON.stringify(user), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

export async function clearSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete('session');
}

export function isAuthenticated(request: NextRequest): boolean {
  const session = request.cookies.get('session');
  return !!session;
}
