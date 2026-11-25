import { Link } from 'react-router-dom'

export default function SampleCard({ title, description, preview, to, technologies = [] }) {
  return (
    <article className="sample-card">
      <Link className="sample-card-link" to={to}>
        <img className="sample-card-preview" src={preview} alt={`پیش‌نمایش سایت ${title}`} width="1366" height="768" loading="lazy" />
        <div className="sample-card-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <ul className="sample-card-technologies" aria-label="فناوری‌های پروژه" dir="ltr">
            {technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
          <span className="sample-card-action">تجربهٔ سایت <span aria-hidden="true">←</span></span>
        </div>
      </Link>
    </article>
  )
}
