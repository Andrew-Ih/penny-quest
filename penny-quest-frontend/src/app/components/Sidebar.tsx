'use client';

import { useSidebar } from '../contexts/SidebarContext';
import SidebarHeader from './sideBarComponents/SidebarHeader';
import SidebarNav from './sideBarComponents/SidebarNav';
import SidebarFooter from './sideBarComponents/SidebarFooter';

export default function Sidebar() {
  const { isCollapsed, setIsCollapsed } = useSidebar();

  return (
    <div className={`ws-card transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} h-screen fixed rounded-none border-l-0 border-t-0 border-b-0 flex flex-col`}>
      <SidebarHeader isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <SidebarNav isCollapsed={isCollapsed} />
      <SidebarFooter isCollapsed={isCollapsed} />
    </div>
  );
}