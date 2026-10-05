'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Input from '@/modules/shared/components/ui/Input';
import Button from '@/modules/shared/components/ui/Button';
import { useAuth } from '../hooks/useAuth';

export default function LoginForm() {
  const router = useRouter();
  const { login, loading, error } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = await login({ email, password });
    if (result.success) {
      router.push('/admin');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Admin Login
            </h1>
            <p className="text-gray-600">Masuk ke dashboard admin</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="text"
              label="Email atau Username"
              placeholder="admin atau admin@syntaxweb.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              label="Password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}
            <Button type="submit" variant="primary" className="w-full" disabled={loading}>
              {loading ? 'Memproses...' : 'Login'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
