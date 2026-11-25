const formatWeight = new Intl.NumberFormat('fa-IR', { maximumFractionDigits: 3 })

export default function MeltedGoldCard({ product }) {
  const { weight, assayCode } = product

  return (
    <article className="group h-full overflow-hidden rounded-(--radius-card) border border-solid border-(--color-ivory-200) bg-(--color-ivory-50) transition-colors hover:border-(--color-gold-500)">
      <div className="grid aspect-[4/3] place-items-center overflow-hidden bg-linear-to-br from-(--color-ivory-100) to-(--color-gold-200)" aria-hidden="true">
        <svg viewBox="0 0 120 88" className="w-3/5 max-w-32 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:-translate-y-1" fill="none">
          <ellipse cx="59" cy="73" rx="39" ry="6" fill="var(--color-gold-700)" opacity=".16" />
          <path d="M22 45 34 27l34-8 24 13 8 24-15 15-40 2-22-12Z" fill="var(--color-gold-700)" />
          <path d="m22 45 12-18 34-8 24 13-15 18-35 9Z" fill="var(--color-gold-400)" />
          <path d="m42 59 35-9 15-18 8 24-15 15-40 2Z" fill="var(--color-gold-600)" />
          <path d="m34 27 34-8 24 13-29 3-21 24-20-14Z" fill="var(--color-gold-500)" />
          <path d="m34 27 29 8 29-3M63 35 42 59l35-9 8 21" stroke="var(--color-gold-200)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M97 11v14m-7-7h14M21 20v8m-4-4h8" stroke="var(--color-gold-700)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div className="p-3 sm:p-5">
        <h2 className="mb-3 text-sm font-extrabold text-(--color-emerald-950) sm:text-base">طلای آبشده</h2>
        <dl className="m-0 space-y-2 text-sm">
          <div className="flex flex-wrap justify-between gap-x-2">
            <dt className="font-semibold text-(--color-emerald-800)">وزن</dt>
            <dd className="m-0"><bdi>{formatWeight.format(weight)}</bdi> گرم</dd>
          </div>
          <div className="flex flex-wrap justify-between gap-x-2 border-x-0 border-t border-b-0 border-solid border-(--color-ivory-200) pt-2">
            <dt className="font-semibold text-(--color-emerald-800)">شماره انگ</dt>
            <dd className="m-0 font-semibold"><bdi>{assayCode}</bdi></dd>
          </div>
        </dl>
      </div>
    </article>
  )
}
