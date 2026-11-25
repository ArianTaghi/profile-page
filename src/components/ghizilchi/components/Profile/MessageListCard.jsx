import { Mail } from 'lucide-react'

export default function MessageListCard({ message }) {
  const { title, body } = message

  return (
    <article className="flex min-w-0 items-center gap-3 rounded-(--radius-control) border-[1px] border-solid border-(--color-ivory-300) bg-(--color-ivory-50) px-3 py-2.5 sm:px-4">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-(--color-gold-200) text-(--color-emerald-950)">
        <Mail size={18} aria-hidden="true" />
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="mb-1 text-sm font-extrabold break-words text-(--color-emerald-950)">{title}</h3>
        <p className="m-0 truncate text-sm leading-relaxed text-(--color-emerald-800)">{body}</p>
      </div>
    </article>
  )
}
