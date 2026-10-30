export interface PosUserSession {
  userId: number;
  businessId: number;
  name: string;
  email: string;
  role: string;
  businessName: string;
  permissions?: string[];
}

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  errors?: any;
}
