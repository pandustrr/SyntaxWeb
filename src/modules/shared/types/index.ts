// Shared module types
export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface ApiResponse<T> {
  data?: T;
  message?: string;
  error?: string;
}

export type Theme = 'light' | 'dark' | 'system';
