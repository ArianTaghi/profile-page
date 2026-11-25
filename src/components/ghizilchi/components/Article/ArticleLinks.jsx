import { ArrowLeft, BookOpenText } from 'lucide-react'
import { Link } from 'react-router-dom'
import { articlePath, findArticle } from './articleData.js'

export default function ArticleLinks({ slugs }) {
  return (
    <aside aria-label="راهنمای مطالعه" className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 rounded-(--radius-control) border border-solid border-(--color-ivory-200) bg-(--color-ivory-50) px-4 py-3 sm:px-6">
      <span className="inline-flex items-center gap-2 text-sm font-extrabold text-(--color-emerald-950)">
        <BookOpenText size={18} aria-hidden="true" /> راهنمای مطالعه
      </span>
      {slugs.map(findArticle).filter(Boolean).map((article) => (
        <Link key={article.slug} to={articlePath(article.slug)} className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-(--color-emerald-800) underline-offset-4 hover:text-(--color-emerald-950)">
          {article.title} <ArrowLeft size={15} aria-hidden="true" />
        </Link>
      ))}
    </aside>
  )
}
