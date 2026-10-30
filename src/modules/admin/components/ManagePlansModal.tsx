'use client';

import React, { useState, useEffect } from 'react';
import { Package, X, RefreshCw, Check, Edit2 } from 'lucide-react';

export interface PlanItem {
  id: number;
  name: string;
  code: string;
  price: number;
  period: string;
  description: string | null;
  badge: string | null;
  isPopular: boolean;
  isActive: boolean;
  benefits: string[];
}

interface ManagePlansModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (message: string) => void;
}

export function ManagePlansModal({ isOpen, onClose, onSuccess }: ManagePlansModalProps) {
  const [plans, setPlans] = useState<PlanItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingPlanId, setEditingPlanId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState({
    name: '',
    price: 0,
    badge: '',
    isPopular: false,
    benefitsText: '',
  });
  const [saving, setSaving] = useState(false);

  const fetchPlans = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/plans');
      if (res.ok) {
        const json = await res.json();
        setPlans(json.data || []);
      }
    } catch {
      // ignore
    }
    setLoading(false);
  };

  useEffect(() => {
    if (isOpen) {
      fetchPlans();
      setEditingPlanId(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const startEdit = (p: PlanItem) => {
    setEditingPlanId(p.id);
    setEditForm({
      name: p.name,
      price: p.price,
      badge: p.badge || '',
      isPopular: p.isPopular,
      benefitsText: p.benefits.join('\n'),
    });
  };

  const handleSaveEdit = async (planId: number) => {
    setSaving(true);
    try {
      const benefitsArray = editForm.benefitsText
        .split('\n')
        .map((s) => s.trim())
        .filter((s) => s.length > 0);

      const res = await fetch(`/api/admin/plans/${planId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: editForm.name,
          price: Number(editForm.price),
          badge: editForm.badge || null,
          isPopular: editForm.isPopular,
          benefits: benefitsArray,
        }),
      });

      if (res.ok) {
        onSuccess('Paket langganan berhasil disimpan!');
        setEditingPlanId(null);
        await fetchPlans();
      }
    } catch {
      // ignore
    }
    setSaving(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-xl">
              <Package size={20} />
            </div>
            <div>
              <h3 className="font-bold text-base text-gray-900 dark:text-white">Kelola Paket Langganan & Benefit</h3>
              <p className="text-xs text-gray-500">Ubah harga, nama paket, dan daftar benefit yang muncul di registrasi POS.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X size={18} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto space-y-4">
          {loading ? (
            <div className="py-12 flex flex-col items-center justify-center gap-2 text-gray-400 text-xs">
              <RefreshCw size={20} className="animate-spin text-blue-500" />
              <span>Memuat data paket...</span>
            </div>
          ) : (
            plans.map((p) => {
              const isEditing = editingPlanId === p.id;
              if (isEditing) {
                return (
                  <div key={p.id} className="p-4 rounded-xl border-2 border-blue-500 bg-blue-50/20 dark:bg-blue-950/10 space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold mb-1">Nama Paket</label>
                        <input
                          type="text"
                          value={editForm.name}
                          onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                          className="w-full px-3 py-1.5 text-xs rounded-lg border bg-white dark:bg-gray-800"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold mb-1">Harga (Rp / bulan)</label>
                        <input
                          type="number"
                          value={editForm.price}
                          onChange={(e) => setEditForm({ ...editForm, price: Number(e.target.value) })}
                          className="w-full px-3 py-1.5 text-xs rounded-lg border bg-white dark:bg-gray-800"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold mb-1">Badge Teks</label>
                        <input
                          type="text"
                          value={editForm.badge}
                          onChange={(e) => setEditForm({ ...editForm, badge: e.target.value })}
                          className="w-full px-3 py-1.5 text-xs rounded-lg border bg-white dark:bg-gray-800"
                        />
                      </div>
                      <div className="pt-5">
                        <label className="inline-flex items-center gap-2 cursor-pointer text-xs font-semibold">
                          <input
                            type="checkbox"
                            checked={editForm.isPopular}
                            onChange={(e) => setEditForm({ ...editForm, isPopular: e.target.checked })}
                            className="rounded text-blue-600"
                          />
                          Paling Populer
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold mb-1">Daftar Benefit (1 per baris):</label>
                      <textarea
                        rows={4}
                        value={editForm.benefitsText}
                        onChange={(e) => setEditForm({ ...editForm, benefitsText: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg border bg-white dark:bg-gray-800 font-mono"
                      />
                    </div>
                    <div className="flex justify-end gap-2">
                      <button onClick={() => setEditingPlanId(null)} className="px-3 py-1 text-xs">Batal</button>
                      <button
                        onClick={() => handleSaveEdit(p.id)}
                        disabled={saving}
                        className="px-4 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-lg"
                      >
                        {saving ? 'Menyimpan...' : 'Simpan'}
                      </button>
                    </div>
                  </div>
                );
              }
              return (
                <div key={p.id} className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 flex justify-between gap-4">
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-sm">{p.name}</h4>
                      {p.badge && <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">{p.badge}</span>}
                    </div>
                    <div className="text-sm font-black">Rp {p.price.toLocaleString('id-ID')} / {p.period}</div>
                    <ul className="grid grid-cols-2 gap-1 text-[11px] text-gray-600 dark:text-gray-300 pt-1">
                      {p.benefits.map((b, i) => (
                        <li key={i} className="flex items-center gap-1"><Check size={12} className="text-emerald-500 shrink-0" />{b}</li>
                      ))}
                    </ul>
                  </div>
                  <button onClick={() => startEdit(p)} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs font-semibold h-fit">
                    <Edit2 size={12} className="inline mr-1" /> Ubah
                  </button>
                </div>
              );
            })
          )}
        </div>
        <div className="px-6 py-3 bg-gray-50 dark:bg-gray-800/50 border-t flex justify-end">
          <button onClick={onClose} className="px-4 py-1.5 bg-gray-900 text-white rounded-xl text-xs font-bold">Tutup</button>
        </div>
      </div>
    </div>
  );
}
