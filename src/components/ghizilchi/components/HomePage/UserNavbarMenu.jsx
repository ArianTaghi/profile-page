import { useEffect, useId, useRef, useState } from 'react'
import { UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'

const profileLinks = [
  { label: 'سفارش‌ها', to: '/ghizilchi/profile/orders' },
  { label: 'علاقه‌مندی‌ها', to: '/ghizilchi/profile/favorites' },
  { label: 'ویرایش', to: '/ghizilchi/profile/edit' },
  { label: 'خلاصه فعالیت', to: '/ghizilchi/profile' },
]

const menuLinkClass = 'flex min-h-10 items-center rounded-[10px] px-2.5 text-(--color-emerald-950) no-underline transition-colors hover:bg-(--color-ivory-100) hover:text-(--color-emerald-950)'

export default function UserNavbarMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const menuId = useId()
  const containerRef = useRef(null)
  const triggerRef = useRef(null)

  function closeMenu() {
    setIsOpen(false)
  }

  useEffect(() => {
    if (!isOpen) return

    function handleOutsidePress(event) {
      if (!containerRef.current?.contains(event.target)) setIsOpen(false)
    }

    document.addEventListener('pointerdown', handleOutsidePress)
    return () => document.removeEventListener('pointerdown', handleOutsidePress)
  }, [isOpen])

  return (
    <div
      ref={containerRef}
      className="relative"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) closeMenu()
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && isOpen) {
          closeMenu()
          triggerRef.current?.focus()
        }
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        className="site-navbar-icon"
        aria-label="منوی کاربر"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((open) => !open)}
      >
        <UserRound size={19} aria-hidden="true" />
      </button>

      <nav
        id={menuId}
        hidden={!isOpen}
        aria-label="دسترسی سریع پروفایل"
        className="site-navbar-user-menu absolute z-30 w-48 rounded-(--radius-control) border border-solid border-(--color-ivory-300) bg-(--color-ivory-50) p-2"
      >
        <Link to="/ghizilchi/profile" className={`${menuLinkClass} gap-2 text-base font-extrabold`} onClick={closeMenu}>
          <UserRound size={17} aria-hidden="true" />
          آرین طاقی
        </Link>
        <div className="site-navbar-menu-divider" aria-hidden="true" />
        {profileLinks.map(({ label, to }) => (
          <Link key={label} to={to} className={`${menuLinkClass} text-sm font-semibold`} onClick={closeMenu}>
            {label}
          </Link>
        ))}
      </nav>
    </div>
  )
}
