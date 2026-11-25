import AuthFrame from '../Reusable/AuthFrame'
import { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import ErrorField from '../Reusable/ErrorField'
import AuthBottuns from '../Reusable/AuthBottuns'
import '../Css/AuthPage/Login.css'

export default function Login() {
  const navigate = useNavigate()
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [notice, setNotice] = useState('')

  const submit = (event) => {
    event.preventDefault()
    const nextErrors = {}
    if (!username.trim()) nextErrors.username = 'نام کاربری را وارد کنید'
    if (!password) nextErrors.password = 'رمز عبور را وارد کنید'
    setErrors(nextErrors)
    if(!Object.keys(nextErrors).length)
      navigate('/ghizilchi/')
    }

  return <AuthFrame>
    <section className="signup-page auth-card relative isolate flex flex-col mx-auto overflow-hidden" aria-labelledby="login-heading">
      <div className="auth-card-content flex flex-1 flex-col justify-center">
        <header className="mb-8 text-center">
          <h1 id="login-heading" className="signup-title signup-title--auth m-0 font-extrabold text-[color:var(--color-emerald-950)]">ورود به حساب</h1>
          <p className="mt-3 text-[12px] text-[color:var(--color-muted)]">اطلاعات حساب کاربری خود را وارد کنید.</p>
        </header>
        <form onSubmit={submit} noValidate>
          <div className="signup-fields">
            <ErrorField id="login-username" label="نام کاربری" placeholder="نام کاربری" autoComplete="username" value={username} error={errors.username} onChange={e => { setUsername(e.target.value); setErrors(prev => ({ ...prev, username: '' })); setNotice('') }} />
            <ErrorField id="login-password" label="رمز عبور" placeholder="رمز عبور" type="password" autoComplete="current-password" value={password} error={errors.password} onChange={e => { setPassword(e.target.value); setErrors(prev => ({ ...prev, password: '' })); setNotice('') }} />
          </div>
          {notice && <p className="mt-4 text-center text-[11px] leading-6 text-[color:var(--color-emerald-700)]" role="status">{notice}</p>}
          <div className="signup-actions"><AuthBottuns type="submit">ورود</AuthBottuns></div>
        </form>
        <p className="mt-7 text-center text-[12px] text-[color:var(--color-muted)]">حساب کاربری ندارید؟ <Link className="auth-text-link" to="/ghizilchi/signup">ثبت‌نام کنید</Link></p>
        <Link className="auth-text-link mt-3 text-center text-[11px]" to="/ghizilchi/auth">بازگشت به انتخاب ورود یا ثبت‌نام</Link>
      </div>
    </section>
  </AuthFrame>
}
