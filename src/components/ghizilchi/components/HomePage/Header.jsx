import { Link } from 'react-router-dom'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className="border-b border-solid border-(--color-ivory-200) bg-(--color-ivory-50)">
      <div className="grid items-center gap-2 px-3 py-2 sm:px-5 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        <Link to="/ghizilchi/" className="inline-flex items-center justify-self-start gap-3 text-(--color-emerald-950) no-underline hover:text-(--color-emerald-700)">
          <span className="grid size-8 place-items-center rounded-(--radius-control) bg-(--color-emerald-900) text-(--color-gold-400)" aria-hidden="true">
            <i className="bi bi-gem" />
          </span>
          <span className="text-lg font-extrabold">قیزیلچی</span>
        </Link>
        <Navbar />
      </div>
    </header>
  )
}
