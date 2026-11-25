import React, { useState } from 'react'
import ErrorField from '../Reusable/ErrorField'
import FormActions from '../Reusable/FormActions'
import { getContactErrors as getErrors } from '../Reusable/accountValidation'

const Stage2 = ({ onValidate, inputData, onBack, isActive }) => {
  const [errors, setErrors] = useState({})
  const [phone, setPhone] = useState(inputData.phone ?? '')
  const [email, setEmail] = useState(inputData.email ?? '')

  const validate = () => {
    const newErrors = getErrors({ phone, email })
    setErrors(newErrors)

    onValidate(Object.keys(newErrors).length === 0, {
      phone,
      email,
    })
  }

  return (
    <div className="signup-stage signup-stage--two">
      <div className="signup-form-content">
        <div className="signup-fields">
          <ErrorField
            label="شماره تلفن"
            error={errors.phone}
            id="phone"
            disabled={!isActive}
            type="tel"
            value={phone}
            onChange={e => {
              setPhone(e.target.value)
              if (errors.phone) setErrors({ ...errors, phone: getErrors({ email, phone: e.target.value }).phone })
            }}
            placeholder="شماره تلفن"
            autoComplete="tel"
          />

          <ErrorField
            label="ایمیل"
            error={errors.email}
            id="email"
            disabled={!isActive}
            type="email"
            value={email}
            onChange={e => {
              setEmail(e.target.value)
              if (errors.email) setErrors({ ...errors, email: getErrors({ phone, email: e.target.value }).email })
            }}
            placeholder="ایمیل"
            autoComplete="email"
            dir="ltr"
          />
        </div>
      </div>

      <FormActions onNext={validate} onBack={onBack} disabled={!isActive} />
    </div>
  )
}

export default Stage2
