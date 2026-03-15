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
<<<<<<< HEAD
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
=======
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <nav className={`
        relative w-full max-w-4xl transition-all duration-500 ease-in-out
        ${isScrolled 
          ? 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] border border-white/20 dark:border-gray-800/30 py-2 rounded-2xl' 
          : 'bg-white/40 dark:bg-gray-950/40 backdrop-blur-md border border-white/10 dark:border-gray-800/20 py-2.5 rounded-2xl'}
      `}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-2">
            <div className="w-9 h-9 bg-brand-red rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:rotate-6 transition-transform duration-300 shadow-lg shadow-brand-red/10">
              S
            </div>
            <span className="text-lg font-black text-gray-900 dark:text-white hidden sm:block">
              SyntaxWeb
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-gray-50/50 dark:bg-gray-800/20 p-1 rounded-xl border border-gray-100 dark:border-gray-800 relative overflow-hidden">
>>>>>>> a316ab4802c9de0f5bd06de45ab4442322c3ec35
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
<<<<<<< HEAD
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex flex-col items-center gap-1 transition-all duration-500 relative"
=======
                  className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 relative z-10
                    ${isActive 
                      ? 'text-brand-red dark:text-brand-orange bg-white dark:bg-gray-900 shadow-sm' 
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
>>>>>>> a316ab4802c9de0f5bd06de45ab4442322c3ec35
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

<<<<<<< HEAD
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
=======



          <div className="flex items-center gap-2">
            <div className="scale-90 hover:scale-100 transition-transform duration-300">
              <ThemeToggle />
            </div>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>


        {/* Mobile Menu */}
        <div className={`
          absolute top-full left-0 right-0 mt-4 mx-2 p-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl rounded-2xl border border-white/20 dark:border-gray-800/30 shadow-2xl transition-all duration-300
          ${isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}
        `}>
          <div className="flex flex-col gap-2">
>>>>>>> a316ab4802c9de0f5bd06de45ab4442322c3ec35
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
