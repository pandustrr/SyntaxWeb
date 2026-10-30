'use client';

import { useState, useEffect, useCallback } from 'react';
import { 
  Store, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Clock, 
  Search, 
  RefreshCw, 
  Users, 
  ShoppingBag, 
  Receipt, 
  MapPin, 
  Phone,
  Plus,
  Sparkles,
  X,
  Trash2,
  Package
} from 'lucide-react';
import { CreateTenantModal } from '@/modules/admin/components/CreateTenantModal';
import { ManagePlansModal } from '@/modules/admin/components/ManagePlansModal';

interface CafeOwner {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface CafeItem {
  id: number;
  name: string;
  slug: string;
  address: string | null;
  phone: string | null;
  status: string;
  isTrial?: boolean;
  trialEndsAt?: string | null;
  isActive: boolean;
  createdAt: string;
  owner: CafeOwner | null;
  userCount: number;
  orderCount: number;
  productCount: number;
}

interface StatusCounts {
  total: number;
  pending: number;
  active: number;
  suspended: number;
  rejected: number;
}

interface CafeRowProps {
  cafe: CafeItem;
  actionLoadingId: number | null;
  onUpdateStatus: (id: number, status: string) => void;
  onDeleteCafe: (id: number, name: string) => void;
  renderStatusBadge: (status: string, cafe?: CafeItem) => React.ReactNode;
}

function CafeRow({ cafe, actionLoadingId, onUpdateStatus, onDeleteCafe, renderStatusBadge }: CafeRowProps) {
  const isLoading = actionLoadingId === cafe.id;
  const formattedDate = new Date(cafe.createdAt).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-800/40 transition-colors">
      <td className="px-5 py-4">
        <div className="font-bold text-sm text-gray-900 dark:text-white">{cafe.name}</div>
        <div className="text-xs text-blue-600 dark:text-blue-400 font-mono mt-0.5">@{cafe.slug}</div>
        <div className="text-[11px] text-gray-400 mt-1">Daftar: {formattedDate}</div>
      </td>

      <td className="px-5 py-4">
        {cafe.owner ? (
          <div>
            <div className="text-xs font-semibold text-gray-800 dark:text-gray-200">{cafe.owner.name}</div>
            <div className="text-[11px] text-gray-500 dark:text-gray-400">{cafe.owner.email}</div>
            <span className="inline-block px-1.5 py-0.5 rounded text-[10px] bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-mono mt-1">
              {cafe.owner.role}
            </span>
          </div>
        ) : (
          <span className="text-xs text-gray-400 italic">Belum ada owner</span>
        )}
      </td>

      <td className="px-5 py-4 max-w-xs">
        {cafe.phone && (
          <div className="flex items-center gap-1.5 text-xs text-gray-700 dark:text-gray-300">
            <Phone size={12} className="text-gray-400 shrink-0" />
            <span>{cafe.phone}</span>
          </div>
        )}
        {cafe.address ? (
          <div className="flex items-start gap-1.5 text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2" title={cafe.address}>
            <MapPin size={12} className="text-gray-400 shrink-0 mt-0.5" />
            <span>{cafe.address}</span>
          </div>
        ) : (
          <div className="text-[11px] text-gray-400 italic mt-0.5">Alamat belum diatur</div>
        )}
      </td>

      <td className="px-5 py-4">
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
            <Users size={11} className="text-gray-400" />
            {cafe.userCount} Kasir
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
            <ShoppingBag size={11} className="text-gray-400" />
            {cafe.productCount} Menu
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
            <Receipt size={11} className="text-gray-400" />
            {cafe.orderCount} Order
          </span>
        </div>
      </td>

      <td className="px-5 py-4 whitespace-nowrap">{renderStatusBadge(cafe.status, cafe)}</td>

      <td className="px-5 py-4 text-right whitespace-nowrap">
        <div className="flex items-center justify-end gap-1.5">
          {cafe.status === 'PENDING_APPROVAL' && (
            <>
              <button
                onClick={() => onUpdateStatus(cafe.id, 'ACTIVE')}
                disabled={isLoading}
                className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold shadow-sm active:scale-95 transition-all disabled:opacity-50"
              >
                <CheckCircle2 size={13} />
                Setujui
              </button>
              <button
                onClick={() => onUpdateStatus(cafe.id, 'REJECTED')}
                disabled={isLoading}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-gray-100 hover:bg-red-50 text-red-600 rounded-lg text-xs font-semibold active:scale-95 transition-all disabled:opacity-50"
              >
                <XCircle size={13} />
                Tolak
              </button>
            </>
          )}

          {cafe.status === 'ACTIVE' && (
            <button
              onClick={() => onUpdateStatus(cafe.id, 'SUSPENDED')}
              disabled={isLoading}
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 rounded-lg text-xs font-semibold active:scale-95 transition-all disabled:opacity-50"
            >
              <AlertTriangle size={13} />
              Tangguhkan
            </button>
          )}

          {(cafe.status === 'SUSPENDED' || cafe.status === 'REJECTED') && (
            <button
              onClick={() => onUpdateStatus(cafe.id, 'ACTIVE')}
              disabled={isLoading}
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold shadow-sm active:scale-95 transition-all disabled:opacity-50"
            >
              <CheckCircle2 size={13} />
              Aktifkan Kembali
            </button>
          )}

          <button
            onClick={() => onDeleteCafe(cafe.id, cafe.name)}
            disabled={isLoading}
            title="Hapus Kafe"
            className="inline-flex items-center p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-lg text-xs font-semibold transition-all disabled:opacity-50"
          >
            <Trash2 size={14} />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default function AdminCafesPage() {
  const [cafes, setCafes] = useState<CafeItem[]>([]);
  const [counts, setCounts] = useState<StatusCounts>({
    total: 0,
    pending: 0,
    active: 0,
    suspended: 0,
    rejected: 0,
  });
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [actionLoadingId, setActionLoadingId] = useState<number | null>(null);
  const [feedbackMsg, setFeedbackMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showPlansModal, setShowPlansModal] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [modalForm, setModalForm] = useState({
    businessName: '',
    name: '',
    email: '',
    password: 'password123',
    phone: '',
    address: '',
    isTrial: true,
    trialDays: 14,
  });

  const handleCreateTenant = async (e: React.FormEvent) => {
    e.preventDefault();
    setModalLoading(true);
    setFeedbackMsg(null);
    try {
      const res = await fetch('/api/admin/cafes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(modalForm),
      });
      const data = await res.json();
      if (res.ok) {
        setFeedbackMsg({ type: 'success', text: data.message || 'Akun demo/tenant berhasil dibuat' });
        setShowAddModal(false);
        setModalForm({
          businessName: '',
          name: '',
          email: '',
          password: 'password123',
          phone: '',
          address: '',
          isTrial: true,
          trialDays: 14,
        });
        await fetchCafes();
      } else {
        setFeedbackMsg({ type: 'error', text: data.message || 'Gagal membuat tenant' });
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Terjadi kesalahan jaringan';
      setFeedbackMsg({ type: 'error', text: msg });
    } finally {
      setModalLoading(false);
    }
  };

  const [defaultTrialDays, setDefaultTrialDays] = useState(14);
  const [editingTrial, setEditingTrial] = useState(false);
  const [tempTrialDays, setTempTrialDays] = useState(14);

  const fetchConfig = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/platform-config');
      if (res.ok) {
        const d = await res.json();
        if (d.data?.default_trial_days) {
          setDefaultTrialDays(Number(d.data.default_trial_days));
          setTempTrialDays(Number(d.data.default_trial_days));
        }
      }
    } catch (_) {}
  }, []);

  const handleSaveTrialDays = async () => {
    try {
      const res = await fetch('/api/admin/platform-config', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: 'default_trial_days', value: String(tempTrialDays) }),
      });
      if (res.ok) {
        setDefaultTrialDays(tempTrialDays);
        setEditingTrial(false);
        setFeedbackMsg({ type: 'success', text: `Durasi uji coba gratis berhasil disetel ke ${tempTrialDays} hari!` });
      }
    } catch (_) {}
  };

  const fetchCafes = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (selectedTab !== 'ALL') params.set('status', selectedTab);
      if (searchQuery.trim()) params.set('q', searchQuery.trim());

      const res = await fetch(`/api/admin/cafes?${params.toString()}`);
      if (res.ok) {
        const data = await res.json();
        setCafes(data.cafes || []);
        if (data.counts) setCounts(data.counts);
      }
    } catch (err: unknown) {
      console.error('Failed to load cafes', err);
    } finally {
      setLoading(false);
    }
  }, [selectedTab, searchQuery]);

  useEffect(() => {
    fetchCafes();
    fetchConfig();
  }, [fetchCafes, fetchConfig]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchCafes();
  };

  const handleUpdateStatus = async (cafeId: number, newStatus: string) => {
    setActionLoadingId(cafeId);
    setFeedbackMsg(null);
    try {
      const res = await fetch(`/api/admin/cafes/${cafeId}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();

      if (res.ok) {
        setFeedbackMsg({ type: 'success', text: data.message || 'Status berhasil diperbarui' });
        await fetchCafes();
      } else {
        setFeedbackMsg({ type: 'error', text: data.message || 'Gagal mengubah status' });
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Terjadi kesalahan jaringan';
      setFeedbackMsg({ type: 'error', text: msg });
    } finally {
      setActionLoadingId(null);
    }
  };

  const handleDeleteCafe = async (cafeId: number, cafeName: string) => {
    const confirmed = window.confirm(
      `Hapus kafe "${cafeName}" secara permanen?\n\nPerhatian: Seluruh data kasir, produk, meja, pesanan, dan shift kafe ini akan dihapus permanen dari sistem.`
    );
    if (!confirmed) return;

    setActionLoadingId(cafeId);
    setFeedbackMsg(null);
    try {
      const res = await fetch(`/api/admin/cafes/${cafeId}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (res.ok) {
        setFeedbackMsg({ type: 'success', text: data.message || 'Kafe berhasil dihapus' });
        await fetchCafes();
      } else {
        setFeedbackMsg({ type: 'error', text: data.message || 'Gagal menghapus kafe' });
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Terjadi kesalahan jaringan';
      setFeedbackMsg({ type: 'error', text: msg });
    } finally {
      setActionLoadingId(null);
    }
  };

  const getStatusBadge = (status: string, cafe?: CafeItem) => {
    if (cafe?.isTrial && cafe.trialEndsAt) {
      const now = new Date().getTime();
      const end = new Date(cafe.trialEndsAt).getTime();
      const diffDays = Math.ceil((end - now) / (1000 * 60 * 60 * 24));

      if (diffDays <= 0) {
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300 border border-red-200 dark:border-red-700/50">
            <AlertTriangle size={13} />
            Trial Berakhir ({new Date(cafe.trialEndsAt).toLocaleDateString('id-ID')})
          </span>
        );
      }

      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300 border border-purple-200 dark:border-purple-700/50">
          <Sparkles size={13} className="text-purple-600 dark:text-purple-400" />
          Trial ({diffDays} hari)
        </span>
      );
    }

    switch (status) {
      case 'PENDING_APPROVAL':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 border border-amber-200 dark:border-amber-700/50">
            <Clock size={13} />
            Menunggu Verifikasi
          </span>
        );
      case 'ACTIVE':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700/50">
            <CheckCircle2 size={13} />
            Aktif (Disetujui)
          </span>
        );
      case 'SUSPENDED':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300 border border-red-200 dark:border-red-700/50">
            <AlertTriangle size={13} />
            Ditangguhkan
          </span>
        );
      case 'REJECTED':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
            <XCircle size={13} />
            Ditolak
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white flex items-center gap-3">
            <Store className="text-blue-600 dark:text-blue-400" size={32} />
            Persetujuan & Manajemen Kafe
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Kelola pendaftaran multi-tenant Syntax POS, verifikasi legalitas kafe, dan operasional tenant.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
          {/* Trial Duration Setting Pill */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 rounded-xl text-xs text-purple-900 dark:text-purple-200 shadow-sm">
            <Sparkles size={14} className="text-purple-600 dark:text-purple-400 shrink-0" />
            <span>Masa Trial: <strong>{defaultTrialDays} Hari</strong></span>
            {editingTrial ? (
              <div className="flex items-center gap-1.5 ml-1">
                <select
                  value={tempTrialDays}
                  onChange={(e) => setTempTrialDays(Number(e.target.value))}
                  className="px-2 py-0.5 rounded bg-white dark:bg-gray-800 border border-purple-300 dark:border-purple-600 text-xs font-bold"
                >
                  <option value={7}>7 Hari</option>
                  <option value={14}>14 Hari</option>
                  <option value={30}>30 Hari</option>
                  <option value={60}>60 Hari</option>
                </select>
                <button
                  onClick={handleSaveTrialDays}
                  className="px-2 py-0.5 bg-purple-600 hover:bg-purple-700 text-white rounded text-[11px] font-bold"
                >
                  Simpan
                </button>
                <button
                  onClick={() => setEditingTrial(false)}
                  className="text-gray-400 hover:text-gray-600 text-xs"
                >
                  ✕
                </button>
              </div>
            ) : (
              <button
                onClick={() => setEditingTrial(true)}
                className="ml-1 text-[11px] text-purple-700 dark:text-purple-300 underline font-semibold hover:text-purple-900"
              >
                Ubah
              </button>
            )}
          </div>

          <button
            onClick={() => setShowPlansModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold shadow-sm active:scale-95 transition-all"
          >
            <Package size={16} />
            Kelola Paket Langganan
          </button>

          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold shadow-sm active:scale-95 transition-all"
          >
            <Plus size={16} />
            + Tambah Akun Demo / Tenant
          </button>
          <button
            onClick={fetchCafes}
            disabled={loading}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 active:scale-95 transition-all"
          >
            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
            Segarkan
          </button>
        </div>
      </div>

      {/* Feedback Toast */}
      {feedbackMsg && (
        <div
          className={`p-4 rounded-xl border flex items-center justify-between transition-all ${
            feedbackMsg.type === 'success'
              ? 'bg-emerald-50 border-emerald-200 text-emerald-800 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-300'
              : 'bg-red-50 border-red-200 text-red-800 dark:bg-red-950/40 dark:border-red-800 dark:text-red-300'
          }`}
        >
          <span className="text-sm font-medium">{feedbackMsg.text}</span>
          <button
            onClick={() => setFeedbackMsg(null)}
            className="text-xs underline font-semibold ml-4"
          >
            Tutup
          </button>
        </div>
      )}

      {/* Metric Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Total Kafe</span>
            <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Store size={18} />
            </div>
          </div>
          <div className="text-2xl font-black text-gray-900 dark:text-white mt-2">{counts.total}</div>
          <div className="text-xs text-gray-400 mt-1">Tenant terdaftar di platform</div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-amber-200 dark:border-amber-900/50 shadow-sm bg-gradient-to-br from-amber-50/50 to-transparent dark:from-amber-950/20">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider">Perlu Persetujuan</span>
            <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/60 text-amber-600 dark:text-amber-300 flex items-center justify-center">
              <Clock size={18} />
            </div>
          </div>
          <div className="text-2xl font-black text-amber-700 dark:text-amber-400 mt-2">{counts.pending}</div>
          <div className="text-xs text-amber-600/80 dark:text-amber-400/80 mt-1">Menunggu review SuperAdmin</div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-emerald-200 dark:border-emerald-900/50 shadow-sm bg-gradient-to-br from-emerald-50/50 to-transparent dark:from-emerald-950/20">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">Kafe Aktif</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-300 flex items-center justify-center">
              <CheckCircle2 size={18} />
            </div>
          </div>
          <div className="text-2xl font-black text-emerald-700 dark:text-emerald-400 mt-2">{counts.active}</div>
          <div className="text-xs text-emerald-600/80 dark:text-emerald-400/80 mt-1">Beroperasi aktif di POS</div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Ditangguhkan / Tolak</span>
            <div className="w-8 h-8 rounded-lg bg-red-50 dark:bg-red-900/40 text-red-600 dark:text-red-400 flex items-center justify-center">
              <AlertTriangle size={18} />
            </div>
          </div>
          <div className="text-2xl font-black text-gray-900 dark:text-white mt-2">{counts.suspended + counts.rejected}</div>
          <div className="text-xs text-gray-400 mt-1">{counts.suspended} suspended, {counts.rejected} rejected</div>
        </div>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white dark:bg-gray-900 p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {[
            { key: 'ALL', label: 'Semua', count: counts.total },
            { key: 'PENDING_APPROVAL', label: 'Menunggu', count: counts.pending },
            { key: 'ACTIVE', label: 'Aktif', count: counts.active },
            { key: 'SUSPENDED', label: 'Ditangguhkan', count: counts.suspended },
            { key: 'REJECTED', label: 'Ditolak', count: counts.rejected },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedTab(tab.key)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedTab === tab.key
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-200 dark:shadow-none'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        <form onSubmit={handleSearchSubmit} className="relative min-w-[260px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Cari kafe, slug, no telepon..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          />
        </form>
      </div>

      {/* Cafes Table */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/75 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800">
                <th className="px-5 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Kafe & Slug</th>
                <th className="px-5 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Pemilik (Owner)</th>
                <th className="px-5 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Kontak & Alamat</th>
                <th className="px-5 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Metrik Operasional</th>
                <th className="px-5 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-5 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Aksi Persetujuan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-5 py-16 text-center text-gray-400 text-sm">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <RefreshCw size={24} className="animate-spin text-blue-500" />
                      <span>Memuat daftar kafe...</span>
                    </div>
                  </td>
                </tr>
              ) : cafes.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-5 py-16 text-center text-gray-400 text-sm">
                    <Store size={36} className="mx-auto text-gray-300 dark:text-gray-700 mb-2" />
                    <span>Tidak ada kafe yang cocok dengan filter atau pencarian.</span>
                  </td>
                </tr>
              ) : (
                cafes.map((cafe) => (
                  <CafeRow
                    key={cafe.id}
                    cafe={cafe}
                    actionLoadingId={actionLoadingId}
                    onUpdateStatus={handleUpdateStatus}
                    onDeleteCafe={handleDeleteCafe}
                    renderStatusBadge={getStatusBadge}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <CreateTenantModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSuccess={(msg) => {
          setFeedbackMsg({ type: 'success', text: msg });
          fetchCafes();
        }}
      />

      <ManagePlansModal
        isOpen={showPlansModal}
        onClose={() => setShowPlansModal(false)}
        onSuccess={(msg) => {
          setFeedbackMsg({ type: 'success', text: msg });
          fetchCafes();
        }}
      />
    </div>
  );
}
