interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function Button({ children, onClick, type = 'button', variant = 'primary', className = '' }: ButtonProps) {
  const baseClasses = variant === 'primary' 
    ? 'ws-button-primary w-full py-3 text-sm font-medium'
    : 'font-medium hover:underline';
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
      style={variant === 'secondary' ? {color: '#00d4aa'} : {}}
    >
      {children}
    </button>
  );
}