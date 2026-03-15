'use client';

import { Check, Plus, Star, Sparkles, BrainCircuit, Globe, Zap, Layout, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function Pricelist() {
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

  return (
    <section className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/5 dark:bg-brand-red/10 border border-brand-red/10 mb-4">
            <Sparkles size={12} className="text-brand-red" />
            <span className="text-[10px] font-black text-brand-red uppercase tracking-widest">
              Pricing Plans
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-950 dark:text-white mb-4">
            From Concept to <span className="text-brand-red italic">Intelligent Innovation</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Investasi terbaik untuk pertumbuhan digital bisnis Anda. 
            <span className="block mt-2 font-black text-gray-900 dark:text-white">Start from Rp 999.000</span>
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 flex flex-col ${
                plan.highlight
                  ? 'bg-gray-950 dark:bg-white border-gray-950 dark:border-white shadow-2xl scale-105 z-10'
                  : 'bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 hover:border-brand-red/30'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-red text-white text-[10px] font-black rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className={`text-xl font-black mb-2 ${plan.highlight ? 'text-white dark:text-gray-950' : 'text-gray-950 dark:text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm leading-relaxed ${plan.highlight ? 'text-gray-400 dark:text-gray-500' : 'text-gray-500 dark:text-gray-400'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <div className="space-y-2">
                  <p className={`text-[10px] font-black uppercase tracking-widest ${plan.highlight ? 'text-gray-500 dark:text-gray-400' : 'text-gray-400 dark:text-gray-500'}`}>
                    Halaman:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {plan.pages.map((page, i) => (
                      <span key={i} className={`px-2 py-0.5 rounded text-[10px] font-bold ${plan.highlight ? 'bg-white/10 text-white dark:bg-gray-100 dark:text-gray-900' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'}`}>
                        {page}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <p className={`text-[10px] font-black uppercase tracking-widest ${plan.highlight ? 'text-gray-500 dark:text-gray-400' : 'text-gray-400 dark:text-gray-500'}`}>
                    Fitur Utama:
                  </p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs">
                        <Check size={14} className={plan.highlight ? 'text-brand-orange mt-0.5 shrink-0' : 'text-brand-red mt-0.5 shrink-0'} />
                        <span className={plan.highlight ? 'text-gray-300 dark:text-gray-600' : 'text-gray-600 dark:text-gray-400'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href="/contact"
                className={`w-full py-3 rounded-xl font-black text-center text-xs transition-all ${
                  plan.highlight
                    ? 'bg-brand-red text-white hover:bg-brand-orange'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-brand-red hover:text-white'
                }`}
              >
                Pilih Paket
              </Link>
            </div>
          ))}
        </div>

        {/* Add-ons & Benefits */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Add-on Features */}
          <div className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-3 mb-6">
              <Plus className="text-brand-red" size={24} />
              <h4 className="text-xl font-black text-gray-950 dark:text-white uppercase tracking-tight">Add On Features</h4>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Halaman tambahan',
                'Multi bahasa',
                'Maintenance website',
                'Setup hosting & domain',
                'Custom fitur / sistem'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 p-2 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Bonus Section */}
          <div className="bg-brand-red/5 dark:bg-brand-red/10 p-8 rounded-2xl border border-brand-red/10">
            <div className="flex items-center gap-3 mb-6">
              <Star className="text-brand-red fill-brand-red" size={24} />
              <h4 className="text-xl font-black text-gray-950 dark:text-white uppercase tracking-tight">Bonus Syntax Web</h4>
            </div>
            <ul className="space-y-4">
              {[
                'Free konsultasi project',
                'Free revisi minor setelah delivery',
                'Free panduan penggunaan website'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-950 dark:text-white font-bold">
                  <div className="w-6 h-6 rounded-full bg-brand-red text-white flex items-center justify-center text-[10px]">✓</div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Why Us? */}
        <div className="mt-20 text-center">
          <h4 className="text-sm font-black text-gray-400 uppercase tracking-[0.3em] mb-12">Kenapa memilih Syntax Web?</h4>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Layout, title: 'Modern & Clean Design' },
              { icon: Zap, title: 'Fast Loading Website' },
              { icon: Globe, title: 'SEO Friendly Structure' },
              { icon: BrainCircuit, title: 'Optional AI Integration' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 flex items-center justify-center text-brand-red shadow-sm group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
