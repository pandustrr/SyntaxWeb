export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Tentang <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SyntaxWeb</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami adalah tim profesional yang berdedikasi untuk menciptakan solusi web terbaik untuk bisnis Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visi Kami</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Menjadi partner terpercaya dalam transformasi digital bisnis Indonesia dengan menyediakan 
              solusi web development yang inovatif, berkualitas tinggi, dan terjangkau.
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Misi Kami</h2>
            <p className="text-gray-600 leading-relaxed">
              Membantu bisnis berkembang di era digital melalui website dan aplikasi web yang modern, 
              responsif, dan user-friendly dengan teknologi terkini.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl h-96 flex items-center justify-center">
            <span className="text-gray-400">Team Image</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-2xl shadow-sm border-2 border-gray-100">
            <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
            <div className="text-gray-600">Project Selesai</div>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-sm border-2 border-gray-100">
            <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-600">Klien Puas</div>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-sm border-2 border-gray-100">
            <div className="text-4xl font-bold text-pink-600 mb-2">5+</div>
            <div className="text-gray-600">Tahun Pengalaman</div>
          </div>
        </div>
      </div>
    </div>
  );
}
