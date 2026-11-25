import React from 'react'
import '../Css/Reusable/ErrorField.css'

const ErrorField = ({ id, label, error, className = '', labelClassName = 'signup-label', ...props }) => (
  <>
    <label className={labelClassName} htmlFor={id}>{label}</label>
    <input
      {...props}
      id={id}
      className={`signup-input ${className}${error ? ' signup-input--error' : ''}`}
      aria-invalid={Boolean(error)}
      aria-describedby={error ? `${id}-error` : undefined}
    />
    {error && <p id={`${id}-error`} className="signup-error" role="alert">{error}</p>}
  </>
)

export default ErrorField
