interface FormHeaderProps {
  title: string;
  subtitle: string;
}

export default function FormHeader({ title, subtitle }: FormHeaderProps) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-2xl font-semibold mb-2" style={{color: 'var(--text-primary)'}}>
        {title}
      </h2>
      <p className="text-sm" style={{color: 'var(--text-secondary)'}}>{subtitle}</p>
    </div>
  );
}