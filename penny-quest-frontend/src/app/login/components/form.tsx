interface FormField {
  type: string;
  placeholder: string;
  required?: boolean;
}

interface FormProps {
  title: string;
  subtitle: string;
  fields: FormField[];
  buttonText: string;
  onSubmit: (e: React.FormEvent) => void;
}

export default function Form({ title, subtitle, fields, buttonText, onSubmit }: FormProps) {
  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-2" style={{color: 'var(--text-primary)'}}>
          {title}
        </h2>
        <p className="text-sm" style={{color: 'var(--text-secondary)'}}>{subtitle}</p>
      </div>
      <form onSubmit={onSubmit} className="space-y-4">
        {fields.map((field, index) => {
          if (field.type === 'grid') {
            return (
              <div key={index} className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="ws-input w-full"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="ws-input w-full"
                  required
                />
              </div>
            );
          }
          return (
            <div key={index}>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="ws-input w-full"
                required={field.required}
              />
            </div>
          );
        })}
        <button
          type="submit"
          className="ws-button-primary w-full py-3 text-sm font-medium mt-6"
        >
          {buttonText}
        </button>
      </form>
    </>
  );
}