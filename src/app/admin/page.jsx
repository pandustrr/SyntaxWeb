"use client";

export default function AdminPage() {
  const stats = [
    { label: "Total Projects", value: "12", icon: "📁", color: "bg-blue-500" },
    { label: "Active Users", value: "5", icon: "👥", color: "bg-green-500" },
    { label: "Pending Tasks", value: "8", icon: "📋", color: "bg-yellow-500" },
    { label: "Completed", value: "45", icon: "✅", color: "bg-purple-500" },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-2">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div
                className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center text-2xl`}
              >
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <span className="mr-2">📊</span>
            Statistik Pengunjung
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Monitor website traffic and user engagement
          </p>
          <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
            View Details →
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <span className="mr-2">📝</span>
            Manajemen Konten
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Create and manage your website content
          </p>
          <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
            Manage Content →
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <span className="mr-2">⚙️</span>
            Pengaturan Brand
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Customize your brand settings and preferences
          </p>
          <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
            Configure →
          </button>
        </div>
      </div>
    </div>
  );
}
