interface CollapseButtonProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

export default function CollapseButton({ isCollapsed, setIsCollapsed }: CollapseButtonProps) {
  return (
    <button
      onClick={() => setIsCollapsed(!isCollapsed)}
      className="p-2 rounded-lg hover:bg-gray-50 transition-colors"
      style={{color: 'var(--text-secondary)'}}
    >
      {isCollapsed ? '→' : '←'}
    </button>
  );
}