import AuthFrame from '../Reusable/AuthFrame'
import { Link } from 'react-router-dom'
import '../Css/AuthPage/AuthPage.css'

export default function AuthPage() {
  return <AuthFrame>
    <section className="signup-page auth-card relative isolate flex flex-col mx-auto overflow-hidden" aria-labelledby="auth-heading">
      <div className="auth-card-content flex flex-1 flex-col items-center justify-center text-center">
        <div className="auth-emblem mb-5 grid size-14 place-items-center rounded-2xl text-2xl" aria-hidden="true">✦</div>
        <h1 id="auth-heading" className="signup-title signup-title--auth m-0 font-extrabold text-[color:var(--color-emerald-950)]">خوش آمدید</h1>
        <p className="mt-3 mb-9 text-[12px] leading-7 text-[color:var(--color-muted)]">برای ادامه، وارد حساب کاربری خود شوید یا حساب جدید بسازید.</p>
        <div className="flex w-full flex-col gap-3">
          <Link className="signup-button signup-button--primary auth-link" to="/ghizilchi/login">ورود به حساب کاربری</Link>
          <Link className="signup-button signup-button--secondary auth-link" to="/ghizilchi/signup">ایجاد حساب جدید</Link>
        </div>
      </div>
    </section>
  </AuthFrame>
}
