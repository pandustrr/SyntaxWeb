'use client';

import { useState, FormEvent } from 'react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Hubungi <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Kami</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Punya pertanyaan atau ingin memulai project? Kami siap membantu Anda!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">info@syntaxweb.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Telepon</h3>
                  <p className="text-gray-600">+62 123 4567 890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-pink-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Alamat</h3>
                  <p className="text-gray-600">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Nama"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Nama Anda"
                required
              />

              <Input
                label="Email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="email@example.com"
                required
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tulis pesan Anda di sini..."
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {submitted && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-600">Pesan berhasil dikirim!</p>
                </div>
              )}

              <Button type="submit" variant="primary" className="w-full">
                Kirim Pesan
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
