'use client';

import React, { useState } from 'react';
import { Store, X, RefreshCw } from 'lucide-react';

interface CreateTenantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (message: string) => void;
}

export function CreateTenantModal({ isOpen, onClose, onSuccess }: CreateTenantModalProps) {
  const [modalLoading, setModalLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [modalForm, setModalForm] = useState({
    businessName: '',
    name: '',
    email: '',
    password: 'password123',
    phone: '',
    address: '',
    isTrial: true,
    trialDays: 14,
    planCode: 'pro',
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setModalLoading(true);
    setErrorMsg(null);
    try {
      const res = await fetch('/api/admin/cafes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(modalForm),
      });
      const data = await res.json();
      if (res.ok) {
        onSuccess(data.message || 'Akun demo/tenant berhasil dibuat');
        onClose();
      } else {
        setErrorMsg(data.message || 'Gagal membuat tenant');
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Terjadi kesalahan jaringan';
      setErrorMsg(msg);
    } finally {
      setModalLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-2xl max-w-lg w-full overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-2">
            <Store size={20} className="text-blue-600 dark:text-blue-400" />
            <h3 className="font-bold text-base text-gray-900 dark:text-white">Tambah Akun Demo / Tenant Baru</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {errorMsg && (
          <div className="mx-6 mt-4 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-6 space-y-3">
          <div>
            <label className="block text-xs font-semibold mb-1">Nama Kafe / Bisnis *</label>
            <input
              type="text"
              required
              placeholder="Contoh: Kopi Senja Mandiri"
              value={modalForm.businessName}
              onChange={(e) => setModalForm({ ...modalForm, businessName: e.target.value })}
              className="w-full px-3 py-2 text-xs rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold mb-1">Nama Pemilik / PIC *</label>
              <input
                type="text"
                required
                placeholder="Budi Santoso"
                value={modalForm.name}
                onChange={(e) => setModalForm({ ...modalForm, name: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1">No. WhatsApp / HP</label>
              <input
                type="text"
                placeholder="08123456789"
                value={modalForm.phone}
                onChange={(e) => setModalForm({ ...modalForm, phone: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold mb-1">Email Login POS *</label>
              <input
                type="email"
                required
                placeholder="owner@kafe.com"
                value={modalForm.email}
                onChange={(e) => setModalForm({ ...modalForm, email: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1">Password Awal *</label>
              <input
                type="text"
                required
                placeholder="password123"
                value={modalForm.password}
                onChange={(e) => setModalForm({ ...modalForm, password: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 font-mono"
              />
            </div>
          </div>

          <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 space-y-2.5">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-gray-800 dark:text-gray-200 block">Tipe Akun:</span>
                <span className="text-[11px] text-gray-500">Demo trial atau tenant aktif resmi</span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setModalForm({ ...modalForm, isTrial: true })}
                  className={`px-2.5 py-1 text-xs rounded-lg font-semibold transition-all ${
                    modalForm.isTrial
                      ? 'bg-purple-600 text-white shadow-sm'
                      : 'bg-white dark:bg-gray-800 text-gray-600 border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  Demo (Trial)
                </button>
                <button
                  type="button"
                  onClick={() => setModalForm({ ...modalForm, isTrial: false })}
                  className={`px-2.5 py-1 text-xs rounded-lg font-semibold transition-all ${
                    !modalForm.isTrial
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-white dark:bg-gray-800 text-gray-600 border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  Tenant Resmi
                </button>
              </div>
            </div>

            {modalForm.isTrial && (
              <div className="flex items-center justify-between pt-2 border-t border-gray-200/60 dark:border-gray-700/60">
                <span className="text-xs font-semibold text-purple-700 dark:text-purple-300">
                  Batas Akses Trial:
                </span>
                <select
                  value={modalForm.trialDays}
                  onChange={(e) => setModalForm({ ...modalForm, trialDays: Number(e.target.value) })}
                  className="px-2.5 py-1 text-xs rounded-lg bg-white dark:bg-gray-800 border border-purple-200 dark:border-purple-700 text-purple-900 dark:text-purple-200 font-bold focus:outline-none"
                >
                  <option value={7}>7 Hari</option>
                  <option value={14}>14 Hari (Standar)</option>
                  <option value={30}>30 Hari (1 Bulan)</option>
                  <option value={60}>60 Hari</option>
                </select>
              </div>
            )}

            {!modalForm.isTrial && (
              <div className="flex items-center justify-between pt-2 border-t border-gray-200/60 dark:border-gray-700/60">
                <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                  Paket Langganan:
                </span>
                <select
                  value={modalForm.planCode}
                  onChange={(e) => setModalForm({ ...modalForm, planCode: e.target.value })}
                  className="px-2.5 py-1 text-xs rounded-lg bg-white dark:bg-gray-800 border border-emerald-200 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200 font-bold focus:outline-none"
                >
                  <option value="starter">Starter POS (Rp 79rb/bln)</option>
                  <option value="pro">Pro Bisnis (Rp 149rb/bln)</option>
                  <option value="enterprise">Enterprise (Rp 299rb/bln)</option>
                </select>
              </div>
            )}
          </div>

          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={modalLoading}
              className="inline-flex items-center gap-1.5 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/20 active:scale-95 transition-all disabled:opacity-50"
            >
              {modalLoading && <RefreshCw size={12} className="animate-spin" />}
              {modalForm.isTrial ? 'Buat Akun Demo' : 'Buat Tenant Resmi'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
