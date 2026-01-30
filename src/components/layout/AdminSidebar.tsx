'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { 
  LayoutDashboard, 
  FolderKanban, 
  Users, 
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface SidebarProps {
  onToggle?: (collapsed: boolean) => void;
}

export default function AdminSidebar({ onToggle }: SidebarProps) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    if (onToggle) onToggle(newState);
  };

  const menuItems = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Projects', href: '/admin/projects', icon: FolderKanban },
    { name: 'Users', href: '/admin/users', icon: Users },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/auth', { method: 'DELETE' });
      window.location.href = '/admin/login';
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <aside 
      className={`bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 min-h-screen fixed left-0 top-0 z-40 transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="absolute -right-3 top-24 bg-blue-600 text-white p-1 rounded-full shadow-lg z-50 hover:scale-110 active:scale-95 transition-all"
      >
        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      {/* Brand */}
      <div className="h-20 flex items-center px-6 border-b border-gray-100 dark:border-gray-800 overflow-hidden whitespace-nowrap">
        <Link href="/admin" className="flex items-center gap-2 group">
          <div className="min-w-[32px] w-8 h-8 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform text-sm">
            S
          </div>
          {!isCollapsed && (
            <span className="text-lg font-black bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-400 bg-clip-text text-transparent opacity-100 transition-opacity duration-300">
              SyntaxAdmin
            </span>
          )}
        </Link>
      </div>

      {/* Navigation */}
      <nav className="p-3 space-y-2 mt-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              title={isCollapsed ? item.name : ''}
              className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 overflow-hidden whitespace-nowrap ${
                isActive
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-none font-medium'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              <div className="min-w-[20px]">
                <Icon size={20} />
              </div>
              {!isCollapsed && (
                <span className="text-sm opacity-100 transition-opacity duration-300">
                  {item.name}
                </span>
              )}
              {!isCollapsed && isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer Actions */}
      <div className="absolute bottom-6 left-3 right-3 space-y-4">
        <div className={`flex items-center p-2 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800 transition-all ${
          isCollapsed ? 'justify-center' : 'justify-between px-3'
        }`}>
          {!isCollapsed && <span className="text-[10px] font-semibold text-gray-500 uppercase px-1">Theme</span>}
          <ThemeToggle />
        </div>
        
        <button
          onClick={handleLogout}
          title={isCollapsed ? 'Logout System' : ''}
          className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition-all duration-200 font-medium group overflow-hidden whitespace-nowrap"
        >
          <div className="min-w-[40px] w-10 h-10 rounded-lg bg-red-50 dark:bg-red-950/20 flex items-center justify-center group-hover:bg-red-100 transition-colors">
            <LogOut size={20} />
          </div>
          {!isCollapsed && <span className="text-sm">Logout</span>}
        </button>
      </div>
    </aside>
  );
}
