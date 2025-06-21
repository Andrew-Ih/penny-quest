'use client';

import Sidebar from '../components/Sidebar';
import BottomNav from '../components/BottomNav';
import { useSidebar } from '../contexts/SidebarContext';


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isCollapsed } = useSidebar();
  
  return (
    <div className="flex min-h-screen">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>
      
      {/* Main Content */}
      <div className={`flex-1 pb-16 md:pb-0 overflow-y-auto transition-all duration-300 ${isCollapsed ? 'md:ml-16' : 'md:ml-64'}`}>
        {children}
      </div>
      
      {/* Mobile Bottom Navigation */}
      <BottomNav />
    </div>
  );
}