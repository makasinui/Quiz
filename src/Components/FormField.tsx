import "../styles/formfield.scss";
interface AddItem {
  type?: string;
  placeholder: string;
  required?: boolean | false;
  children: React.ReactNode;
  handleSubmit: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormField({
  type,
  placeholder,
  required,
  children,
  handleSubmit,
}: AddItem) {
  return (
    <div className="field-wrapper">
      <label htmlFor="input" className="label">
        {required && <span className="required"></span>}
        {children}
      </label>

      <input
        id="input"
        className="input"
        type={type ?? "text"}
        placeholder={placeholder}
        required={required}
        onChange={(e) => handleSubmit(e)}
      />
    </div>
  );
}
