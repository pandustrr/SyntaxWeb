import { LayoutDashboard, FolderKanban, Users, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    {
      title: 'Total Projects',
      value: '24',
      icon: FolderKanban,
      color: 'blue',
      trend: '+12%',
    },
    {
      title: 'Total Users',
      value: '156',
      icon: Users,
      color: 'purple',
      trend: '+8%',
    },
    {
      title: 'Active Projects',
      value: '12',
      icon: LayoutDashboard,
      color: 'green',
      trend: '+5%',
    },
    {
      title: 'Revenue',
      value: 'Rp 45M',
      icon: TrendingUp,
      color: 'pink',
      trend: '+15%',
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Selamat datang di Admin Panel SyntaxWeb</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                  <Icon className={`text-${stat.color}-600`} size={24} />
                </div>
                <span className="text-green-600 text-sm font-medium">{stat.trend}</span>
              </div>
              <h3 className="text-gray-600 text-sm mb-1">{stat.title}</h3>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Aktivitas Terbaru</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <FolderKanban className="text-blue-600" size={20} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Project baru ditambahkan</p>
              <p className="text-xs text-gray-500">2 jam yang lalu</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <Users className="text-purple-600" size={20} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">User baru mendaftar</p>
              <p className="text-xs text-gray-500">5 jam yang lalu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
