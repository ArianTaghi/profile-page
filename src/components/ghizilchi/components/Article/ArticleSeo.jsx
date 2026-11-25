import { useEffect } from 'react'
import { getArticleHead } from './articleHead'

export default function ArticleSeo({ article, missing }) {
  useEffect(() => {
    const head = document.head
    const title = head.querySelector('title')
    const previousTitle = title?.getAttribute('data-article-base-title') ?? document.title
    const siteUrl = head.querySelector('meta[name="qizilchi-site-url"]')?.content || window.location.origin
    const metadata = getArticleHead(article, { siteUrl, missing })
    const previousTags = []
    const newTags = []

    for (const template of head.querySelectorAll('template[data-article-original-head]')) {
      previousTags.push(...template.content.children)
      template.remove()
    }
    head.querySelectorAll('[data-article-seo]').forEach((tag) => tag.remove())
    title?.removeAttribute('data-article-base-title')
    document.title = metadata.title

    for (const { tag, attrs } of metadata.tags) {
      const [[key, value], [, content]] = Object.entries(attrs)
      if (content == null) continue
      for (const existing of head.querySelectorAll(tag + '[' + key + '="' + value + '"]')) {
        previousTags.push(existing)
        existing.remove()
      }
      const element = document.createElement(tag)
      for (const [name, attrValue] of Object.entries(attrs)) element.setAttribute(name, attrValue)
      head.append(element)
      newTags.push(element)
    }

    if (metadata.structuredData) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = metadata.structuredData
      head.append(script)
      newTags.push(script)
    }

    return () => {
      document.title = previousTitle
      newTags.forEach((tag) => tag.remove())
      head.append(...previousTags)
    }
  }, [article, missing])

  return null
}
