import HeaderBtn from '../Reusable/HeaderBtn'
import { articleIndexPath } from '../Article/articleData.js'

const items = [
  { label: 'خانه', to: '/ghizilchi/' },
  { label: 'ویترین', to: '/ghizilchi/showcase' },
  { label: 'آبشده', to: '/ghizilchi/melted' },
  { label: 'مقالات', to: articleIndexPath, end: false },
  { label: 'سوالات متداول', to: '/ghizilchi/common-questions'  },
  { label: 'درباره ما', to: '/ghizilchi/about' },
  { label: 'ورود', to: '/ghizilchi/login' },
  { label: 'ثبت‌نام', to: '/ghizilchi/signup' },
]

export default function Navbar() {
  return (
    <nav aria-label="منوی اصلی" className="flex flex-wrap items-center justify-center gap-1">
      {items.map(({ label, to, end }) => (
        <HeaderBtn key={label} to={to} end={end}>{label}</HeaderBtn>
      ))}
    </nav>
  )
}
