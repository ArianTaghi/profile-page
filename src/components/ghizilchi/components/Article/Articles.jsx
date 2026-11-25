import { useEffect, useState } from 'react'
import { Search, X } from 'lucide-react'
import ArticleCard from './ArticleCard'
import ArticleSeo from './ArticleSeo'
import { articleCategories, articles } from './articleData.js'
import '../Css/Article/Article.css'

function normalizeSearch(value) {
  return value.normalize('NFKC').toLocaleLowerCase('fa')
    .replace(/ي|ى/g, 'ی')
    .replace(/ك/g, 'ک')
    .replace(/\p{M}/gu, '')
    .replace(/[^\p{L}\p{N}]/gu, '')
}

const categories = [['all', 'همهٔ مقالات'], ...Object.entries(articleCategories)]
const searchableArticles = articles.map((article) => ({
  article,
  text: normalizeSearch([article.title, article.description, articleCategories[article.category], article.content].join(' ')),
}))

export default function Articles() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const terms = query.trim().split(/\s+/).map(normalizeSearch).filter(Boolean)
  const visibleArticles = searchableArticles
    .filter(({ article, text }) => (category === 'all' || category === article.category) &&
      terms.every((term) => text.includes(term)))
    .map(({ article }) => article)

  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0)
  }, [])

  return (
    <section className="article-library" aria-labelledby="articles-heading">
      <ArticleSeo />
      <h1 id="articles-heading" className="sr-only">مقالات قیزیلچی</h1>

      <div className="article-toolbar">
        <div className="article-filters" role="group" aria-label="دسته‌بندی مقالات">
          {categories.map(([id, label]) => (
            <button key={id} type="button" aria-pressed={category === id} onClick={() => setCategory(id)}>
              {label}
            </button>
          ))}
        </div>
        <div className="article-search" role="search" aria-label="جست‌وجو در مقالات">
          <Search size={19} aria-hidden="true" />
          <input
            type="search"
            aria-label="جست‌وجو در مقالات"
            placeholder="عنوان یا موضوع مقاله"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          {query && <button type="button" aria-label="پاک کردن جست‌وجو" onClick={() => setQuery('')}><X size={18} /></button>}
        </div>
      </div>

      <p className="visually-hidden" role="status">{visibleArticles.length.toLocaleString('fa-IR')} مقاله پیدا شد</p>
      {visibleArticles.length > 0 ? (
        <div className="article-grid">
          {visibleArticles.map((article, index) => (
            <ArticleCard key={article.slug} article={article} featured={!terms.length && category === 'all' && index === 0} />
          ))}
        </div>
      ) : (
        <div className="article-empty">
          <p>مقاله‌ای با این جست‌وجو پیدا نشد.</p>
          <button type="button" onClick={() => { setQuery(''); setCategory('all') }}>دیدن همهٔ مقالات</button>
        </div>
      )}
    </section>
  )
}
