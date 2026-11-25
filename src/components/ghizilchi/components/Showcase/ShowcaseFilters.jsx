import { useState } from 'react'
import { categoryData } from '../Navbar/CategoryShow'
import '../Css/Showcase/ShowcaseFilters.css'

const priceFloor = 10
const priceCeiling = 200
const priceSpan = priceCeiling - priceFloor
const formatPrice = new Intl.NumberFormat('fa-IR')

export default function ShowcaseFilters() {
  const [minPrice, setMinPrice] = useState(priceFloor)
  const [maxPrice, setMaxPrice] = useState(priceCeiling)

  return (
    <aside aria-labelledby="showcase-filters-heading" className="space-y-4 rounded-(--radius-control) border border-solid border-(--color-ivory-300) bg-(--color-ivory-50) p-4 text-sm">
      <h2 id="showcase-filters-heading" className="m-0 text-base font-extrabold text-(--color-emerald-950)">فیلترها</h2>

      <label className="grid gap-2 font-bold">
        دسته‌بندی
        <select defaultValue="" className="min-h-10 w-full rounded-lg border border-solid border-(--color-ivory-300) bg-(--color-ivory-100) px-2 text-sm font-medium text-(--color-text)">
          <option value="">همه دسته‌ها</option>
          {categoryData.category.map((category) => <option key={category}>{category}</option>)}
        </select>
      </label>

      <fieldset className="min-w-0 border-0 p-0">
        <legend className="float-none mb-1 w-auto text-sm font-bold">قیمت</legend>
        <div dir="ltr" className="showcase-price">
          <div className="showcase-price-track" aria-hidden="true">
            <div
              className="showcase-price-fill"
              style={{
                left: `calc((100% - 1rem) * ${(minPrice - priceFloor) / priceSpan})`,
                right: `calc((100% - 1rem) * ${(priceCeiling - maxPrice) / priceSpan})`,
              }}
            />
          </div>
          <input
            type="range"
            aria-label="کمترین قیمت"
            className="showcase-price-min"
            min={priceFloor}
            max={priceCeiling}
            value={minPrice}
            onChange={(event) => setMinPrice(Math.min(event.target.valueAsNumber, maxPrice))}
          />
          <input
            type="range"
            aria-label="بیشترین قیمت"
            className="showcase-price-max"
            min={priceFloor}
            max={priceCeiling}
            value={maxPrice}
            onChange={(event) => setMaxPrice(Math.max(event.target.valueAsNumber, minPrice))}
          />
        </div>
        <div className="flex justify-between gap-1 text-xs font-medium" dir="ltr">
          <span dir="rtl">{formatPrice.format(minPrice)} تومان</span>
          <span dir="rtl">{formatPrice.format(maxPrice)} تومان</span>
        </div>
      </fieldset>
    </aside>
  )
}
