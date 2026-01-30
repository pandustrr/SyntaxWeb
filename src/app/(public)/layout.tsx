'use client';

import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Tambahkan class zoom ke body saat di halaman publik
    document.body.classList.add('desktop-body-zoom');
    
    return () => {
      // Hapus class saat meninggalkan halaman publik
      document.body.classList.remove('desktop-body-zoom');
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
