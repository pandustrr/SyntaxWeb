'use client';

import { usePathname } from 'next/navigation';
import Sidebar from '@/components/admin/Sidebar';
import Topbar from '@/components/admin/Topbar';

export default function AdminLayout({ children }) {
    const pathname = usePathname();
    const isLoginPage = pathname === '/admin/login';

    // If it's the login page, don't show the admin shell (sidebar/topbar)
    if (isLoginPage) {
        return <>{children}</>;
    }

    const titles = {
        '/admin': 'Dashboard Overview',
        '/admin/projects': 'Project Management',
        '/admin/users': 'User Management',
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar />

            <div className="ml-64">
                <Topbar title={titles[pathname]} />

                <main className="pt-24 p-8">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
