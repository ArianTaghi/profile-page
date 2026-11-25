import { useEffect } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpLeft, Clock3, List } from 'lucide-react'
import { Link, useLocation, useParams } from 'react-router-dom'
import ArticleBody, { getArticleSections } from './ArticleBody'
import ArticleSeo from './ArticleSeo'
import {
  articleCategories,
  articleIndexPath,
  articlePath,
  articleReadingTime,
  findArticle,
  formatArticleDate,
} from './articleData.js'
import '../Css/Article/Article.css'

export default function ArticleDetail() {
  const { slug } = useParams()
  const { hash } = useLocation()
  const article = findArticle(slug)

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [slug, hash])

  const backLink = (
    <Link to={articleIndexPath} className="article-back">
      <ArrowRight size={17} aria-hidden="true" /> همهٔ مقالات
    </Link>
  )

  if (!article) {
    return (
      <section className="article-empty" aria-labelledby="missing-article-heading">
        <ArticleSeo missing />
        <h1 id="missing-article-heading">مقاله پیدا نشد</h1>
        {backLink}
      </section>
    )
  }

  const sections = getArticleSections(article.content)
  return (
    <div className="article-detail">
      <ArticleSeo article={article} />
      {backLink}
      <article aria-labelledby="article-heading">
        <header className="article-detail__hero">
          <div className="article-detail__intro">
            <span className="article-label">{articleCategories[article.category]}</span>
            <h1 id="article-heading">{article.title}</h1>
            <p>{article.description}</p>
            <div className="article-detail__meta">
              <Clock3 size={16} aria-hidden="true" />
              <span>{articleReadingTime(article.content)}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={article.date}>{formatArticleDate(article.date)}</time>
            </div>
          </div>
          <img src={article.image} alt={article.imageAlt} fetchPriority="high" />
        </header>

        <div className="article-detail__layout">
          <nav className="article-toc" aria-labelledby="article-toc-heading">
            <h2 id="article-toc-heading"><List size={18} aria-hidden="true" /> در این مقاله</h2>
            <ul>
              {sections.map(({ id, title }) => <li key={id}><Link to={'#' + id}>{title}</Link></li>)}
            </ul>
          </nav>
          <div className="article-detail__paper">
            <ArticleBody content={article.content} sections={sections} />
            <section className="article-sources" aria-labelledby="article-sources-heading">
              <h2 id="article-sources-heading">منابع</h2>
              <ul>
                {article.sources.map(([label, url]) => (
                  <li key={url}><a href={url}>{label}<ArrowUpLeft size={15} aria-hidden="true" /></a></li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </article>

      <section className="article-related" aria-labelledby="article-related-heading">
        <h2 id="article-related-heading">مقالات مرتبط</h2>
        <ul>
          {article.related.map(findArticle).filter(Boolean).map((related) => (
            <li key={related.slug}>
              <Link to={articlePath(related.slug)}>
                <img src={related.image} alt="" loading="lazy" decoding="async" />
                <span>{related.title}</span>
                <ArrowLeft size={18} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
