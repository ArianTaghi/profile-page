import { CalendarDays, Heart, ShoppingBag } from 'lucide-react'

const stats = [
  { label: 'تعداد سفارش‌ها', value: '۲', icon: ShoppingBag },
  { label: 'سابقهٔ عضویت', value: '۶ ماه', icon: CalendarDays },
  { label: 'کالاهای موردعلاقه', value: '۱', icon: Heart },
]

export default function ActivityOverview() {
  return (
    <dl className="m-0 grid grid-cols-1 gap-3 min-[520px]:grid-cols-2 min-[840px]:grid-cols-3">
      {stats.map(({ label, value, icon: Icon }) => (
        <div key={label} className="rounded-(--radius-control) border-[1px] border-solid border-(--color-ivory-300) bg-(--color-ivory-50) p-3 sm:p-4">
          <dt className="flex items-center gap-2 text-sm font-bold text-(--color-emerald-800)">
            <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-(--color-gold-200) text-(--color-emerald-950)">
              <Icon size={17} aria-hidden="true" />
            </span>
            {label}
          </dt>
          <dd className="mt-2 mb-0 text-2xl font-extrabold text-(--color-emerald-950)">{value}</dd>
        </div>
      ))}
    </dl>
  )
}
