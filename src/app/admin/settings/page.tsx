'use client';

import { useState, useEffect, useCallback } from 'react';
import { 
  Settings as SettingsIcon, 
  Save, 
  RefreshCw, 
  ShieldCheck, 
  Clock, 
  Phone, 
  Mail, 
  Server, 
  CheckCircle2, 
  AlertCircle,
  Sparkles
} from 'lucide-react';

export default function AdminSettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Platform Configs (Gabungan Diki & Pandu)
  const [trialDays, setTrialDays] = useState(14);
  const [appName, setAppName] = useState('SyntaxPOS');
  const [supportWa, setSupportWa] = useState('6281234567890');
  const [supportEmail, setSupportEmail] = useState('support@syntaxweb.id');
  const [appVersion, setAppVersion] = useState('1.0.0');

  // Password Update
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordLoading, setPasswordLoading] = useState(false);

  const fetchConfigs = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/platform-config');
      if (res.ok) {
        const d = await res.json();
        const cfg = d.data || {};
        if (cfg.default_trial_days) setTrialDays(Number(cfg.default_trial_days));
        if (cfg.app_name) setAppName(cfg.app_name);
        if (cfg.support_whatsapp || cfg.support_phone) setSupportWa(cfg.support_whatsapp || cfg.support_phone);
        if (cfg.support_email) setSupportEmail(cfg.support_email);
        if (cfg.app_version) setAppVersion(cfg.app_version);
      }
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchConfigs();
  }, [fetchConfigs]);

  const handleSaveConfig = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setFeedback(null);

    try {
      const updates = [
        { key: 'default_trial_days', value: String(trialDays) },
        { key: 'app_name', value: appName },
        { key: 'support_phone', value: supportWa },
        { key: 'support_whatsapp', value: supportWa },
        { key: 'support_email', value: supportEmail },
        { key: 'app_version', value: appVersion },
      ];

      for (const item of updates) {
        await fetch('/api/admin/platform-config', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(item),
        });
      }

      setFeedback({ type: 'success', text: 'Pengaturan platform berhasil disimpan!' });
    } catch (err: any) {
      setFeedback({ type: 'error', text: err.message || 'Gagal menyimpan pengaturan' });
    } finally {
      setSaving(false);
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentPassword || !newPassword) {
      setFeedback({ type: 'error', text: 'Semua kolom password wajib diisi' });
      return;
    }
    if (newPassword !== confirmPassword) {
      setFeedback({ type: 'error', text: 'Konfirmasi password baru tidak cocok' });
      return;
    }

    setPasswordLoading(true);
    setFeedback(null);
    try {
      const res = await fetch('/api/admin/auth', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentPassword, newPassword }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Gagal memperbarui password');

      setFeedback({ type: 'success', text: 'Password SuperAdmin berhasil diperbarui!' });
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err: any) {
      setFeedback({ type: 'error', text: err.message || 'Gagal memperbarui password' });
    } finally {
      setPasswordLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white flex items-center gap-2.5">
          <SettingsIcon className="text-blue-600" size={26} />
          Pengaturan Platform
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Konfigurasi global platform SaaS SyntaxWeb & parameter POS
        </p>
      </div>

      {feedback && (
        <div className={`p-4 rounded-xl text-xs font-semibold flex items-center gap-2 ${feedback.type === 'success' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
          {feedback.type === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
          <span>{feedback.text}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <form onSubmit={handleSaveConfig} className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-5">
            <h2 className="text-base font-bold text-gray-900 dark:text-white pb-3 border-b border-gray-100 dark:border-gray-800 flex items-center gap-2">
              <Server size={18} className="text-blue-600" />
              Parameter Umum Platform
            </h2>

            {loading ? (
              <div className="py-12 flex justify-center">
                <RefreshCw size={24} className="animate-spin text-blue-500" />
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                      <Clock size={14} className="text-gray-400" />
                      Default Masa Trial (Hari)
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={90}
                      value={trialDays}
                      onChange={(e) => setTrialDays(Number(e.target.value))}
                      className="w-full mt-1.5 px-3.5 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-[10px] text-gray-400 mt-1 block">Durasi gratis saat outlet baru mendaftar</span>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                      <ShieldCheck size={14} className="text-gray-400" />
                      Versi Rilis POS
                    </label>
                    <input
                      type="text"
                      value={appVersion}
                      onChange={(e) => setAppVersion(e.target.value)}
                      className="w-full mt-1.5 px-3.5 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-[10px] text-gray-400 mt-1 block">Versi aplikasi Flutter yang sedang rilis</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                      <Phone size={14} className="text-gray-400" />
                      WhatsApp Bantuan / Sales
                    </label>
                    <input
                      type="text"
                      value={supportWa}
                      onChange={(e) => setSupportWa(e.target.value)}
                      className="w-full mt-1.5 px-3.5 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-[10px] text-gray-400 mt-1 block">Format 628xxx untuk tautan WA</span>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                      <Mail size={14} className="text-gray-400" />
                      Email Dukungan
                    </label>
                    <input
                      type="email"
                      value={supportEmail}
                      onChange={(e) => setSupportEmail(e.target.value)}
                      className="w-full mt-1.5 px-3.5 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-[10px] text-gray-400 mt-1 block">Email resmi bantuan teknis tenant</span>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={saving}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md active:scale-95 transition-all disabled:opacity-50"
                  >
                    {saving ? <RefreshCw size={14} className="animate-spin" /> : <Save size={14} />}
                    Simpan Perubahan
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
        <div className="space-y-6">
          <form onSubmit={handlePasswordSubmit} className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-gray-900 dark:text-white pb-3 border-b border-gray-100 dark:border-gray-800 flex items-center gap-2">
              <ShieldCheck size={18} className="text-emerald-600" />
              Keamanan SuperAdmin
            </h2>

            <div>
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Password Saat Ini</label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full mt-1.5 px-3.5 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Password Baru</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Minimal 8 karakter"
                className="w-full mt-1.5 px-3.5 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Konfirmasi Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Ketik ulang password baru"
                className="w-full mt-1.5 px-3.5 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <button
              type="submit"
              disabled={passwordLoading}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 hover:bg-black text-white dark:bg-white dark:text-gray-900 rounded-xl text-xs font-bold shadow-md active:scale-95 transition-all disabled:opacity-50"
            >
              {passwordLoading && <RefreshCw size={14} className="animate-spin" />}
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
