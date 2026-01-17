'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
    const pathname = usePathname();

    const navigation = [
        { name: 'Dashboard', href: '/admin', icon: '📊' },
        { name: 'Projects', href: '/admin/projects', icon: '📁' },
        { name: 'Users', href: '/admin/users', icon: '👥' },
    ];

    return (
        <div className="fixed inset-y-0 left-0 w-64 bg-gray-900 text-white">
            <div className="flex flex-col h-full">
                <div className="flex items-center justify-center h-16 bg-gray-800 border-b border-gray-700">
                    <h1 className="text-xl font-bold tracking-tight">Syntax Admin</h1>
                </div>

                <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20'
                                        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                                    }`}
                            >
                                <span className={`mr-3 text-xl transition-transform duration-200 group-hover:scale-110`}>
                                    {item.icon}
                                </span>
                                <span className="font-medium">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
}
