import { Bell, Moon, Search, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import UserNavbarMenu from '../HomePage/UserNavbarMenu'

export default function TopNavbar() {
  return (
    <div className="site-navbar-top mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
      <Link
        to="/ghizilchi/"
        className="site-navbar-brand inline-flex w-fit items-center gap-2 rounded-(--radius-control) text-(--color-emerald-950) no-underline hover:text-(--color-emerald-700) sm:gap-3"
      >
        <span className="grid size-9 shrink-0 place-items-center rounded-(--radius-control) bg-(--color-emerald-900) text-(--color-gold-400) sm:size-10" aria-hidden="true">
          <i className="bi bi-gem" />
        </span>
        <span className="whitespace-nowrap text-base font-extrabold sm:text-lg">قیزیلچی</span>
      </Link>

      <div className="site-navbar-search flex min-w-0 items-center gap-1.5 rounded-(--radius-control) border border-solid border-(--color-ivory-300) bg-(--color-ivory-100) p-1">
        <input
          type="search"
          aria-label="جست‌وجوی سراسری"
          placeholder="جست‌وجوی سراسری"
          className="site-navbar-search-input min-w-0 flex-1 bg-transparent px-2 text-sm text-(--color-text) sm:px-3"
        />
        <Link
          to="/ghizilchi/showcase"
          className="inline-flex h-9 shrink-0 items-center rounded-[10px] bg-(--color-gold-200) px-3 text-xs font-bold text-(--color-emerald-950) no-underline transition-colors hover:bg-(--color-gold-400) hover:text-(--color-emerald-950)"
        >
          ویترین
        </Link>
        <button type="button" className="site-navbar-icon site-navbar-search-button" aria-label="جست‌وجو">
          <Search size={18} aria-hidden="true" />
        </button>
      </div>

      <div className="site-navbar-actions flex items-center justify-self-end gap-0.5 sm:gap-2">
        <button type="button" className="site-navbar-icon" aria-label="حالت شب">
          <Moon size={19} aria-hidden="true" />
        </button>
        <Link to="/ghizilchi/profile/messages" className="site-navbar-icon" aria-label="پیام‌ها">
          <Bell size={19} aria-hidden="true" />
        </Link>
        <UserNavbarMenu />
        <Link to="/ghizilchi/cart" className="site-navbar-icon" aria-label="پیام‌ها">
          <ShoppingCart size={19} aria-hidden="true" />
        </Link>
      </div>
    </div>
  )
}
