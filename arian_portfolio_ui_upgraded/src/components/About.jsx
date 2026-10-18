import React from 'react'

const About = () => {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-copy">
          <div className="hero-title">آرین طاقی</div>
          <div className="hero-role">توسعه دهنده وبسایت و بک اند</div>
          <div className="hero-education">مهندسی کامپیوتر دانشگاه تبریز</div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-orbit hero-orbit-one"></div>
          <div className="hero-orbit hero-orbit-two"></div>
          <div className="hero-glow"></div>
        </div>
      </section>
    </main>
  )
}

export default About
