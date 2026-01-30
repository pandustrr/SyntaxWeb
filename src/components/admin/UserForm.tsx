'use client';

import { useState, FormEvent } from 'react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

interface User {
  id?: number;
  name: string;
  email: string;
  role: string;
}

interface UserFormProps {
  user?: User;
  onSubmit: (user: User) => void;
  onCancel: () => void;
}

export default function UserForm({ user, onSubmit, onCancel }: UserFormProps) {
  const [formData, setFormData] = useState<User>({
    name: user?.name || '',
    email: user?.email || '',
    role: user?.role || 'user',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Nama"
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Masukkan nama"
        required
      />

      <Input
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="user@example.com"
        required
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Role
        </label>
        <select
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <div className="flex gap-3 justify-end">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
        >
          Batal
        </Button>
        <Button
          type="submit"
          variant="primary"
        >
          {user ? 'Update' : 'Tambah'} User
        </Button>
      </div>
    </form>
  );
}
