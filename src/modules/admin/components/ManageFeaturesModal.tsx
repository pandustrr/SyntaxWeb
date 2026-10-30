'use client';

import { useState, useEffect } from 'react';
import { SlidersHorizontal, Check, RefreshCw, X, ShieldAlert, Crown, Briefcase, ShoppingBag, UtensilsCrossed } from 'lucide-react';

type RoleKey = 'owner' | 'manager' | 'cashier' | 'kitchen';

interface CafeItem {
  id: number;
  name: string;
  enableDashboard?: boolean;
  enablePos?: boolean;
  enableTables?: boolean;
  enableKds?: boolean;
  enableProducts?: boolean;
  enableInventory?: boolean;
  enableCustomers?: boolean;
  enablePromotions?: boolean;
  enableEmployees?: boolean;
  attendanceMode?: string;
  enableReports?: boolean;
  enableSettings?: boolean;
  rolePermissions?: string | null;
  slovvBaseUrl?: string;
  slovvUsername?: string;
}

interface ManageFeaturesModalProps {
  isOpen: boolean;
  onClose: () => void;
  cafe: CafeItem | null;
  onSuccess: () => void;
}

const ALL_12_MODULES = [
  'dashboard', 'pos', 'tables', 'kds', 'products', 'inventory',
  'customers', 'promotions', 'employees', 'attendance', 'reports', 'settings'
];

const DEFAULT_ROLE_PERMS: Record<RoleKey, string[]> = {
  owner: [...ALL_12_MODULES],
  manager: ['dashboard', 'pos', 'tables', 'kds', 'products', 'inventory', 'customers', 'promotions', 'employees', 'attendance', 'reports'],
  cashier: ['pos', 'tables', 'kds', 'customers', 'promotions', 'employees'],
  kitchen: ['kds', 'inventory'],
};

const ROLES_LIST = [
  { key: 'owner' as RoleKey, label: 'Owner', desc: 'Semua Fitur', icon: Crown },
  { key: 'manager' as RoleKey, label: 'Manager', desc: 'Supervisor', icon: Briefcase },
  { key: 'cashier' as RoleKey, label: 'Kasir', desc: 'Staf Depan', icon: ShoppingBag },
  { key: 'kitchen' as RoleKey, label: 'Dapur', desc: 'Kru / Barista', icon: UtensilsCrossed },
];

