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

const FormHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="text-center mb-8">
    <h2 className="text-2xl font-semibold mb-2" style={{color: 'var(--text-primary)'}}>
      {title}
    </h2>
    <p className="text-sm" style={{color: 'var(--text-secondary)'}}>{subtitle}</p>
  </div>
);

const GridFields = () => (
  <div className="grid grid-cols-2 gap-4">
    <input type="text" placeholder="First Name" className="ws-input w-full" required />
    <input type="text" placeholder="Last Name" className="ws-input w-full" required />
  </div>
);

const InputField = ({ field }: { field: FormField }) => (
  <input
    type={field.type}
    placeholder={field.placeholder}
    className="ws-input w-full"
    required={field.required}
  />
);

export default function Form({ title, subtitle, fields, buttonText, onSubmit }: FormProps) {
  return (
    <>
      <FormHeader title={title} subtitle={subtitle} />
      <form onSubmit={onSubmit} className="space-y-4">
        {fields.map((field, index) => (
          <div key={index}>
            {field.type === 'grid' ? <GridFields /> : <InputField field={field} />}
          </div>
        ))}
        <button type="submit" className="ws-button-primary w-full py-3 text-sm font-medium mt-6">
          {buttonText}
        </button>
      </form>
    </>
  );
}