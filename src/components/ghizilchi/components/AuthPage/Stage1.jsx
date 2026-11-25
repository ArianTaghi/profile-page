import React, { useState } from 'react'
import ErrorField from '../Reusable/ErrorField'
import FormActions from '../Reusable/FormActions'
import { getNameErrors as getErrors } from '../Reusable/accountValidation'

const Stage1 = ({ onValidate, inputData, isActive }) => {
  const [errors, setErrors] = useState({})
  const [name, setName] = useState(inputData.name ?? '')
  const [lastName, setLastName] = useState(inputData.lastName ?? '')

  const validate = () => {
    const newErrors = getErrors({ name, lastName })
    setErrors(newErrors)
    onValidate(Object.keys(newErrors).length === 0, { name, lastName })
  }

  return (
    <div className="signup-stage signup-stage--one">
      <div className="signup-form-content">
        <div className="signup-fields">
          <ErrorField
            label="نام"
            error={errors.name}
            id="firstName"
            disabled={!isActive}
            value={name}
            onChange={e => {
              setName(e.target.value)
              if (errors.name) setErrors({ ...errors, name: getErrors({ lastName, name: e.target.value }).name })
            }}
            placeholder="نام"
            autoComplete="given-name"
          />

          <ErrorField
            label="نام خانوادگی"
            error={errors.lastName}
            id="lastName"
            disabled={!isActive}
            value={lastName}
            onChange={e => {
              setLastName(e.target.value)
              if (errors.lastName) setErrors({ ...errors, lastName: getErrors({ name, lastName: e.target.value }).lastName })
            }}
            placeholder="نام خانوادگی"
            autoComplete="family-name"
          />
        </div>
      </div>

      <FormActions onNext={validate} disabled={!isActive} />
    </div>
  )
}

export default Stage1
