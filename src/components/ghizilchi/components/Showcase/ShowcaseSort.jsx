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
      {sortOptions.map((option) => {
        const isSelected = option === selectedSort
        return (
          <button
            key={option}
            type="button"
            aria-pressed={isSelected}
            onClick={() => setSelectedSort(option)}
            className={`min-h-8 shrink-0 rounded-md border-0 px-1.5 text-xs font-semibold whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-(--color-emerald-700) focus-visible:-outline-offset-2 sm:px-3 ${isSelected
              ? 'bg-(--color-emerald-700) text-(--color-ivory-50)'
              : 'bg-transparent text-gray-600 hover:bg-(--color-ivory-100)'}`}
          >
            {option}
          </button>
        )
      })}
    </div>
  )
}
