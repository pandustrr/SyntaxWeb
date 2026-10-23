'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/modules/shared';
import SplitText from '@/modules/shared/animations/SplitText';
import {
  Smartphone,
  Download,
  Receipt,
  Layers,
  Clock,
  CloudCheck,
  CheckCircle2,
  ArrowRight,
  Tablet,
  Activity,
  Cpu,
} from 'lucide-react';
import Link from 'next/link';

export default function PosAppSection() {
  const { t } = useLanguage();
  const posData = (t as any).posApp || {};

  const highlights = [
    {
      icon: Receipt,
      title: posData.features?.[0]?.title || 'Kasir Cepat & Multi-Metode',
      desc: posData.features?.[0]?.desc || 'Transaksi kilat, split bill, cetak nota thermal Bluetooth, serta mode Dine-in dan Takeaway.',
    },
    {
      icon: Layers,
      title: posData.features?.[1]?.title || 'Resep & Inventaris Bahan Baku',
      desc: posData.features?.[1]?.desc || 'Otomatisasi pemotongan stok bahan baku setiap order dibuat dengan peringatan low-stock real-time.',
    },
    {
      icon: Clock,
      title: posData.features?.[2]?.title || 'Audit Shift Kasir Transparan',
      desc: posData.features?.[2]?.desc || 'Buka dan tutup shift kasir dengan rekonsiliasi kas tunai, non-tunai, dan pencatatan selisih otomatis.',
    },
    {
      icon: CloudCheck,
      title: posData.features?.[3]?.title || 'Sinkronisasi Cloud Real-time',
      desc: posData.features?.[3]?.desc || 'Aplikasi Flutter terkoneksi langsung ke server backend Next.js & database PostgreSQL SyntaxWeb.',
    },
  ];

  return (
    <section id="pos-app" className="min-h-screen py-24 lg:py-36 bg-transparent relative overflow-hidden">
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] rounded-full bg-[#22D3EE]/[0.05] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-10%] w-[500px] h-[500px] rounded-full bg-[#22D3EE]/[0.05] blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16 md:mb-24">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/10 text-[#22D3EE] text-[9px] font-black uppercase tracking-[0.3em]"
            >
              <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse" />
              {posData.badge || 'PRODUK UNGGULAN • MOBILE & CLOUD'}
            </motion.div>

            <h2 className="text-5xl md:text-8xl font-black text-foreground tracking-tighter uppercase font-['Teko'] leading-none">
              <SplitText text={posData.title || 'SYNTAX POS'} className="text-foreground" />
              <span className="block text-3xl md:text-5xl text-foreground/40 font-bold tracking-tight normal-case mt-1">
                {posData.subtitle || 'Sistem Kasir Pintar & Cloud Ecosystem'}
              </span>
            </h2>
          </div>

          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-foreground/70 text-sm md:text-base max-w-md font-medium leading-relaxed"
          >
            {posData.description ||
              'Solusi kasir modern berbasis cloud dan aplikasi mobile Android. Lengkap dengan manajemen stok resep bahan baku, shift kasir real-time, meja restoran, hingga laporan analitik omset bisnis Anda.'}
          </motion.p>
        </div>
        {/* Hero Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden shadow-2xl"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-[#22D3EE]">
                <Smartphone size={16} />
                <span>Android Native Application (.APK)</span>
              </div>

              <h3 className="text-3xl md:text-5xl font-black text-foreground uppercase font-['Teko'] tracking-tight leading-tight">
                Unduh dan Pasang Langsung di Tablet atau Smartphone Kasir Anda
              </h3>

              <p className="text-foreground/60 text-xs md:text-sm leading-relaxed max-w-xl">
                Nikmati respons kasir instan tanpa lag. Aplikasi Syntax POS dirancang dengan Flutter terhubung ke server SyntaxWeb untuk transaksi, cetak nota struk, dan manajemen stok resep bahan baku.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="/api/download/apk"
                  download="syntax-pos-v1.0.0.apk"
                  className="group inline-flex items-center justify-center gap-4 px-8 py-4 rounded-xl bg-[#22D3EE] text-black font-black uppercase tracking-[0.2em] text-xs hover:bg-[#22D3EE]/90 shadow-lg shadow-[#22D3EE]/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                  <span>{posData.downloadButton || 'Unduh APK Android (v1.0.0)'}</span>
                </a>

                <Link
                  href="/pos"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl border border-border bg-foreground/[0.03] text-foreground font-black uppercase tracking-[0.2em] text-xs hover:bg-foreground/[0.08] hover:border-[#22D3EE]/50 transition-all duration-300"
                >
                  <span>Panduan & Info Fitur</span>
                  <ArrowRight size={14} className="text-[#22D3EE]" />
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2 text-[11px] text-foreground/50 font-mono">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-[#22D3EE]" /> Versi 1.0.0 (Production)
                </span>
                <span>•</span>
                <span>Android 8.0 Oreo ke atas</span>
                <span>•</span>
                <span>Siap Pasang</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-border/60">
              <div>
                <div className="text-3xl md:text-4xl font-black text-foreground font-['Teko']">0.1s</div>
                <div className="text-[9px] uppercase tracking-wider text-foreground/50 font-bold">Respon Kasir</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-[#22D3EE] font-['Teko']">100%</div>
                <div className="text-[9px] uppercase tracking-wider text-foreground/50 font-bold">Cloud Real-time</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-foreground font-['Teko']">Multi</div>
                <div className="text-[9px] uppercase tracking-wider text-foreground/50 font-bold">Outlet & Kasir</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 rounded-3xl border border-border bg-card/60 backdrop-blur-md p-6 md:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            <div className="flex items-center justify-between pb-4 border-b border-border/80">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-[10px] font-mono text-foreground/50 uppercase tracking-widest">
                  TERMINAL #01 • KASIR UTAMA
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[9px] font-bold">
                <Activity size={10} className="animate-pulse" />
                ONLINE
              </div>
            </div>

            <div className="my-6 space-y-3">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40">
                PESANAN AKTIF • MEJA 04
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-foreground/[0.03] border border-border flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-foreground">Kopi Susu Gula Aren</div>
                    <div className="text-[10px] text-foreground/50">2x @ Rp 22.000 (Ice, Normal Sugar)</div>
                  </div>
                  <div className="font-mono font-bold text-[#22D3EE]">Rp 44.000</div>
                </div>

                <div className="p-3 rounded-xl bg-foreground/[0.03] border border-border flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-foreground">Butter Croissant Almond</div>
                    <div className="text-[10px] text-foreground/50">1x @ Rp 28.000 (Warm)</div>
                  </div>
                  <div className="font-mono font-bold text-[#22D3EE]">Rp 28.000</div>
                </div>

                <div className="p-3 rounded-xl bg-foreground/[0.03] border border-border flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-foreground">Matcha Latte Oat Milk</div>
                    <div className="text-[10px] text-foreground/50">1x @ Rp 32.000</div>
                  </div>
                  <div className="font-mono font-bold text-[#22D3EE]">Rp 32.000</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#22D3EE]/[0.08] border border-[#22D3EE]/20 space-y-1.5 text-xs">
                <div className="flex justify-between text-foreground/60 text-[11px]">
                  <span>Subtotal</span>
                  <span className="font-mono">Rp 104.000</span>
                </div>
                <div className="flex justify-between text-foreground/60 text-[11px]">
                  <span>Pajak Resto (PB1 10%)</span>
                  <span className="font-mono">Rp 10.400</span>
                </div>
                <div className="flex justify-between text-foreground font-black text-sm pt-2 border-t border-border">
                  <span>TOTAL PEMBAYARAN</span>
                  <span className="font-mono text-[#22D3EE] font-black text-base">Rp 114.400</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border/80 flex items-center justify-between text-[10px] text-foreground/50">
              <span className="flex items-center gap-1.5">
                <Tablet size={13} className="text-[#22D3EE]" /> Tablet & HP Ready
              </span>
              <span className="flex items-center gap-1.5">
                <Cpu size={13} className="text-[#22D3EE]" /> Thermal Printer Ready
              </span>
            </div>
          </motion.div>
        </div>
        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-6 rounded-2xl border border-border bg-card/40 backdrop-blur-md hover:border-[#22D3EE]/50 hover:bg-card/70 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#22D3EE]/10 border border-[#22D3EE]/20 flex items-center justify-center text-[#22D3EE] mb-5 group-hover:scale-110 group-hover:bg-[#22D3EE] group-hover:text-black transition-all duration-300">
                <item.icon size={22} />
              </div>
              <h4 className="text-xl font-black text-foreground uppercase font-['Teko'] tracking-tight mb-2 group-hover:text-[#22D3EE] transition-colors">
                {item.title}
              </h4>
              <p className="text-foreground/60 text-xs leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
