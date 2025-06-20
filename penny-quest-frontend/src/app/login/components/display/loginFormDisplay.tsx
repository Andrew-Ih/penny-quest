interface LoginFormDisplayProps {
  children: React.ReactNode;
}

export default function LoginFormDisplay({ children }: LoginFormDisplayProps) {
  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8" style={{background: 'var(--bg-primary)'}}>
        <div className="w-full max-w-md">
            <div className="ws-card p-8">
              {children}
            </div>
        </div>
    </div>
  );
}