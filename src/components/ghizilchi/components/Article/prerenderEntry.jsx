import { renderToString } from 'react-dom/server'
import { Route, Routes, StaticRouter } from 'react-router-dom'
import GhizilchiDemo from '../../../GhizilchiDemo.jsx'
import { articleIndexPath, articlePath, articles } from './articleData.js'
import { getArticleHead } from './articleHead'

export function renderArticlePages(siteUrl) {
  return [null, ...articles].map((article) => {
    const path = article ? articlePath(article.slug) : articleIndexPath
    return {
      path,
      head: getArticleHead(article, { siteUrl }),
      html: renderToString(
        <StaticRouter location={path}>
          <Routes><Route path="/ghizilchi/*" element={<GhizilchiDemo />} /></Routes>
        </StaticRouter>,
      ),
    }
  })
}
