import { useSearchParams } from 'react-router-dom'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Skill from './Skill.jsx'
import Sample from './Sample.jsx'
import SelectorBar from './SelectorBar.jsx'

const panels = { Skill, Contact, Sample }
const tabs = { skills: 'Skill', contact: 'Contact', projects: 'Sample' }

const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const active = tabs[searchParams.get('tab')] || 'Skill'
  const ActivePanel = panels[active]

  function selectPanel(panel) {
    setSearchParams((current) => {
      const next = new URLSearchParams(current)
      const tab = Object.keys(tabs).find((key) => tabs[key] === panel)
      if (tab === 'skills') next.delete('tab')
      else next.set('tab', tab)
      return next
    }, { replace: true })
  }

  return (
    <main className="main-layout">
      <About />
      <section className="content-panel">
        <SelectorBar active={active} onSelect={selectPanel} />
        <div className="panel-motion" key={active}>
          <ActivePanel />
        </div>
      </section>
    </main>
  )
}

export default MainPage
