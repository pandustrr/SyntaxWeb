import Services from '@/components/sections/Services';

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Layanan <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Kami</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami menyediakan berbagai layanan web development profesional untuk membantu bisnis Anda berkembang di era digital.
          </p>
        </div>
      </div>
      <Services />
    </div>
  );
}
