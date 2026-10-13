import { NextRequest } from 'next/server';
import { verifyPosToken } from './pos-jwt';
import { PosUserSession } from './pos-types';

export function getPosSessionFromRequest(request: NextRequest): PosUserSession | null {
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }

  const token = authHeader.substring(7).trim();
  if (!token) return null;

  return verifyPosToken(token);
}
