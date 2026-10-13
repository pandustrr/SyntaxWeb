import { NextResponse } from 'next/server';
import { ApiResponse } from './pos-types';

export function apiSuccess<T = any>(data: T, message: string = 'Success', status: number = 200) {
  const body: ApiResponse<T> = {
    success: true,
    message,
    data,
  };
  return NextResponse.json(body, { status });
}

export function apiError(message: string = 'An error occurred', status: number = 400, errors?: any) {
  const body: ApiResponse = {
    success: false,
    message,
    ...(errors ? { errors } : {}),
  };
  return NextResponse.json(body, { status });
}
