'use client';

import { Code, Smartphone, Palette, Zap, Shield, Headphones } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Pembuatan website custom dengan teknologi terkini seperti Next.js, React, dan Node.js.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Website yang tampil sempurna di semua perangkat, dari desktop hingga smartphone.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Desain antarmuka yang menarik dan pengalaman pengguna yang intuitif.',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Website yang cepat dan optimal dengan performa terbaik di kelasnya.',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Keamanan website terjamin dengan implementasi best practices terkini.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Headphones,
      title: 'Support & Maintenance',
      description: 'Dukungan teknis dan maintenance berkelanjutan untuk website Anda.',
      color: 'from-red-500 to-red-600',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Layanan Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Solusi lengkap untuk semua kebutuhan web development Anda
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
