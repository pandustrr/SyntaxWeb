'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              SyntaxWeb
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Solusi web development profesional untuk bisnis Anda. 
              Kami menciptakan website yang modern, responsif, dan berkualitas tinggi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Navigasi</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Email: info@syntaxweb.com</li>
              <li>Phone: +62 123 4567 890</li>
              <li>Alamat: Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} SyntaxWeb. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
