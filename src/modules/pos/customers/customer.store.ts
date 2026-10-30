import { prisma } from '@/core/db/prisma';

export interface Customer {
  id: number;
  name: string;
  phone: string;
  email: string;
  total_points: number;
  total_spend: number;
  total_visit: number;
  membership_level: {
    name: string;
  };
}

export class PosCustomerService {
  static async getCustomers(businessId: number, query: string = ''): Promise<Customer[]> {
    try {
      const q = query.trim();
      const whereClause: {
        businessId: number;
        OR?: Array<{
          name?: { contains: string };
          phone?: { contains: string };
          email?: { contains: string };
        }>;
      } = { businessId };

      if (q) {
        whereClause.OR = [
          { name: { contains: q } },
          { phone: { contains: q } },
          { email: { contains: q } },
        ];
      }

      const list = await prisma.posCustomer.findMany({
        where: whereClause,
        orderBy: { id: 'desc' },
      });

      return list.map((c) => ({
        id: c.id,
        name: c.name,
        phone: c.phone || '',
        email: c.email || '',
        total_points: c.totalPoints,
        total_spend: Number(c.totalSpend),
        total_visit: c.totalVisit,
        membership_level: { name: c.membershipLevel || 'Bronze' },
      }));
    } catch (e) {
      console.error('[PosCustomerService.getCustomers] error:', e);
      return [];
    }
  }

  static async createCustomer(businessId: number, data: Partial<Customer>): Promise<Customer> {
    const created = await prisma.posCustomer.create({
      data: {
        businessId,
        name: data.name || 'Pelanggan Baru',
        phone: data.phone || '',
        email: data.email || '',
        totalPoints: Number(data.total_points ?? 0),
        totalSpend: Number(data.total_spend ?? 0),
        totalVisit: Number(data.total_visit ?? 1),
        membershipLevel: data.membership_level?.name || 'Bronze',
      },
    });

    return {
      id: created.id,
      name: created.name,
      phone: created.phone || '',
      email: created.email || '',
      total_points: created.totalPoints,
      total_spend: Number(created.totalSpend),
      total_visit: created.totalVisit,
      membership_level: { name: created.membershipLevel },
    };
  }

  static async updateCustomer(
    businessId: number,
    id: number,
    data: Partial<Customer>
  ): Promise<Customer> {
    const existing = await prisma.posCustomer.findFirst({
      where: { id, businessId },
    });
    if (!existing) throw new Error('Pelanggan tidak ditemukan di outlet Anda');

    const updateData: {
      name?: string;
      phone?: string;
      email?: string;
      totalPoints?: number;
      totalSpend?: number;
      totalVisit?: number;
      membershipLevel?: string;
    } = {};

    if (data.name !== undefined) updateData.name = data.name;
    if (data.phone !== undefined) updateData.phone = data.phone;
    if (data.email !== undefined) updateData.email = data.email;
    if (data.total_points !== undefined) updateData.totalPoints = Number(data.total_points);
    if (data.total_spend !== undefined) updateData.totalSpend = Number(data.total_spend);
    if (data.total_visit !== undefined) updateData.totalVisit = Number(data.total_visit);
    if (data.membership_level?.name) updateData.membershipLevel = data.membership_level.name;

    const updated = await prisma.posCustomer.update({
      where: { id },
      data: updateData,
    });

    return {
      id: updated.id,
      name: updated.name,
      phone: updated.phone || '',
      email: updated.email || '',
      total_points: updated.totalPoints,
      total_spend: Number(updated.totalSpend),
      total_visit: updated.totalVisit,
      membership_level: { name: updated.membershipLevel },
    };
  }

  static async deleteCustomer(businessId: number, id: number): Promise<boolean> {
    const existing = await prisma.posCustomer.findFirst({
      where: { id, businessId },
    });
    if (!existing) throw new Error('Pelanggan tidak ditemukan di outlet Anda');

    await prisma.posCustomer.delete({
      where: { id },
    });
    return true;
  }
}
