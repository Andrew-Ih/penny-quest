interface AppTitleProps {
  isCollapsed: boolean;
}

export default function AppTitle({ isCollapsed }: AppTitleProps) {
  return (
    <>
      {!isCollapsed && <h1 className="text-xl font-semibold" style={{color: 'var(--text-primary)'}}>Penny Quest</h1>}
    </>
  );
}