import React from 'react'
import '../Css/Reusable/AuthBottuns.css'

const AuthBottuns = ({ children, variant = 'primary', type = 'button', ...props }) => (
  <button
    type={type}
    className={variant === 'sms' ? 'signup-sms-button' : `signup-button signup-button--${variant}`}
    {...props}
  >
    {children}
  </button>
)

export default AuthBottuns
