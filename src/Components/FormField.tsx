import '../styles/formfield.scss'

interface AddItem {
    type?: string,
    placeholder: string,
    required: boolean,
    children: React.ReactNode
}

export default function FormField({type, placeholder, required, children}: AddItem) {
    
    return (
        <div className="field-wrapper">
            <label htmlFor="input" className="label">
                {required && <span className="required"></span>}
                {children}
            </label>

            <input
                id="input"
                className="input"
                type={type ?? 'text'}
                placeholder={placeholder}
                required={required}
            />
      </div>

    )
}