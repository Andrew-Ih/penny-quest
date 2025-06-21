import AppTitle from './AppTitle';
import ThemeSelector from './ThemeSelector';
import CollapseButton from './CollapseButton';

interface SidebarHeaderProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

export default function SidebarHeader({ isCollapsed, setIsCollapsed }: SidebarHeaderProps) {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <AppTitle isCollapsed={isCollapsed} />
        <CollapseButton isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </div>
      <ThemeSelector isCollapsed={isCollapsed} />
    </div>
  );
}