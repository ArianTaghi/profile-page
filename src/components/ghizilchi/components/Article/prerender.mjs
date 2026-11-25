import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { build, resolveConfig } from 'vite'

const suppliedUrl = process.argv[2]
let siteUrl
if (suppliedUrl) {
  const url = new URL(suppliedUrl)
  if (!['http:', 'https:'].includes(url.protocol) || url.href !== url.origin + '/') {
    throw new Error('Pass the site origin only, including https://.')
  }
  siteUrl = url.origin
}

const config = await resolveConfig({}, 'build', 'production')
const output = resolve(config.root, config.build.outDir)
const template = await readFile(join(output, 'index.html'), 'utf8')
const rootPattern = /<div\b([^>]*\bid=(?:"root"|'root')[^>]*)>\s*<\/div>/i
if (!rootPattern.test(template)) {
  throw new Error('Expected an empty div#root in the built index.html. Run the normal Vite build first.')
}

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
})[character])

function fillHead(html, { title, tags, structuredData }) {
  const baseTitle = html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? 'قیزیلچی'
  const additions = []
  html = html.replace(/<title\b[^>]*>[\s\S]*?<\/title>/i, '')

  for (const { tag, attrs } of tags) {
    const [[key, value], [, content]] = Object.entries(attrs)
    if (content == null) continue
    const existing = new RegExp('<' + tag + '\\b[^>]*\\b' + key + '\\s*=\\s*["\']' + value + '["\'][^>]*>', 'gi')
    html = html.replace(existing, (original) => {
      // Preserve the storefront metadata for client-side navigation away from articles.
      return '<template data-article-original-head>' + original + '</template>'
    })
    const attributes = Object.entries(attrs).map(([name, attribute]) => name + '="' + escapeHtml(attribute) + '"').join(' ')
    additions.push('<' + tag + ' data-article-seo ' + attributes + '>')
  }

  if (siteUrl) additions.push('<meta name="qizilchi-site-url" content="' + escapeHtml(siteUrl) + '">')
  if (structuredData) additions.push('<script data-article-seo type="application/ld+json">' + structuredData + '</script>')
  additions.unshift('<title data-article-base-title="' + baseTitle.replace(/"/g, '&quot;') + '">' + escapeHtml(title) + '</title>')
  return html.replace(/<\/head>/i, (closing) => additions.join('\n') + '\n' + closing)
}

const temp = await mkdtemp(join(config.root, '.article-prerender-'))
try {
  const ssrEntry = fileURLToPath(new URL('./prerenderEntry.jsx', import.meta.url))
  await build({
    root: config.root,
    mode: 'production',
    build: {
      ssr: ssrEntry,
      outDir: temp,
      emptyOutDir: true,
      manifest: false,
      ssrManifest: false,
      rollupOptions: { output: { entryFileNames: 'entry.mjs' } },
    },
  })
  const { renderArticlePages } = await import(pathToFileURL(join(temp, 'entry.mjs')).href)
  const pages = renderArticlePages(siteUrl)

  for (const { path, head, html } of pages) {
    const withHead = fillHead(template, head)
    const withBody = withHead.replace(rootPattern, (_, attrs) => '<div' + attrs + ' data-article-prerender>' + html + '</div>')
    const directory = join(output, path.slice(1))
    await mkdir(directory, { recursive: true })
    await writeFile(join(directory, 'index.html'), withBody, 'utf8')
  }

  if (siteUrl) {
    const urls = pages.map(({ path }) => '  <url><loc>' + escapeHtml(new URL(path, siteUrl).href) + '</loc></url>')
    const sitemap = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">', ...urls, '</urlset>', ''].join('\n')
    await writeFile(join(output, 'sitemap-articles.xml'), sitemap, 'utf8')
  }

  console.log('Prerendered ' + pages.length + ' article pages' + (siteUrl ? ' and sitemap-articles.xml.' : '.'))
} finally {
  await rm(temp, { recursive: true, force: true })
}
