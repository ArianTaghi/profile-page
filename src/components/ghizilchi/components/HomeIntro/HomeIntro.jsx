import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import goldNugget from './images/gold-nugget.webp'
import goldAssay from './images/gold-assay.webp'
import goldBalance from './images/gold-balance.webp'
import '../Css/HomeIntro/HomeIntro.css'

const scenes = [
  { image: goldNugget, title: 'به قیزیلچی', emphasis: 'خوش آمدید' },
  { image: goldAssay, title: 'خرید طلای', emphasis: 'ساخته و آبده' },
  { image: goldBalance, title: 'از ویترین', emphasis: 'بازدید کنید', to: '/ghizilchi/showcase' },
]

function clamp(value) {
  return Math.max(0, Math.min(value, 1))
}

function ease(value) {
  const progress = clamp(value)
  return progress * progress * (3 - 2 * progress)
}

function resetScrollForShowcase(event) {
  if (event.button !== 0 || event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) return

  window.scrollTo({ top: 0, behavior: 'instant' })
}

export default function HomeIntro() {
  const sectionRef = useRef(null)
  const stageRef = useRef(null)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    const stage = stageRef.current
    const frames = stage.querySelectorAll('.home-intro__scene')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let requestId = 0
    let previousPosition = -1
    let previousStep = 0

    function update() {
      requestId = 0
      if (reducedMotion.matches) return

      const bounds = section.getBoundingClientRect()
      const stickyInset = Number.parseFloat(window.getComputedStyle(stage).top)
      const distance = Math.max(1, bounds.height - stage.offsetHeight)
      const position = clamp((stickyInset - bounds.top) / distance) * (frames.length - 1)
      if (position === previousPosition) return
      previousPosition = position

      frames.forEach((frame, index) => {
        const offset = position - index
        const gap = Math.abs(offset)
        const imageOpacity = index === 0 ? 1 : ease((offset + 0.8) / 0.6)
        const titleOpacity = 1 - ease((gap - 0.12) / 0.38)

        frame.style.setProperty('--home-intro-image-opacity', imageOpacity)
        frame.style.setProperty('--home-intro-image-scale', 1 + clamp(gap) * 0.075)
        frame.style.setProperty('--home-intro-title-opacity', titleOpacity)
        frame.style.setProperty('--home-intro-title-shift', `${Math.sign(offset) * clamp(gap) * -36}px`)
        frame.style.setProperty('--home-intro-title-visibility', titleOpacity > 0 ? 'visible' : 'hidden')
      })

      const step = Math.round(position)
      if (step !== previousStep) {
        previousStep = step
        setActiveStep(step)
      }
    }

    function scheduleUpdate() {
      if (!requestId && !reducedMotion.matches) requestId = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    reducedMotion.addEventListener('change', scheduleUpdate)

    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      reducedMotion.removeEventListener('change', scheduleUpdate)
      window.cancelAnimationFrame(requestId)
    }
  }, [])

  return (
    <section ref={sectionRef} className="home-intro" lang="fa" dir="rtl" aria-label="معرفی قیزیلچی">
      <div ref={stageRef} className="home-intro__stage">
        {scenes.map(({ image, title, emphasis, to }, index) => {
          const heading = (
            <>
              {title}{' '}
              <span>
                {emphasis}
                {to && <i className="bi bi-arrow-left" aria-hidden="true" />}
              </span>
            </>
          )

          return (
            <div className="home-intro__scene" key={image}>
              <div className="home-intro__photo">
                <img src={image} alt="" width="1672" height="941" fetchPriority={index === 0 ? 'high' : 'auto'} />
              </div>
              <div className="home-intro__copy">
                <h2 className="home-intro__title">
                  {to ? (
                    <Link className="home-intro__showcase" to={to} onClick={resetScrollForShowcase}>
                      {heading}
                    </Link>
                  ) : heading}
                </h2>
              </div>
            </div>
          )
        })}

        <div className="home-intro__controls">
          <a className="home-intro__skip" href="#home-heading">
            <i className="bi bi-arrow-down" aria-hidden="true" />
            ادامهٔ صفحه
          </a>
          <div className="home-intro__steps" aria-hidden="true">
            {scenes.map(({ image }, index) => (
              <span key={image} className={index === activeStep ? 'home-intro__step home-intro__step--active' : 'home-intro__step'} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
