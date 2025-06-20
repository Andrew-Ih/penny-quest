'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();

  const menuItems = [
    { href: '/dashboard', label: 'Overview', icon: '📊' },
    { href: '/budgeting', label: 'Budget', icon: '💰' },
    { href: '/calendar', label: 'Calendar', icon: '📅' },
    { href: '/games', label: 'Games', icon: '🎮' },
    { href: '/profile', label: 'Profile', icon: '👤' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden" style={{background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)'}}>
      <div className="flex justify-around py-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center py-2 px-2 transition-colors"
              style={{
                color: isActive ? '#00d4aa' : 'var(--text-secondary)'
              }}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-xs mt-1 font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}