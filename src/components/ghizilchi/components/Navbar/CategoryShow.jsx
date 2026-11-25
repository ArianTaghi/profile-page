import { useId, useState } from 'react'
import { ChevronDown, ChevronLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export const categoryData = {
  category: ['گردنبند', 'انگشتر', 'گوشواره', 'دستبند', 'نیم ست', 'تمام ست', 'پابند'],
}

export default function CategoryShow() {
  const [isOpen, setIsOpen] = useState(false)
  const menuId = useId()

  return (
    <div
      className="relative"
      onPointerEnter={() => setIsOpen(true)}
      onPointerLeave={(event) => {
        if (event.pointerType !== 'touch') setIsOpen(false)
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false)
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && isOpen) {
          event.currentTarget.querySelector('button').focus()
          setIsOpen(false)
        }
      }}
    >
      <button
        type="button"
        aria-controls={menuId}
        aria-expanded={isOpen}
        onFocus={(event) => {
          if (event.currentTarget.matches(':focus-visible')) setIsOpen(true)
        }}
        className="inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded-(--radius-control) border-0 bg-(--color-gold-200) px-3 text-sm font-bold text-(--color-emerald-950) transition-colors hover:bg-(--color-gold-400) sm:px-4"
      >
        دسته‌بندی
        <ChevronDown size={15} aria-hidden="true" />
      </button>
      <ul
        id={menuId}
        hidden={!isOpen}
        className="absolute start-0 top-full z-30 m-0 w-48 list-none rounded-(--radius-control) border border-solid border-(--color-ivory-300) bg-(--color-ivory-50) p-1.5 shadow-lg"
      >
        {categoryData.category.map((category) => (
          <li key={category}>
            <Link
              to="/ghizilchi/showcase"
              onClick={() => setIsOpen(false)}
              className="flex min-h-10 items-center justify-between gap-3 rounded-lg px-3 text-sm font-semibold text-(--color-emerald-950) no-underline hover:bg-(--color-ivory-100) hover:text-(--color-emerald-950)"
            >
              {category}
              <ChevronLeft size={16} className="shrink-0 text-(--color-gold-700)" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
