export default function AdminPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold border-b pb-4">Admin Dashboard</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-slate-100 rounded-lg border">
          Statistik Pengunjung
        </div>
        <div className="p-6 bg-slate-100 rounded-lg border">
          Manajemen Konten
        </div>
        <div className="p-6 bg-slate-100 rounded-lg border">
          Pengaturan Brand
        </div>
      </div>
    </div>
  );
}
