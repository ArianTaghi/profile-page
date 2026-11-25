export default function ProfileSection({ section }) {
  const { label, icon: Icon, component: Content } = section

  return (
    <section className="profile-panel" aria-labelledby="profile-section-title">
      <header className="profile-panel-header">
        <span className="profile-panel-icon" aria-hidden="true"><Icon size={18} /></span>
        <h2 id="profile-section-title">{label}</h2>
      </header>
      <Content />
    </section>
  )
}
