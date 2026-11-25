import { MapPin, Pencil } from 'lucide-react'

export default function AddressListCard({ address }) {
  const { title, street } = address

  return (
    <article className="flex min-w-0 items-start gap-3 rounded-(--radius-control) border-[1px] border-solid border-(--color-ivory-300) bg-(--color-ivory-50) p-3 sm:items-center sm:p-4">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-(--color-gold-200) text-(--color-emerald-950)">
        <MapPin size={19} aria-hidden="true" />
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="mb-1 text-sm font-extrabold break-words text-(--color-emerald-950) sm:text-base">{title}</h3>
        <p className="m-0 text-sm leading-relaxed break-words text-(--color-emerald-800)">{street}</p>
      </div>
      <button
        type="button"
        disabled
        aria-label={`ویرایش نشانی ${title}`}
        className="grid size-11 shrink-0 place-items-center rounded-xl border-[1px] border-solid border-(--color-ivory-300) bg-(--color-ivory-100) text-(--color-emerald-700)"
      >
        <Pencil size={17} aria-hidden="true" />
      </button>
    </article>
  )
}
