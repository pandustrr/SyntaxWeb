import { BrainCircuit } from 'lucide-react';
import type { PricePlan, AddOn } from '../types';

export const PLANS: PricePlan[] = [
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

export const ADD_ONS: AddOn[] = [
  { name: 'Halaman tambahan' },
  { name: 'Multi bahasa' },
  { name: 'Maintenance website' },
  { name: 'Setup hosting & domain' },
  { name: 'Custom fitur / sistem' },
];

export const BONUSES: string[] = [
  'Free konsultasi project',
  'Free revisi minor setelah delivery',
  'Free panduan penggunaan website',
];
