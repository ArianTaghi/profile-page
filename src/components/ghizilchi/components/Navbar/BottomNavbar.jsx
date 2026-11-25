import { Phone } from 'lucide-react'
import { articleIndexPath } from '../Article/articleData.js'
import CategoryShow from './CategoryShow'
import HeaderBtn from './HeaderBtn'

const items = [
  { label: 'ویترین', to: '/ghizilchi/showcase' },
  { label: 'آبشده', to: '/ghizilchi/melted' },
  { label: 'مقالات', to: articleIndexPath },
  { label: 'سوالات متداول', to: '/ghizilchi/common-questions' },
  { label: 'درباره ما', to: '/ghizilchi/about' },
  { label: 'تماس با ما', to: '/ghizilchi/contact' },
  { label: 'ورود', to: '/ghizilchi/login' },
  { label: 'ثبت‌نام', to: '/ghizilchi/signup' },
]

export default function BottomNavbar() {
  return (
    <div className="border-t border-solid border-(--color-ivory-200)">
      <div className="site-navbar-bottom mx-auto max-w-7xl items-center gap-x-4 px-3 py-1 sm:px-6 lg:px-8">
        <nav aria-label="منوی اصلی" className="flex min-w-0 flex-wrap items-center gap-x-1">
          <CategoryShow />
          {items.map(({ label, to }) => (
            <HeaderBtn key={to} to={to}>{label}</HeaderBtn>
          ))}
        </nav>
        <a
          href="tel:09149141919"
          className="site-navbar-phone inline-flex min-h-11 items-center gap-2 justify-self-end rounded-(--radius-control) text-sm font-bold text-(--color-emerald-900) no-underline transition-colors hover:text-(--color-emerald-700)"
        >
          <Phone size={16} className="text-(--color-gold-700)" aria-hidden="true" />
          <bdi dir="ltr">09149141919</bdi>
        </a>
      </div>
    </div>
  )
}
