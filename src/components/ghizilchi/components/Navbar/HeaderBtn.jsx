import { NavLink } from 'react-router-dom'

const baseClass = 'inline-flex min-h-11 items-center whitespace-nowrap rounded-(--radius-control) px-3 text-sm font-bold no-underline sm:px-4'

export default function HeaderBtn({ to, children, end = true }) {
  if (!to) {
    return (
      <button type="button" disabled className={`${baseClass} cursor-not-allowed border-0 bg-transparent text-(--color-muted)`}>
        {children}
      </button>
    )
  }

  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) => `${baseClass} transition-colors ${isActive
        ? 'bg-(--color-emerald-900) text-(--color-ivory-50) hover:text-(--color-ivory-50)'
        : 'text-(--color-emerald-900) hover:bg-(--color-ivory-100) hover:text-(--color-emerald-900)'}`}
    >
      {children}
    </NavLink>
  )
}
