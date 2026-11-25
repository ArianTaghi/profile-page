const formatPrice = new Intl.NumberFormat('fa-IR')

export default function ProductCard({ product }) {
  const { name, category, image, price } = product

  return (
    <article className="group h-full overflow-hidden rounded-(--radius-card) border-[1px] border-solid border-(--color-ivory-200) bg-(--color-ivory-50) transition-colors hover:border-(--color-gold-500)">
      <div className="aspect-[4/3] overflow-hidden bg-(--color-ivory-200)">
        <img
          src={image}
          alt={name}
          loading="lazy"
          decoding="async"
          className="block size-full object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105"
        />
      </div>
      <div className="p-3 sm:p-5">
        <p className="mb-2 text-xs font-bold text-(--color-emerald-700)">{category}</p>
        <h3 className="mb-3 text-sm font-extrabold leading-6 text-(--color-emerald-950) sm:text-base">{name}</h3>
        <p className="mb-0 inline-flex flex-wrap items-baseline gap-x-1.5 rounded-(--radius-control) bg-(--color-gold-200) px-3 py-1.5 text-sm font-extrabold text-(--color-emerald-950)">
          <bdi>{formatPrice.format(price)}</bdi>
          <span className="text-xs font-semibold">تومان</span>
        </p>
      </div>
    </article>
  )
}
