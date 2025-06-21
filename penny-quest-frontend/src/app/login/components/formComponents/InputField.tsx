interface FormField {
  type: string;
  placeholder: string;
  required?: boolean;
}

interface InputFieldProps {
  field: FormField;
}

export default function InputField({ field }: InputFieldProps) {
  return (
    <input
      type={field.type}
      placeholder={field.placeholder}
      className="ws-input w-full"
      required={field.required}
    />
  );
}