'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTheme, type Theme } from '../contexts/ThemeContext';
import { useSidebar } from '../contexts/SidebarContext';

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const { isCollapsed, setIsCollapsed } = useSidebar();

  const handleLogout = () => {
    router.push('/login');
  };

  const menuItems = [
    { href: '/dashboard', label: 'Overview', icon: '📊' },
    { href: '/budgeting', label: 'Budgeting', icon: '💰' },
    { href: '/calendar', label: 'Calendar', icon: '📅' },
    { href: '/games', label: 'Games & Rewards', icon: '🎮' },
    { href: '/profile', label: 'Profile', icon: '👤' },
  ];

  return (
    <div className={`ws-card transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} h-screen fixed rounded-none border-l-0 border-t-0 border-b-0 flex flex-col`}>
      <div className="p-6">
        <div className="flex items-center justify-between">
          {!isCollapsed && <h1 className="text-xl font-semibold" style={{color: 'var(--text-primary)'}}>Penny Quest</h1>}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-50 transition-colors"
            style={{color: 'var(--text-secondary)'}}
          >
            {isCollapsed ? '→' : '←'}
          </button>
        </div>
        {!isCollapsed && (
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as Theme)}
            className="mt-4 p-2 rounded-lg text-sm ws-input"
          >
            <option value="light">☀️ Light</option>
            <option value="dark">🌙 Dark</option>
            {/* <option value="cartoon">🎨 Cartoon</option>
            <option value="netflix">🎬 Netflix</option>
            <option value="retro">🕹️ Retro</option>
            <option value="cyberpunk">🤖 Cyberpunk</option> */}
          </select>
        )}
      </div>
      
      <nav className="px-3 flex-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-3 py-3 mb-1 rounded-lg transition-all duration-200 ${
                isActive 
                  ? 'text-white font-medium' 
                  : 'hover:bg-gray-50'
              }`}
              style={{
                backgroundColor: isActive ? '#00d4aa' : 'transparent',
                color: isActive ? 'white' : 'var(--text-secondary)'
              }}
            >
              <span className="text-lg">{item.icon}</span>
              {!isCollapsed && <span className="ml-3 text-sm">{item.label}</span>}
            </Link>
          );
        })}
      </nav>
      
      {!isCollapsed && (
        <div className="px-6 pb-6">
          <button
            onClick={handleLogout}
            className="flex items-center px-3 py-3 rounded-lg transition-all duration-200 hover:bg-gray-50 w-full text-left"
            style={{color: 'var(--text-secondary)'}}
          >
            <span className="text-lg">🚪</span>
            <span className="ml-3 text-sm">Logout</span>
          </button>
        </div>
      )}
    </div>
  );
}