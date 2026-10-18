const skills = [
  ['java', 'Java'],
  ['photoshop', 'Photoshop'],
  ['illustrator', 'Illustrator']
]

const Skill = () => (
  <section className="section-content" dir="rtl">
    <span className="section-eyebrow">مهارت‌های من</span>
    <h2>ابزارهایی که باهاشون کار می‌کنم</h2>
    <div className="skills-grid">
      {skills.map(([icon, name]) => (
        <div className="skill-card" key={icon}>
          <i className={`devicon-${icon}-plain colored`} aria-hidden="true" />
          <span>{name}</span>
        </div>
      ))}
    </div>
  </section>
)

export default Skill
