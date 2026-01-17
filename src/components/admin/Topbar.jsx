'use client';

import { useRouter } from 'next/navigation';
import Button from '../ui/Button';

export default function Topbar({ title }) {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            const response = await fetch('/api/admin/auth', {
                method: 'DELETE',
            });
            if (response.ok) {
                router.push('/admin/login');
            }
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <header className="fixed top-0 right-0 left-64 h-16 bg-white border-b border-gray-200 z-10 flex items-center justify-between px-8 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800">
                {title || 'Overview'}
            </h2>

            <div className="flex items-center space-x-4">
                <div className="flex flex-col text-right mr-4">
                    <span className="text-sm font-medium text-gray-900">Admin User</span>
                    <span className="text-xs text-gray-500">Administrator</span>
                </div>
                <Button
                    variant="ghost"
                    onClick={handleLogout}
                    className="flex items-center text-red-600 hover:bg-red-50"
                >
                    <span className="mr-2">🚪</span>
                    Logout
                </Button>
            </div>
        </header>
    );
}
