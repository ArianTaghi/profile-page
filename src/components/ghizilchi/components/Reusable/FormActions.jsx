import React from 'react'
import AuthBottuns from './AuthBottuns'

const FormActions = ({ onNext, onBack, nextLabel = 'بعدی', disabled }) => (
  <div className="signup-actions">
    {onBack && <AuthBottuns variant="secondary" onClick={onBack} disabled={disabled}>قبلی</AuthBottuns>}
    <AuthBottuns onClick={onNext} disabled={disabled}>{nextLabel}</AuthBottuns>
  </div>
)

export default FormActions
