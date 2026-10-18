import { useState } from 'react'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Skill from './Skill.jsx'
import Sample from './Sample.jsx'
import SelectorBar from './SelectorBar.jsx'

const panels = { Skill, Contact, Sample }

const MainPage = () => {
  const [active, setActive] = useState('Skill')
  const ActivePanel = panels[active]

  return (
    <main className="main-layout">
      <About />
      <section className="content-panel">
        <SelectorBar active={active} onSelect={setActive} />
        <div className="panel-motion" key={active}>
          <ActivePanel />
        </div>
      </section>
    </main>
  )
}

export default MainPage
