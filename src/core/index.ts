// Core layer barrel — infrastructure utilities
export { prisma } from './db/prisma';
export { getSession, setSession, clearSession, isAuthenticated } from './auth/session';
export type { SessionUser } from './auth/session';
export { cn, formatDate, formatCurrency, slugify } from './utils/helpers';
