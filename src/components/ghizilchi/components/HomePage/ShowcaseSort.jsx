import { useState } from 'react'
import { ArrowDownWideNarrow } from 'lucide-react'

const sortOptions = ['گران‌ترین', 'ارزان‌ترین', 'سبک‌ترین', 'سنگین‌ترین']

export default function ShowcaseSort() {
  const [selectedSort, setSelectedSort] = useState(sortOptions[0])

  return (
    <div
      role="group"
      aria-label="ترتیب نمایش کالاها"
      className="flex flex-nowrap items-center gap-1 overflow-x-auto rounded-(--radius-control) border border-solid border-(--color-ivory-300) bg-(--color-ivory-50) px-2 py-1 sm:gap-2 sm:px-3"
    >
      <ArrowDownWideNarrow size={17} className="me-1 shrink-0 text-(--color-emerald-700)" aria-hidden="true" />
      {sortOptions.map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={option === selectedSort}
          onClick={() => setSelectedSort(option)}
          className={`min-h-8 shrink-0 rounded-md border px-1.5 text-xs font-semibold whitespace-nowrap transition-all duration-200 focus-visible:outline-2 focus-visible:outline-(--color-emerald-700) focus-visible:-outline-offset-2 sm:px-3 ${
            option === selectedSort
              ? 'border-(--color-emerald-700) bg-(--color-emerald-700) text-(--color-white) shadow-sm'
              : 'border-transparent bg-transparent text-(--color-muted) hover:border-(--color-ivory-300) hover:bg-(--color-ivory-100) hover:text-(--color-emerald-900)'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
