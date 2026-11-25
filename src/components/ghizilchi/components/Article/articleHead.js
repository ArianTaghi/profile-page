import { articleIndexPath, articlePath } from './articleData.js'

export function getArticleHead(article, { siteUrl, missing = false } = {}) {
  const title = missing
    ? 'مقاله پیدا نشد | قیزیلچی'
    : article ? article.title + ' | قیزیلچی' : 'مقالات طلا و سکه | قیزیلچی'
  const description = missing
    ? null
    : article?.description ?? 'راهنماهای قیزیلچی دربارهٔ سکه، طلای آبشده، استعلام انگ، ری‌گیری، پس‌انداز طلا و محاسبهٔ قیمت.'
  const path = article ? articlePath(article.slug) : articleIndexPath
  const canonical = siteUrl && !missing ? new URL(path, siteUrl).href : null
  const image = article && siteUrl ? new URL(article.image, siteUrl).href : null
  const structuredData = article ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description,
    inLanguage: 'fa',
    datePublished: article.date,
    author: { '@type': 'Organization', name: 'قیزیلچی' },
    ...(canonical && { mainEntityOfPage: canonical }),
    ...(image && { image }),
  } : null

  return {
    title,
    tags: [
      { tag: 'meta', attrs: { name: 'description', content: description } },
      { tag: 'meta', attrs: { name: 'robots', content: missing ? 'noindex' : null } },
      { tag: 'link', attrs: { rel: 'canonical', href: canonical } },
      { tag: 'meta', attrs: { property: 'og:title', content: missing ? null : title } },
      { tag: 'meta', attrs: { property: 'og:description', content: description } },
      { tag: 'meta', attrs: { property: 'og:type', content: missing ? null : article ? 'article' : 'website' } },
      { tag: 'meta', attrs: { property: 'og:url', content: canonical } },
      { tag: 'meta', attrs: { property: 'og:image', content: image } },
      { tag: 'meta', attrs: { property: 'og:image:alt', content: image ? article.imageAlt : null } },
    ],
    structuredData: structuredData && JSON.stringify(structuredData).replace(/</g, '\\u003c'),
  }
}
