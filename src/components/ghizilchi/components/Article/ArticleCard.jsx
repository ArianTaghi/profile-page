import { ArrowLeft, Clock3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { articleCategories, articlePath, articleReadingTime, formatArticleDate } from './articleData.js'

export default function ArticleCard({ article, featured = false }) {
  return (
    <article className={'article-card' + (featured ? ' article-card--featured' : '')}>
      <Link className="article-card__link" to={articlePath(article.slug)}>
        <img
          className="article-card__cover"
          src={article.image}
          alt=""
          loading={featured ? 'eager' : 'lazy'}
          decoding="async"
        />
        <div className="article-card__body">
          <span className="article-label">{articleCategories[article.category]}</span>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <div className="article-card__footer">
            <span className="article-card__meta">
              <Clock3 size={14} aria-hidden="true" />
              {articleReadingTime(article.content)}
              <span aria-hidden="true">·</span>
              <time dateTime={article.date}>{formatArticleDate(article.date)}</time>
            </span>
            <ArrowLeft className="article-card__arrow" size={20} aria-hidden="true" />
          </div>
        </div>
      </Link>
    </article>
  )
}
