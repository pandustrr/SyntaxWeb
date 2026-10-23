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

let customerStore: Customer[] = [
  { id: 1, name: 'Budi Santoso', phone: '081234567890', email: 'budi.santoso@gmail.com', total_points: 320, total_spend: 1600000, total_visit: 14, membership_level: { name: 'Gold' } },
  { id: 2, name: 'Siti Nur Rahma', phone: '081398765432', email: 'siti.rahma@yahoo.com', total_points: 180, total_spend: 900000, total_visit: 8, membership_level: { name: 'Silver' } },
  { id: 3, name: 'Dimas Wicaksono', phone: '085711223344', email: 'dimas.w@outlook.com', total_points: 450, total_spend: 2250000, total_visit: 21, membership_level: { name: 'Platinum' } },
  { id: 4, name: 'Dewi Lestari', phone: '087788990011', email: 'dewi.lestari@gmail.com', total_points: 90, total_spend: 450000, total_visit: 4, membership_level: { name: 'Bronze' } },
  { id: 5, name: 'Ahmad Fauzi', phone: '081223344556', email: 'ahmad.fauzi@gmail.com', total_points: 260, total_spend: 1300000, total_visit: 11, membership_level: { name: 'Silver' } },
  { id: 6, name: 'Maya Anggraini', phone: '082133445566', email: 'maya.anggraini@gmail.com', total_points: 520, total_spend: 2600000, total_visit: 25, membership_level: { name: 'Platinum' } },
  { id: 7, name: 'Rian Pratama', phone: '085699887766', email: 'rian.pratama@gmail.com', total_points: 140, total_spend: 700000, total_visit: 6, membership_level: { name: 'Silver' } },
  { id: 8, name: 'Anisa Maharani', phone: '081988776655', email: 'anisa.m@gmail.com', total_points: 380, total_spend: 1900000, total_visit: 17, membership_level: { name: 'Gold' } },
];

export class PosCustomerService {
  static getCustomers(query: string = '') {
    if (!query) return customerStore;
    const q = query.toLowerCase();
    return customerStore.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.phone.includes(q) ||
        c.email.toLowerCase().includes(q)
    );
  }

  static createCustomer(data: Partial<Customer>) {
    const newId = customerStore.length > 0 ? Math.max(...customerStore.map((c) => c.id)) + 1 : 1;
    const customer: Customer = {
      id: newId,
      name: data.name || 'Pelanggan Baru',
      phone: data.phone || '',
      email: data.email || '',
      total_points: 0,
      total_spend: 0,
      total_visit: 1,
      membership_level: { name: 'Bronze' },
    };
    customerStore.push(customer);
    return customer;
  }

  static updateCustomer(id: number, data: Partial<Customer>) {
    const idx = customerStore.findIndex((c) => c.id === id);
    if (idx === -1) throw new Error('Pelanggan tidak ditemukan');
    customerStore[idx] = {
      ...customerStore[idx],
      ...data,
    };
    return customerStore[idx];
  }

  static deleteCustomer(id: number) {
    customerStore = customerStore.filter((c) => c.id !== id);
    return true;
  }
}