export function ManageFeaturesModal({ isOpen, onClose, cafe, onSuccess }: ManageFeaturesModalProps) {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Topbar Role Tab Aktif
  const [activeRole, setActiveRole] = useState<RoleKey>('owner');

  // Matrix Izin Fitur per Role
  const [permsByRole, setPermsByRole] = useState<Record<RoleKey, string[]>>({
    owner: [...DEFAULT_ROLE_PERMS.owner],
    manager: [...DEFAULT_ROLE_PERMS.manager],
    cashier: [...DEFAULT_ROLE_PERMS.cashier],
    kitchen: [...DEFAULT_ROLE_PERMS.kitchen],
  });

  const [attendanceMode, setAttendanceMode] = useState('disabled');
  const [slovvBaseUrl, setSlovvBaseUrl] = useState('https://myabsensislovv.my.id');
  const [slovvUsername, setSlovvUsername] = useState('admin');
  const [slovvPassword, setSlovvPassword] = useState('');

  useEffect(() => {
    if (cafe) {
      setActiveRole('owner');
      setAttendanceMode(cafe.attendanceMode ?? 'disabled');
      setSlovvBaseUrl(cafe.slovvBaseUrl || 'https://myabsensislovv.my.id');
      setSlovvUsername(cafe.slovvUsername || 'admin');
      setSlovvPassword('');
      setErrorMsg(null);

      // Muat matrix permissions dari database kafe
      let loaded: any = null;
      if (cafe.rolePermissions) {
        try {
          loaded = JSON.parse(cafe.rolePermissions);
        } catch (_) {}
      }

      setPermsByRole({
        owner: Array.isArray(loaded?.owner) ? loaded.owner : [...DEFAULT_ROLE_PERMS.owner],
        manager: Array.isArray(loaded?.manager) ? loaded.manager : [...DEFAULT_ROLE_PERMS.manager],
        cashier: Array.isArray(loaded?.cashier) ? loaded.cashier : [...DEFAULT_ROLE_PERMS.cashier],
        kitchen: Array.isArray(loaded?.kitchen) ? loaded.kitchen : [...DEFAULT_ROLE_PERMS.kitchen],
      });
    }
  }, [cafe]);

  if (!isOpen || !cafe) return null;

  const togglePerm = (moduleKey: string, checked: boolean) => {
    setPermsByRole((prev) => {
      const curList = prev[activeRole] || [];
      const updated = checked
        ? Array.from(new Set([...curList, moduleKey]))
        : curList.filter((k) => k !== moduleKey);
      return { ...prev, [activeRole]: updated };
    });
  };

  const setAllForActiveRole = (selectAll: boolean) => {
    setPermsByRole((prev) => ({
      ...prev,
      [activeRole]: selectAll ? [...ALL_12_MODULES] : [],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    // Kumpulkan seluruh modul yang aktif di toko (gabungan dari semua role)
    const allActive = new Set([
      ...(permsByRole.owner || []),
      ...(permsByRole.manager || []),
      ...(permsByRole.cashier || []),
      ...(permsByRole.kitchen || []),
    ]);

    try {
      const res = await fetch(`/api/admin/cafes/${cafe.id}/features`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          rolePermissions: permsByRole,
          enableDashboard: allActive.has('dashboard'),
          enablePos: allActive.has('pos'),
          enableTables: allActive.has('tables'),
          enableKds: allActive.has('kds'),
          enableProducts: allActive.has('products'),
          enableInventory: allActive.has('inventory'),
          enableCustomers: allActive.has('customers'),
          enablePromotions: allActive.has('promotions'),
          enableEmployees: allActive.has('employees'),
          enableReports: allActive.has('reports'),
          enableSettings: allActive.has('settings'),
          attendanceMode,
          slovvBaseUrl,
          slovvUsername,
          ...(slovvPassword ? { slovvPassword } : {}),
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Gagal menyimpan izin fitur');

      onSuccess();
      onClose();
    } catch (err: any) {
      setErrorMsg(err.message || 'Terjadi kesalahan sistem');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-xl">
              <SlidersHorizontal size={18} />
            </div>
            <div>
              <h3 className="font-bold text-base text-gray-900 dark:text-white">Izin Fitur & Role</h3>
              <p className="text-xs text-gray-500">{cafe.name}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 text-gray-400 hover:text-gray-600 rounded-lg">
            <X size={18} />
          </button>
        </div>

        {/* Topbar Role Tabs */}
        <div className="grid grid-cols-4 bg-gray-50 dark:bg-gray-800/60 border-b border-gray-100 dark:border-gray-800 p-2 gap-1.5">
          {ROLES_LIST.map((r) => {
            const Icon = r.icon;
            const active = activeRole === r.key;
            return (
              <button
                key={r.key}
                type="button"
                onClick={() => setActiveRole(r.key)}
                className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all ${
                  active
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200/60 dark:hover:bg-gray-700/50'
                }`}
              >
                <div className="flex items-center gap-1.5 font-bold text-xs">
                  <Icon size={14} />
                  <span>{r.label}</span>
                </div>
                <span className={`text-[10px] mt-0.5 ${active ? 'text-blue-100' : 'text-gray-400'}`}>
                  {r.desc}
                </span>
              </button>
            );
          })}
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {errorMsg && (
            <div className="p-3 text-xs bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300 rounded-xl border border-red-100 flex items-center gap-2">
              <ShieldAlert size={16} className="shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Subheader Role yang sedang aktif */}
          <div className="flex items-center justify-between pb-1 border-b border-gray-100 dark:border-gray-800">
            <div>
              <span className="text-xs font-bold text-gray-800 dark:text-gray-200">
                Hak Akses Role:{' '}
                <span className="text-blue-600 dark:text-blue-400 uppercase font-black">
                  {activeRole}
                </span>
              </span>
              <p className="text-[11px] text-gray-400">
                Pilih modul yang diizinkan untuk peran ini
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setAllForActiveRole(true)}
                className="text-[10px] font-bold text-blue-600 hover:underline px-2 py-1 bg-blue-50 dark:bg-blue-950/40 rounded-lg"
              >
                Centang Semua
              </button>
              <button
                type="button"
                onClick={() => setAllForActiveRole(false)}
                className="text-[10px] font-bold text-gray-500 hover:underline px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg"
              >
                Kosongkan
              </button>
            </div>
          </div>
          {/* 1. Modul Inti & Kasir */}
          <div className="space-y-2">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
              1. Modul Inti & Kasir
            </label>
            <div className="space-y-1.5 bg-gray-50 dark:bg-gray-800/40 p-3 rounded-xl border border-gray-100 dark:border-gray-800">
              <ToggleRow label="1. Dashboard Analitik" desc="Ringkasan omzet & grafik tren toko" checked={(permsByRole[activeRole] || []).includes('dashboard')} onChange={(v) => togglePerm('dashboard', v)} />
              <ToggleRow label="2. Kasir POS & Transaksi" desc="Katalog, keranjang & pembayaran" checked={(permsByRole[activeRole] || []).includes('pos')} onChange={(v) => togglePerm('pos', v)} />
              <ToggleRow label="3. Produk Menu & Kategori" desc="Katalog menu, harga & varian" checked={(permsByRole[activeRole] || []).includes('products')} onChange={(v) => togglePerm('products', v)} />
              <ToggleRow label="4. Laporan Bisnis" desc="Rekap omzet & riwayat transaksi" checked={(permsByRole[activeRole] || []).includes('reports')} onChange={(v) => togglePerm('reports', v)} />
              <ToggleRow label="5. Pengaturan Toko" desc="Profil kafe & konfigurasi struk" checked={(permsByRole[activeRole] || []).includes('settings')} onChange={(v) => togglePerm('settings', v)} />
            </div>
          </div>

          {/* 2. Modul Operasional Resto / F&B */}
          <div className="space-y-2 pt-1">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
              2. Operasional Resto & Dapur
            </label>
            <div className="space-y-1.5 bg-gray-50 dark:bg-gray-800/40 p-3 rounded-xl border border-gray-100 dark:border-gray-800">
              <ToggleRow label="6. Meja Dine-in" desc="Denah & nomor meja restoran" checked={(permsByRole[activeRole] || []).includes('tables')} onChange={(v) => togglePerm('tables', v)} />
              <ToggleRow label="7. Dapur (KDS)" desc="Layar antrean pesanan masak dapur" checked={(permsByRole[activeRole] || []).includes('kds')} onChange={(v) => togglePerm('kds', v)} />
              <ToggleRow label="8. Bahan & Resep (BOM)" desc="Stok bahan baku & HPP per menu" checked={(permsByRole[activeRole] || []).includes('inventory')} onChange={(v) => togglePerm('inventory', v)} />
            </div>
          </div>

          {/* 3. Modul Pelanggan & Pemasaran */}
          <div className="space-y-2 pt-1">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
              3. Pelanggan & Promosi
            </label>
            <div className="space-y-1.5 bg-gray-50 dark:bg-gray-800/40 p-3 rounded-xl border border-gray-100 dark:border-gray-800">
              <ToggleRow label="9. CRM & Pelanggan" desc="Database member & poin loyalitas" checked={(permsByRole[activeRole] || []).includes('customers')} onChange={(v) => togglePerm('customers', v)} />
              <ToggleRow label="10. Voucher & Promo" desc="Diskon persen & kupon potongan" checked={(permsByRole[activeRole] || []).includes('promotions')} onChange={(v) => togglePerm('promotions', v)} />
            </div>
          </div>

          {/* 4. Modul Karyawan & Absensi */}
          <div className="space-y-2 pt-1">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
              4. SDM & Penggajian Staf
            </label>
            <div className="space-y-2 bg-gray-50 dark:bg-gray-800/40 p-3 rounded-xl border border-gray-100 dark:border-gray-800">
              <ToggleRow label="11. Karyawan & Shift" desc="Akun staf kasir & manajemen shift" checked={(permsByRole[activeRole] || []).includes('employees')} onChange={(v) => togglePerm('employees', v)} />
              <ToggleRow label="12. Akses Modul Absensi & Gaji" desc="Izin melihat absensi & rekap gaji staf" checked={(permsByRole[activeRole] || []).includes('attendance')} onChange={(v) => togglePerm('attendance', v)} />
            </div>
          </div>

          {/* Pengaturan Global Mode Absensi Outlet */}
          <div className="space-y-2 pt-2 border-t border-gray-200/60 dark:border-gray-700/60">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
              Mode Sumber Data Absensi Outlet
            </label>
            <div className="grid grid-cols-3 gap-2">
              <ModeRadio id="mode-dis" value="disabled" current={attendanceMode} label="Nonaktif" desc="Tanpa modul absen" onChange={setAttendanceMode} />
              <ModeRadio id="mode-int" value="internal" current={attendanceMode} label="Internal POS" desc="Bawaan kasir" onChange={setAttendanceMode} />
              <ModeRadio id="mode-slv" value="slovv" current={attendanceMode} label="Web SLOVV" desc="Khusus Kafe Slovv" onChange={setAttendanceMode} />
            </div>
          </div>

          {attendanceMode === 'slovv' && (
            <div className="p-3.5 bg-blue-50/60 dark:bg-blue-950/30 rounded-xl border border-blue-100 dark:border-blue-900/40 space-y-2 text-xs">
              <p className="font-semibold text-blue-900 dark:text-blue-300">Konfigurasi Sinkronisasi Slovv</p>
              <div>
                <label className="text-[11px] text-gray-600 dark:text-gray-400">Target Web URL</label>
                <input
                  type="text"
                  value={slovvBaseUrl}
                  onChange={(e) => setSlovvBaseUrl(e.target.value)}
                  className="w-full mt-1 px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-xs"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] text-gray-600 dark:text-gray-400">Admin Username</label>
                  <input
                    type="text"
                    value={slovvUsername}
                    onChange={(e) => setSlovvUsername(e.target.value)}
                    className="w-full mt-1 px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-gray-600 dark:text-gray-400">Admin Password</label>
                  <input
                    type="password"
                    placeholder="achmadrizal123"
                    value={slovvPassword}
                    onChange={(e) => setSlovvPassword(e.target.value)}
                    className="w-full mt-1 px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-xs"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center justify-end gap-2 pt-3 border-t border-gray-100 dark:border-gray-800">
            <button type="button" onClick={onClose} className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-xl">
              Batal
            </button>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-md active:scale-95 disabled:opacity-50"
            >
              {loading ? <RefreshCw size={14} className="animate-spin" /> : <Check size={14} />}
              Simpan Izin Fitur
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

function ToggleRow({ label, desc, checked, onChange }: { label: string; desc: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex items-center justify-between p-1.5 hover:bg-white/60 dark:hover:bg-gray-800/60 rounded-lg cursor-pointer">
      <div>
        <div className="text-xs font-semibold text-gray-800 dark:text-gray-200">{label}</div>
        <div className="text-[11px] text-gray-400">{desc}</div>
      </div>
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="w-4 h-4 rounded text-blue-600 cursor-pointer" />
    </label>
  );
}

function ModeRadio({ id, value, current, label, desc, onChange }: { id: string; value: string; current: string; label: string; desc: string; onChange: (v: string) => void }) {
  const active = current === value;
  return (
    <label
      htmlFor={id}
      className={`p-2.5 rounded-xl border cursor-pointer text-center transition-all ${
        active
          ? 'bg-blue-50/80 border-blue-500 text-blue-900 dark:bg-blue-950/40 dark:border-blue-400 dark:text-blue-200 shadow-sm'
          : 'bg-white border-gray-200 text-gray-600 dark:bg-gray-800 dark:border-gray-700 hover:border-gray-300'
      }`}
    >
      <input type="radio" id={id} name="attMode" value={value} checked={active} onChange={() => onChange(value)} className="sr-only" />
      <div className="text-xs font-bold">{label}</div>
      <div className="text-[10px] text-gray-400 mt-0.5 leading-tight">{desc}</div>
    </label>
  );
}

