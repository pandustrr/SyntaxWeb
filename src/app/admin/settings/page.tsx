'use client';

import React, { useState, useEffect } from 'react';
import { Settings, ShieldCheck, Save, RefreshCw, Sparkles, Server } from 'lucide-react';

export default function AdminSettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [trialDays, setTrialDays] = useState(14);
  const [appName, setAppName] = useState('SyntaxPOS');
  const [supportPhone, setSupportPhone] = useState('081234567890');
  const [feedback, setFeedback] = useState<string | null>(null);

  const fetchConfig = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/platform-config');
      if (res.ok) {
        const json = await res.json();
        if (json.data?.default_trial_days) setTrialDays(Number(json.data.default_trial_days));
        if (json.data?.app_name) setAppName(json.data.app_name);
        if (json.data?.support_phone) setSupportPhone(json.data.support_phone);
      }
    } catch (_) {}
    setLoading(false);
  };

  useEffect(() => {
    fetchConfig();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await fetch('/api/admin/platform-config', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: 'default_trial_days', value: String(trialDays) }),
      });
      await fetch('/api/admin/platform-config', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: 'app_name', value: appName }),
      });
      await fetch('/api/admin/platform-config', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: 'support_phone', value: supportPhone }),
      });
      setFeedback('Pengaturan berhasil disimpan!');
    } catch (_) {
      setFeedback('Gagal menyimpan.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
            <Settings className="text-blue-600" size={24} /> Pengaturan SuperAdmin
          </h1>
          <p className="text-xs text-gray-500 mt-1">Konfigurasi platform multi-tenant SyntaxWeb.</p>
        </div>
        <button onClick={fetchConfig} disabled={loading} className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <RefreshCw size={13} className={loading ? 'animate-spin' : ''} />
        </button>
      </div>

      {feedback && <div className="p-3 rounded-xl text-xs bg-emerald-50 text-emerald-800 border border-emerald-200">{feedback}</div>}

      <form onSubmit={handleSave} className="space-y-4 text-xs">
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 space-y-3">
          <div className="flex items-center gap-2 font-bold text-sm text-gray-900 dark:text-white border-b pb-2">
            <Sparkles size={16} className="text-purple-600" /> Lisensi Masa Trial
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold mb-1">Durasi Default Trial (Hari)</label>
              <select value={trialDays} onChange={(e) => setTrialDays(Number(e.target.value))} className="w-full px-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border">
                <option value={7}>7 Hari</option>
                <option value={14}>14 Hari</option>
                <option value={30}>30 Hari</option>
                <option value={60}>60 Hari</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1">Nama Platform</label>
              <input type="text" value={appName} onChange={(e) => setAppName(e.target.value)} className="w-full px-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Hotline WhatsApp Support</label>
              <input type="text" value={supportPhone} onChange={(e) => setSupportPhone(e.target.value)} className="w-full px-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border" />
            </div>
          </div>
          <div className="pt-2 flex justify-end">
            <button type="submit" disabled={saving} className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5">
              <Save size={14} /> {saving ? 'Menyimpan...' : 'Simpan'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}