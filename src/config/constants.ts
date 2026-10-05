// App-wide constants
export const APP_NAME = 'SyntaxWeb';
export const APP_EMAIL = 'office@syntaxweb.com';
export const APP_LOCATION = 'Jember, Jawa Timur, Indonesia';
export const APP_URL = 'https://syntaxweb.com';

export const BRAND_CYAN = '#22D3EE';

export const SESSION_COOKIE = 'session';
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export const ADMIN_ROUTES = {
  dashboard: '/admin',
  login: '/admin/login',
  projects: '/admin/projects',
  users: '/admin/users',
} as const;

export const PUBLIC_ROUTES = {
  home: '/',
  contact: '/contact',
  portfolio: '/portfolio',
  pricelist: '/pricelist',
  partners: '/partners',
  services: '/services',
} as const;
