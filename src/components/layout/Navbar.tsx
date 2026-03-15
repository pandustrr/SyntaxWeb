'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { Globe, Menu, X, MessageSquare, Home, Tag } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: t.nav.contact, href: '/contact', icon: MessageSquare },
    { name: t.nav.home, href: '/', icon: Home },
    { name: t.nav.pricelist, href: '/pricelist', icon: Tag },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  return (
    <>
      <div className="fixed bottom-8 inset-x-0 z-50 flex justify-center px-4">
        <motion.nav 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="bg-white/80 backdrop-blur-2xl border border-black/5 px-6 md:px-10 py-3 md:py-4 flex items-center gap-6 md:gap-12 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
        >
          {/* Main Links */}
          <div className="flex items-center gap-6 md:gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex flex-col items-center gap-1 transition-all duration-500 relative"
                >
                  <link.icon 
                    size={16} 
                    className={`${isActive ? 'text-[#22D3EE]' : 'text-black/30'} group-hover:text-[#22D3EE] transition-colors`} 
                  />
                  <span className={`text-[7px] md:text-[8px] font-black uppercase tracking-[0.3em] ${isActive ? 'text-[#22D3EE]' : 'text-black/30'} group-hover:text-[#111111]`}>
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.div 
                      layoutId="nav-active"
                      className="absolute -bottom-1 w-full h-[1px] bg-[#22D3EE]"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="w-[1px] h-6 bg-black/5 hidden md:block" />

          <div className="flex items-center gap-5">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] text-[#22D3EE] hover:text-[#22D3EE]/80 transition-colors"
            >
              <Globe size={13} />
              <span>{language === 'id' ? 'ID' : 'EN'}</span>
            </button>

             <Link
              href="/partners"
              className="hidden md:block text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] text-black/20 hover:text-black transition-colors"
             >
              {t.nav.partners}
             </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed inset-x-4 bottom-28 z-40 bg-white/95 backdrop-blur-3xl border border-black/5 flex flex-col items-center justify-center gap-8 p-12 md:hidden rounded-[32px] shadow-2xl shadow-black/5"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-4 text-xl font-black uppercase tracking-[0.4em] text-black hover:text-[#22D3EE] transition-all"
              >
                <link.icon size={20} className="text-[#22D3EE]" />
                {link.name}
              </Link>
            ))}
            <div className="w-full h-[1px] bg-black/5 my-4" />
            <Link
              href="/admin/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xs font-black uppercase tracking-[0.4em] text-black/30"
            >
              PARTNERS
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
