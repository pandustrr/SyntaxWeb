'use client';

import { useState, useCallback } from 'react';
import { loginAction, logoutAction } from '../actions/auth';
import type { LoginCredentials } from '../types';

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = useCallback(async (credentials: LoginCredentials) => {
    setLoading(true);
    setError(null);
    const result = await loginAction(credentials);
    if (!result.success) {
      setError(result.message);
    }
    setLoading(false);
    return result;
  }, []);

  const logout = useCallback(async () => {
    setLoading(true);
    const result = await logoutAction();
    setLoading(false);
    return result;
  }, []);

  return { loading, error, login, logout };
}
