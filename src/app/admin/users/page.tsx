'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import UserForm from '@/components/admin/UserForm';
import { Plus, Edit, Trash2 } from 'lucide-react';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: 'Admin User',
      email: 'admin@syntaxweb.com',
      role: 'admin',
    },
    {
      id: 2,
      name: 'Regular User',
      email: 'user@syntaxweb.com',
      role: 'user',
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | undefined>();

  const handleAddUser = () => {
    setSelectedUser(undefined);
    setIsModalOpen(true);
  };

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter(u => u.id !== id));
  };

  const handleSubmit = (user: User) => {
    if (selectedUser) {
      setUsers(users.map(u => u.id === selectedUser.id ? { ...user, id: selectedUser.id } : u));
    } else {
      setUsers([...users, { ...user, id: users.length + 1 }]);
    }
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Users</h1>
          <p className="text-gray-600">Kelola semua pengguna</p>
        </div>
        <Button variant="primary" onClick={handleAddUser}>
          <Plus size={20} className="mr-2" />
          Tambah User
        </Button>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Nama</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Email</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Role</th>
              <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{user.name}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    user.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => handleEditUser(user)}
                      className="text-blue-600 hover:text-blue-800 p-2 hover:bg-blue-50 rounded-lg"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="text-red-600 hover:text-red-800 p-2 hover:bg-red-50 rounded-lg"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedUser ? 'Edit User' : 'Tambah User'}
      >
        <UserForm
          user={selectedUser}
          onSubmit={handleSubmit}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
}
