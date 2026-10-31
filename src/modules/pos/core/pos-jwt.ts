import jwt from 'jsonwebtoken';
import { PosUserSession } from './pos-types';

const JWT_SECRET = process.env.JWT_SECRET || process.env.NEXTAUTH_SECRET || 'syntaxweb_pos_jwt_secret_key_2026';
if (process.env.NODE_ENV === 'production' && !process.env.JWT_SECRET) {
  console.warn('[SECURITY WARNING] JWT_SECRET is not explicitly set in environment variables! Using fallback secret.');
}
const JWT_EXPIRES_IN = '30d'; // 30 hari untuk kasir/tablet offline-friendly

export function signPosToken(payload: PosUserSession): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

export function verifyPosToken(token: string): PosUserSession | null {
  try {
    return jwt.verify(token, JWT_SECRET) as PosUserSession;
  } catch {
    return null;
  }
}
