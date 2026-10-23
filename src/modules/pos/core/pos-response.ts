import { NextResponse } from 'next/server';
import { ApiResponse } from './pos-types';

export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
};

export function apiSuccess<T = any>(data: T, message: string = 'Success', status: number = 200) {
  const body: ApiResponse<T> = {
    success: true,
    message,
    data,
  };
  return NextResponse.json(body, {
    status,
    headers: corsHeaders,
  });
}

export function apiError(message: string = 'An error occurred', status: number = 400, errors?: any) {
  const body: ApiResponse = {
    success: false,
    message,
    ...(errors ? { errors } : {}),
  };
  return NextResponse.json(body, {
    status,
    headers: corsHeaders,
  });
}

