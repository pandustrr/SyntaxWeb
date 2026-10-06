'use client';

import { useState } from 'react';
import { Check, Plus, Star, Sparkles, BrainCircuit, Globe, Zap, Layout, X, MessageCircle, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_NUMBER = '6281230487469';

const plans = [
  {
    name: 'Starter Website',
    description: 'Cocok untuk UMKM, personal brand, atau bisnis yang baru.',
    pages: ['Home', 'About', 'Layanan', 'Contact'],
    features: [
      'Website statis',
      'Responsive design (mobile & desktop)',
      'Admin Panel Sederhana',
      'Ubah hero background per halaman',
      'Manajemen Akun admin',
    ],
    highlight: false,
  },
  {
    name: 'Business Website',
    description: 'Cocok untuk bisnis profesional dan dinamis.',
    pages: ['Home', 'About', 'Layanan', 'Contact', 'Partner / Portofolio'],
    features: [
      'Website Semi Dinamis',
      'Responsive design mobile/desktop',
      'Manage Hero Background per halaman',
      'Manage Page Partner / Portofolio',
      'Custom Page / Add-On Feature',
    ],
    highlight: true,
  },
  {
    name: 'Professional Company Profile',
    description: 'Cocok untuk perusahaan yang membutuhkan fleksibilitas.',
    pages: ['Home', 'About', 'Layanan', 'Contact', 'Partner', 'Portofolio'],
    features: [
      'Website Dinamis',
      'Responsive design mobile/desktop',
      'Management Semua konten halaman',
      'Full Control Admin',
      'Premium Layout Design',
    ],
    highlight: false,
  },
  {
    name: 'AI Intelligent Website',
    description: 'Website dengan AI dan automasi pintar.',
    pages: ['Request page maks 5'],
    features: [
      'Integrasi AI Chatbot',
      'AI Auto Customer Response',
      'Automasi interaksi pengguna',
      'Integrasi database & API',
      'Custom AI feature sesuai kebutuhan',
    ],
    highlight: false,
    icon: BrainCircuit,
  },
];

const ADD_ONS = [
  { name: 'Halaman tambahan', price: 'Rp 200.000' },
  { name: 'Partner / Portofolio page', price: 'Rp 300.000' },
  { name: 'Multi bahasa', price: 'Rp 800.000' },
  { name: 'Maintenance website', price: 'Rp 500.000 / bln' },
  { name: 'Setup hosting & domain', price: 'Rp 500.000' },
  { name: 'Custom fitur / sistem', price: 'By Request' },
];

const BONUSES = [
  'Free konsultasi project',
  'Free revisi minor setelah delivery',
  'Free panduan penggunaan website',
];

export default function Pricelist() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (planName: string) => {
    setSelectedPlan(planName);
    setSelectedAddOns([]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => { setSelectedPlan(null); setSelectedAddOns([]); }, 300);
  };

  const toggleAddOn = (addonName: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(addonName) ? prev.filter((a) => a !== addonName) : [...prev, addonName]
    );
  };

  const handleWhatsApp = () => {
    let msg = `Halo Syntax Web! 👋\n\nSaya tertarik dengan paket *${selectedPlan}*.`;
    if (selectedAddOns.length > 0) {
      msg += `\n\nAdd-On yang saya pilih:\n`;
      selectedAddOns.forEach((a) => { msg += `• ${a}\n`; });
    }
    msg += `\nBisa info lebih lanjut? Terima kasih!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section className="py-24 bg-background transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/10 mb-4">
            <Sparkles size={12} className="text-brand-red" />
            <span className="text-[10px] font-black text-brand-red uppercase tracking-widest">
              Pricing Plans
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 font-['Teko'] uppercase tracking-tight">
            From Concept to <span className="text-brand-red italic">Intelligent Innovation</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg font-medium">
            Investasi terbaik untuk pertumbuhan digital bisnis Anda.
            <span className="block mt-2 font-black text-foreground">Start from Rp 999.000</span>
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border transition-all duration-300 flex flex-col ${
                  plan.highlight
                    ? 'bg-foreground text-background border-foreground shadow-[0_20px_50px_rgba(34,211,238,0.1)] scale-105 z-10'
                    : 'bg-card border-border hover:border-brand-red/30'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-red text-white text-[10px] font-black rounded-full uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                {Icon && (
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${plan.highlight ? 'bg-background/10' : 'bg-foreground/5'}`}>
                    <Icon size={20} className={plan.highlight ? 'text-background' : 'text-brand-red'} />
                  </div>
                )}
                <div className="mb-6">
                  <h3 className={`text-xl font-black mb-2 uppercase font-['Teko'] tracking-wider ${plan.highlight ? 'text-background' : 'text-foreground'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm leading-relaxed font-medium ${plan.highlight ? 'text-background/70' : 'text-foreground/60'}`}>
                    {plan.description}
                  </p>
                </div>
                <div className="space-y-4 mb-8 flex-grow">
                  <div className="space-y-2">
                    <p className={`text-[10px] font-black uppercase tracking-widest ${plan.highlight ? 'text-background/40' : 'text-foreground/20'}`}>Halaman:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {plan.pages.map((page, i) => (
                        <span key={i} className={`px-2 py-0.5 rounded text-[10px] font-bold ${plan.highlight ? 'bg-background/10 text-background' : 'bg-foreground/10 text-foreground/80'}`}>
                          {page}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className={`text-[10px] font-black uppercase tracking-widest ${plan.highlight ? 'text-background/40' : 'text-foreground/20'}`}>Fitur Utama:</p>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs">
                          <Check size={14} className={`${plan.highlight ? 'text-brand-orange' : 'text-brand-red'} mt-0.5 shrink-0`} />
                          <span className={plan.highlight ? 'text-background/70' : 'text-foreground/60'}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <button
                  onClick={() => openModal(plan.name)}
                  className={`w-full py-3 rounded-xl font-black text-center text-xs transition-all active:scale-95 ${
                    plan.highlight
                      ? 'bg-background text-foreground hover:bg-brand-orange hover:text-white'
                      : 'bg-foreground/5 text-foreground hover:bg-brand-red hover:text-white'
                  }`}
                >
                  Pilih Paket
                </button>
              </div>
            );
          })}
        </div>

        {/* Add-ons & Benefits */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-card p-8 rounded-2xl border border-border">
            <div className="flex items-center gap-3 mb-6">
              <Plus className="text-brand-red" size={24} />
              <h4 className="text-xl font-black text-foreground uppercase tracking-tight font-['Teko']">Add On Features</h4>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {ADD_ONS.map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm p-3 bg-foreground/[0.02] rounded-xl border border-border">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 shrink-0" />
                  <div>
                    <p className="text-foreground/80 font-semibold text-xs">{item.name}</p>
                    <p className="text-foreground/40 text-[10px] font-bold mt-0.5">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-foreground/30 font-bold mt-5 uppercase tracking-widest">
              * Add-On dapat dipilih saat memilih paket
            </p>
          </div>

          <div className="bg-brand-red/10 p-8 rounded-2xl border border-brand-red/10">
            <div className="flex items-center gap-3 mb-6">
              <Star className="text-brand-red fill-brand-red" size={24} />
              <h4 className="text-xl font-black text-foreground uppercase tracking-tight font-['Teko']">Bonus Syntax Web</h4>
            </div>
            <ul className="space-y-4">
              {BONUSES.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground font-bold">
                  <div className="w-6 h-6 rounded-full bg-brand-red text-white flex items-center justify-center text-[10px]">✓</div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Why Us? */}
        <div className="mt-20 text-center">
          <h4 className="text-sm font-black text-foreground/20 uppercase tracking-[0.3em] mb-12">Kenapa memilih Syntax Web?</h4>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Layout, title: 'Modern & Clean Design' },
              { icon: Zap, title: 'Fast Loading Website' },
              { icon: Globe, title: 'SEO Friendly Structure' },
              { icon: BrainCircuit, title: 'Optional AI Integration' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 bg-card rounded-xl border border-border flex items-center justify-center text-brand-red shadow-sm">
                  <item.icon size={24} />
                </div>
                <p className="text-sm font-bold text-foreground">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Pilih Paket Modal ──────────────────────────────────── */}
      <AnimatePresence>
        {isModalOpen && selectedPlan && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closeModal}
            />
            <motion.div
              className="relative bg-background border border-border rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between p-6 border-b border-border">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-red/10 border border-brand-red/10 mb-2">
                    <Sparkles size={10} className="text-brand-red" />
                    <span className="text-[9px] font-black text-brand-red uppercase tracking-widest">Paket Dipilih</span>
                  </div>
                  <h3 className="text-2xl font-black text-foreground uppercase tracking-tight font-['Teko']">
                    {selectedPlan}
                  </h3>
                </div>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 rounded-lg bg-foreground/5 hover:bg-foreground/10 flex items-center justify-center transition-colors shrink-0 mt-1"
                >
                  <X size={16} className="text-foreground/60" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-5">
                {/* Add-On Selector */}
                <div>
                  <p className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.3em] mb-3">
                    Tambah Add-On?{' '}
                    <span className="text-foreground/20 normal-case tracking-normal font-medium">(Opsional)</span>
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {ADD_ONS.map((addon, i) => {
                      const isChecked = selectedAddOns.includes(addon.name);
                      return (
                        <button
                          key={i}
                          onClick={() => toggleAddOn(addon.name)}
                          className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${
                            isChecked
                              ? 'border-brand-red bg-brand-red/5 text-foreground'
                              : 'border-border bg-foreground/[0.02] text-foreground/60 hover:border-foreground/20 hover:text-foreground'
                          }`}
                        >
                          <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-all ${
                            isChecked ? 'bg-brand-red border-brand-red' : 'border-border'
                          }`}>
                            {isChecked && <Check size={10} className="text-white" />}
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs font-bold leading-tight truncate">{addon.name}</p>
                            <p className="text-[10px] text-foreground/40 font-semibold">{addon.price}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-foreground/[0.03] border border-border rounded-xl p-4">
                  <p className="text-[9px] font-black text-foreground/30 uppercase tracking-widest mb-2">Ringkasan Pesanan</p>
                  <div className="flex items-center gap-2 mb-1">
                    <ChevronRight size={12} className="text-brand-red" />
                    <span className="text-sm font-black text-foreground">{selectedPlan}</span>
                  </div>
                  {selectedAddOns.length > 0 && (
                    <div className="ml-4 space-y-1 mt-2">
                      {selectedAddOns.map((a, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Plus size={10} className="text-foreground/40" />
                          <span className="text-xs text-foreground/60 font-medium">{a}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* WhatsApp CTA */}
                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] active:scale-[0.98] text-white font-black text-sm uppercase tracking-wider transition-all duration-200 shadow-lg shadow-[#25D366]/20"
                >
                  <MessageCircle size={18} />
                  Hubungi via WhatsApp
                </button>

                <p className="text-center text-[10px] text-foreground/30 font-medium">
                  Anda akan diarahkan ke WhatsApp dengan pesan otomatis
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
