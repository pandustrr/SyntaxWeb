'use client';

import { useState, useEffect, useCallback } from 'react';
import { Users, X, RefreshCw, KeyRound, UserCheck, Plus, CheckCircle2, AlertCircle, Shield } from 'lucide-react';

interface TenantUser {
  id: number;
  name: string;
  email: string;
  username: string;
  role: string;
  pin: string | null;
  phone: string | null;
  position: string | null;
  createdAt: string;
}

interface CafeItem {
  id: number;
  name: string;
  slug: string;
}

interface ManageTenantUsersModalProps {
  isOpen: boolean;
  onClose: () => void;
  cafe: CafeItem | null;
  onSuccess: (msg?: string) => void;
}

export function ManageTenantUsersModal({ isOpen, onClose, cafe, onSuccess }: ManageTenantUsersModalProps) {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<TenantUser[]>([]);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const [editingPins, setEditingPins] = useState<Record<number, string>>({});
  const [savingUserId, setSavingUserId] = useState<number | null>(null);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('password123');
  const [newRole, setNewRole] = useState('cashier');
  const [newPin, setNewPin] = useState('1234');
  const [addingUser, setAddingUser] = useState(false);

  const fetchUsers = useCallback(async () => {
    if (!cafe) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/cafes/${cafe.id}/users`);
      if (res.ok) {
        const json = await res.json();
        const list: TenantUser[] = json.users || [];
        setUsers(list);
        const pinMap: Record<number, string> = {};
        list.forEach((u) => {
          pinMap[u.id] = u.pin || '';
        });
        setEditingPins(pinMap);
      }
    } catch (_) {
      // ignore
    } finally {
      setLoading(false);
    }
  }, [cafe]);

  useEffect(() => {
    if (isOpen && cafe) {
      setFeedback(null);
      setShowAddForm(false);
      fetchUsers();
    }
  }, [isOpen, cafe, fetchUsers]);

  if (!isOpen || !cafe) return null;

  const handleUpdatePin = async (user: TenantUser) => {
    setSavingUserId(user.id);
    setFeedback(null);
    try {
      const targetPin = editingPins[user.id] || '';
      const res = await fetch(`/api/admin/cafes/${cafe.id}/users`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.id,
          pin: targetPin.trim(),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Gagal mengubah PIN');

      setFeedback({ type: 'success', text: `PIN staf ${user.name} berhasil disimpan (${targetPin.trim() || 'Kosong'})` });
      await fetchUsers();
      onSuccess();
    } catch (err: any) {
      setFeedback({ type: 'error', text: err.message || 'Gagal menyimpan PIN' });
    } finally {
      setSavingUserId(null);
    }
  };

  const handleAddStaff = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newEmail.trim()) {
      setFeedback({ type: 'error', text: 'Nama dan email staf wajib diisi' });
      return;
    }

    setAddingUser(true);
    setFeedback(null);
    try {
      const res = await fetch(`/api/admin/cafes/${cafe.id}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newName.trim(),
          email: newEmail.trim(),
          password: newPassword.trim(),
          role: newRole,
          pin: newPin.trim(),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Gagal menambahkan staf');

      setFeedback({ type: 'success', text: `Akun staf ${newName} berhasil dibuat!` });
      setNewName('');
      setNewEmail('');
      setShowAddForm(false);
      await fetchUsers();
      onSuccess();
    } catch (err: any) {
      setFeedback({ type: 'error', text: err.message || 'Gagal menambahkan staf' });
    } finally {
      setAddingUser(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 w-full max-w-2xl rounded-2xl border border-gray-100 dark:border-gray-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gray-50/50 dark:bg-gray-800/50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl">
              <KeyRound size={20} />
            </div>
            <div>
              <h3 className="font-bold text-sm text-gray-900 dark:text-white">Kelola Akun & PIN Staf Kasir</h3>
              <p className="text-xs text-gray-500 font-mono">{cafe.name} (@{cafe.slug})</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg">
            <X size={18} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {feedback && (
            <div className={`p-3 rounded-xl text-xs font-semibold flex items-center gap-2 ${feedback.type === 'success' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
              {feedback.type === 'success' ? <CheckCircle2 size={15} /> : <AlertCircle size={15} />}
              <span>{feedback.text}</span>
            </div>
          )}

          <div className="p-3 bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200/60 rounded-xl text-xs text-blue-800 dark:text-blue-300 flex items-start gap-2">
            <Shield size={16} className="text-blue-600 shrink-0 mt-0.5" />
            <span>Karyawan dapat masuk/buka kunci POS menggunakan 4 digit PIN kasir tanpa email & password panjang. Atur PIN staf di bawah ini.</span>
          </div>

          {loading ? (
            <div className="py-10 flex justify-center"><RefreshCw size={24} className="animate-spin text-blue-500" /></div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Daftar Akun ({users.length})</span>
                <button
                  type="button"
                  onClick={() => setShowAddForm(!showAddForm)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-bold rounded-lg"
                >
                  <Plus size={13} />
                  <span>{showAddForm ? 'Tutup Form' : 'Tambah Staf'}</span>
                </button>
              </div>

              {showAddForm && (
                <form onSubmit={handleAddStaff} className="p-4 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 rounded-xl space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-semibold text-gray-600">Nama Lengkap *</label>
                      <input type="text" required value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Nama staf" className="w-full mt-1 px-3 py-1.5 bg-white border rounded-lg text-xs" />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-gray-600">Email Akun *</label>
                      <input type="email" required value={newEmail} onChange={(e) => setNewEmail(e.target.value)} placeholder="email@syntax.id" className="w-full mt-1 px-3 py-1.5 bg-white border rounded-lg text-xs" />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-gray-600">Role / Peran</label>
                      <select value={newRole} onChange={(e) => setNewRole(e.target.value)} className="w-full mt-1 px-3 py-1.5 bg-white border rounded-lg text-xs">
                        <option value="cashier">Kasir POS (Slot 1)</option>
                        <option value="kitchen">Kitchen / Barista (Slot 1)</option>
                        <option value="manager">Store Manager (Slot 1)</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-gray-600">PIN Kasir (4 Digit)</label>
                      <input type="text" maxLength={6} value={newPin} onChange={(e) => setNewPin(e.target.value)} placeholder="1234" className="w-full mt-1 px-3 py-1.5 bg-white border rounded-lg text-xs font-mono font-bold tracking-widest text-blue-600" />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button type="submit" disabled={addingUser} className="px-4 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-bold">
                      {addingUser ? 'Menyimpan...' : 'Simpan Akun'}
                    </button>
                  </div>
                </form>
              )}

              <div className="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden divide-y divide-gray-100 dark:divide-gray-800">
                {users.map((u) => (
                  <div key={u.id} className="p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-gray-50/50">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs text-gray-900 dark:text-white">{u.name}</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold border uppercase bg-gray-100 text-gray-700">{u.role}</span>
                      </div>
                      <div className="text-[11px] text-gray-500 font-mono">{u.email}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-2.5 py-1">
                        <span className="text-[10px] font-bold text-gray-400">PIN:</span>
                        <input
                          type="text"
                          maxLength={6}
                          value={editingPins[u.id] ?? ''}
                          onChange={(e) => setEditingPins({ ...editingPins, [u.id]: e.target.value })}
                          placeholder="0000"
                          className="w-16 bg-transparent text-xs font-mono font-bold tracking-widest text-blue-600 dark:text-blue-400 focus:outline-none"
                        />
                      </div>
                      <button
                        type="button"
                        disabled={savingUserId === u.id}
                        onClick={() => handleUpdatePin(u)}
                        className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-bold disabled:opacity-50"
                      >
                        {savingUserId === u.id ? <RefreshCw size={12} className="animate-spin" /> : 'Set PIN'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-gray-100 flex justify-end">
          <button onClick={onClose} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl text-xs font-bold">Tutup</button>
        </div>
      </div>
    </div>
  );
}
