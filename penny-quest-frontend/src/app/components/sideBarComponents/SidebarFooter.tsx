import LogoutButton from './LogoutButton';

interface SidebarFooterProps {
  isCollapsed: boolean;
}

export default function SidebarFooter({ isCollapsed }: SidebarFooterProps) {
  return (
    <>
      {!isCollapsed && (
        <div className="px-6 pb-6">
          <LogoutButton />
        </div>
      )}
    </>
  );
}