const persianName = /^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیءئؤ\s\u200c]+$/

function getNameError(value, label) {
  const trimmed = value.trim()
  const length = trimmed.replace(/[\s\u200c]/g, '').length

  if (!trimmed) return `${label} را وارد کنید`
  if (length < 2) return `${label} باید حداقل دو حرف داشته باشد`
  if (length > 20) return `${label} نامعتبر است`
  if (!persianName.test(trimmed)) return `${label} فقط باید شامل حروف فارسی باشد`
}

export function getNameErrors({ name, lastName }) {
  const errors = {}
  const nameError = getNameError(name, 'نام')
  const lastNameError = getNameError(lastName, 'نام خانوادگی')
  if (nameError) errors.name = nameError
  if (lastNameError) errors.lastName = lastNameError
  return errors
}

export function getContactErrors({ phone, email }) {
  const errors = {}
  const trimmedPhone = phone.trim()
  const trimmedEmail = email.trim()

  if (!trimmedPhone) {
    errors.phone = 'شماره تلفن را وارد کنید'
  } else if (!/^[0-9+]+$/.test(trimmedPhone)) {
    errors.phone = 'شماره تلفن فقط می‌تواند شامل اعداد و علامت + باشد'
  } else if (!/^(09\d{9}|\+989\d{9})$/.test(trimmedPhone)) {
    errors.phone = 'شماره تلفن را صحیح وارد کنید'
  }

  if (!trimmedEmail) {
    errors.email = 'ایمیل را وارد کنید'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    errors.email = 'لطفاً یک آدرس ایمیل معتبر وارد کنید'
  }

  return errors
}
