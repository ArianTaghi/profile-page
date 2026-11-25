export default function OrderListCard({ product }) {
  const { name, category, image, price } = product

  return (
    <article className="flex min-w-0 items-center gap-3 rounded-(--radius-control) border-[1px] border-solid border-(--color-ivory-300) bg-(--color-ivory-50) p-2.5 sm:gap-4 sm:p-3">
      <img
        src={image}
        alt=""
        width="88"
        height="88"
        loading="lazy"
        decoding="async"
        className="size-16 shrink-0 rounded-xl bg-(--color-ivory-200) object-cover sm:size-[88px]"
      />
      <div className="flex min-w-0 flex-1 flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="mb-1 text-xs font-bold text-(--color-emerald-700)">{category}</p>
          <h3 className="m-0 text-sm leading-relaxed font-extrabold break-words text-(--color-emerald-950) sm:text-base">{name}</h3>
        </div>
        <p className="m-0 inline-flex max-w-full flex-wrap items-baseline gap-x-1.5 rounded-lg bg-(--color-gold-200) px-2.5 py-1 text-sm font-extrabold text-(--color-emerald-950)">
          <bdi>{price.toLocaleString('fa-IR')}</bdi>
          <span className="text-xs font-semibold">تومان</span>
        </p>
      </div>
    </article>
  )
}
