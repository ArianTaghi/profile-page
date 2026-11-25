import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function getArticleSections(content) {
  const headings = content.matchAll(/^## (.+)$/gm)
  return Array.from(headings, ([, title], index) => ({
    title,
    id: 'section-' + (index + 1),
  }))
}

function inlineText(text) {
  return text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\(https:\/\/[^)\s]+\))/g).map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\((https:\/\/[^)\s]+)\)$/)
    if (link) return <a key={index} href={link[2]}>{link[1]}</a>
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>
    }
    return part
  })
}

function tableCells(row) {
  return row.trim().slice(1, -1).split('|').map((cell) => cell.trim())
}

function ArticleTable({ lines }) {
  return (
    <div className="article-table">
      <table>
        <thead><tr>{tableCells(lines[0]).map((cell) => <th key={cell} scope="col">{cell}</th>)}</tr></thead>
        <tbody>
          {lines.slice(2).map((line) => (
            <tr key={line}>
              {tableCells(line).map((cell, index) => index === 0
                ? <th key={index} scope="row">{inlineText(cell)}</th>
                : <td key={index}>{inlineText(cell)}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function ArticleBody({ content, sections }) {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash.startsWith('#section-')) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    }
  }, [hash, content])

  let headingIndex = 0
  return (
    <div className="article-prose">
      {content.trim().split(/\r?\n\s*\r?\n/).map((block, index) => {
        const lines = block.split(/\r?\n/)
        if (block.startsWith('## ')) {
          const { title, id } = sections[headingIndex++]
          return <h2 key={index} id={id}>{title}</h2>
        }
        if (block.startsWith('|')) return <ArticleTable key={index} lines={lines} />
        if (block.startsWith('> ')) return <blockquote key={index}>{inlineText(block.slice(2))}</blockquote>

        const listMarker = block.startsWith('- ') ? /^- / : /^\d+\. /
        if (listMarker.test(block)) {
          const List = block.startsWith('- ') ? 'ul' : 'ol'
          return (
            <List key={index}>
              {lines.map((line) => <li key={line}>{inlineText(line.replace(listMarker, ''))}</li>)}
            </List>
          )
        }
        return <p key={index}>{inlineText(lines.join(' '))}</p>
      })}
    </div>
  )
}
