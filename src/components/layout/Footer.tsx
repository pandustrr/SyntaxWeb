'use client';

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = {
    main: [
      { name: 'Beranda', href: '/' },
      { name: 'Tentang', href: '/about' },
      { name: 'Layanan', href: '/services' },
      { name: 'Portofolio', href: '/portfolio' },
      { name: 'Kontak', href: '/contact' },
    ],
    social: [
      { name: 'Instagram', icon: Instagram, href: '#' },
      { name: 'Twitter', icon: Twitter, href: '#' },
      { name: 'GitHub', icon: Github, href: '#' },
      { name: 'LinkedIn', icon: Linkedin, href: '#' },
    ],
  };

  return (
    <footer className="relative overflow-hidden bg-white dark:bg-gray-950 pt-24 pb-12 transition-colors duration-300">
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-brand-red/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-gray-100 dark:border-gray-800/50">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="group flex items-center gap-3">
              <div className="w-12 h-12 bg-brand-red rounded-xl flex items-center justify-center text-white font-bold text-2xl group-hover:rotate-6 transition-transform duration-300 shadow-xl shadow-brand-red/20">
                S
              </div>
              <span className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                Syntax<span className="text-brand-red italic">Web</span>
              </span>
            </Link>
            
            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed max-w-md">
              Membangun masa depan digital Anda dengan teknologi mutakhir dan desain yang tak lekang oleh waktu. 
              Solusi web profesional untuk hasil yang luar biasa.
            </p>

            <div className="flex gap-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center text-gray-400 hover:text-brand-red dark:hover:text-brand-orange hover:border-brand-red/30 transition-all duration-300 hover:-translate-y-1 shadow-sm"
                  aria-label={item.name}
                >
                  <item.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-8">
              Navigasi Cepat
            </h4>
            <ul className="space-y-4">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-gray-500 dark:text-gray-400 hover:text-brand-red dark:hover:text-brand-orange transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red/20 group-hover:bg-brand-red transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-8">
              Hubungi Kami
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-brand-red">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Email</p>
                  <p className="text-gray-900 dark:text-white font-medium">hello@syntaxweb.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-brand-orange">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Telepon</p>
                  <p className="text-gray-900 dark:text-white font-medium">+62 (21) 1234 5678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-brand-maroon">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Lokasi</p>
                  <p className="text-gray-900 dark:text-white font-medium">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} <span className="text-gray-900 dark:text-white font-bold">SyntaxWeb</span>. Dibuat dengan dedikasi penuh.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-xs text-gray-400 hover:text-brand-red transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-gray-400 hover:text-brand-red transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
