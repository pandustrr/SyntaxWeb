// Admin module types

export interface AdminUser {
  id: number;
  email: string;
  username?: string;
  name: string;
  role: string;
  createdAt?: string;
}

export interface AdminProject {
  id: number;
  name: string;
  description: string;
  status: string;
  createdAt: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResult {
  success: boolean;
  message: string;
  user?: Pick<AdminUser, 'id' | 'email' | 'name' | 'role'>;
}
