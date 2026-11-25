import { useState } from 'react'
import AuthBottuns from '../Reusable/AuthBottuns'
import ErrorField from '../Reusable/ErrorField'
import ResultMessage from '../Reusable/ResultMessage'
import { getContactErrors, getNameErrors } from '../Reusable/accountValidation'

const fields = [
  { name: 'lastName', label: 'نام خانوادگی', autoComplete: 'family-name' },
  { name: 'name', label: 'نام', autoComplete: 'given-name' },
  { name: 'phone', label: 'شماره تلفن', type: 'tel', autoComplete: 'tel', dir: 'ltr' },
  { name: 'email', label: 'ایمیل', type: 'email', autoComplete: 'email', dir: 'ltr' },
]

export default function EditInfo({ initialValues = {} }) {
  const [values, setValues] = useState(() => ({
    lastName: initialValues.lastName ?? '',
    name: initialValues.name ?? '',
    phone: initialValues.phone ?? '',
    email: initialValues.email ?? '',
  }))
  const [touched, setTouched] = useState({})
  const [saved, setSaved] = useState(false)
  const errors = { ...getNameErrors(values), ...getContactErrors(values) }

  function handleSubmit(event) {
    event.preventDefault()
    setTouched(Object.fromEntries(fields.map(({ name }) => [name, true])))
    setSaved(true)
  }

  return (
    <form className="profile-edit-form" onSubmit={handleSubmit} noValidate>
      <div className="profile-edit-fields">
        {fields.map(({ name, label, ...inputProps }) => (
          <div className="profile-edit-field" key={name}>
            <ErrorField
              {...inputProps}
              id={`profile-edit-${name}`}
              name={name}
              label={label}
              value={values[name]}
              error={name === 'phone' || touched[name] ? errors[name] : undefined}
              onBlur={() => setTouched(current => ({ ...current, [name]: true }))}
              onChange={event => {
                const value = event.target.value
                setValues(current => ({ ...current, [name]: value }))
                setSaved(false)
              }}
            />
          </div>
        ))}
      </div>

      <AuthBottuns type="submit">ذخیره تغییرات</AuthBottuns>
      <ResultMessage type="success" message={saved ? 'اطلاعات شما ویرایش شد' : ''} />
    </form>
  )
}
