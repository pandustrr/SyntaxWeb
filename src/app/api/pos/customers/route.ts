import { NextRequest } from 'next/server';
import { getPosSessionFromRequest } from '@/modules/pos/core/pos-guard';
import { PosCustomerService } from '@/modules/pos/customers/customer.store';
import { apiSuccess, apiError } from '@/modules/pos/core/pos-response';

export async function GET(request: NextRequest) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    const { searchParams } = new URL(request.url);
    const query = searchParams.get('search') || searchParams.get('q') || '';

    const customers = await PosCustomerService.getCustomers(session.businessId, query);
    return apiSuccess(customers, 'Daftar pelanggan berhasil dimuat');
  } catch (error: any) {
    return apiError(error.message || 'Gagal memuat pelanggan', 400);
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = getPosSessionFromRequest(request);
    if (!session) {
      return apiError('Unauthorized', 401);
    }

    const body = await request.json();
    const created = await PosCustomerService.createCustomer(session.businessId, body);
    return apiSuccess(created, 'Pelanggan berhasil disimpan', 201);
  } catch (error: any) {
    return apiError(error.message || 'Gagal menyimpan pelanggan', 400);
  }
}
