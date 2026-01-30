'use client';

import AdminSidebar from '@/components/layout/AdminSidebar';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isLoginPage = pathname === '/admin/login';

  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      {/* Container Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 z-40 transition-all duration-300 ${
          isCollapsed ? 'w-20' : 'w-64'
        }`}
      >
        <AdminSidebar onToggle={setIsCollapsed} />
      </div>

      {/* Main Content Area */}
      <main 
        className={`flex-1 transition-all duration-300 ${
          isCollapsed ? 'ml-20' : 'ml-64'
        } p-8`}
      >
        {children}
      </main>
    </div>
  );
}
