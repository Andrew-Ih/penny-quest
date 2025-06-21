import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarNavProps {
  isCollapsed: boolean;
}

export default function SidebarNav({ isCollapsed }: SidebarNavProps) {
  const pathname = usePathname();

  const menuItems = [
    { href: '/dashboard', label: 'Overview', icon: '📊' },
    { href: '/budgeting', label: 'Budgeting', icon: '💰' },
    { href: '/calendar', label: 'Calendar', icon: '📅' },
    { href: '/games', label: 'Games & Rewards', icon: '🎮' },
    { href: '/profile', label: 'Profile', icon: '👤' },
  ];

  return (
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
  );
}