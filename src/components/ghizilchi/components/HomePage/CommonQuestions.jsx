import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { commonQuestions } from './commonQuestionsData'

export default function CommonQuestions() {
  const [openQuestion, setOpenQuestion] = useState(null)

  return (
    <section aria-labelledby="faq-heading" className="mx-auto max-w-4xl">
      <header className="mb-6 rounded-(--radius-card) bg-(--color-emerald-950) px-6 py-8 sm:px-10 sm:py-10">
        <p className="mb-2 text-sm font-semibold text-(--color-gold-400)">راهنمای قیزیلچی</p>
        <h1 id="faq-heading" className="mb-0 text-3xl font-extrabold text-(--color-ivory-50) sm:text-5xl">سوالات متداول</h1>
      </header>

      <ul className="m-0 grid list-none gap-2.5 p-0">
        {commonQuestions.map(({ id, question, answer }) => {
          const isOpen = openQuestion === id
          const Icon = isOpen ? Minus : Plus
          const answerId = `faq-answer-${id}`

          return (
            <li key={id} className={`overflow-hidden rounded-(--radius-control) border border-solid bg-(--color-ivory-50) ${isOpen ? 'border-(--color-gold-500)' : 'border-(--color-ivory-300)'}`}>
              <h2 className="m-0">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenQuestion(isOpen ? null : id)}
                  className="flex min-h-12 w-full cursor-pointer items-center justify-between gap-3 border-0 bg-transparent px-4 py-3 text-start text-sm leading-6 font-bold text-(--color-emerald-950) hover:bg-(--color-ivory-100) focus-visible:outline-2 focus-visible:-outline-offset-3 focus-visible:outline-(--color-emerald-700) sm:px-5 sm:text-base"
                >
                  <span>{question}</span>
                  <span aria-hidden="true" className={`grid size-7 shrink-0 place-items-center rounded-full ${isOpen ? 'bg-(--color-emerald-900) text-(--color-gold-400)' : 'bg-(--color-ivory-100) text-(--color-emerald-800)'}`}>
                    <Icon size={17} />
                  </span>
                </button>
              </h2>
              <div
                id={answerId}
                aria-hidden={!isOpen}
                className={`grid motion-safe:transition-[grid-template-rows] motion-safe:duration-250 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
              >
                <div className="min-h-0 overflow-hidden">
                  <p className="m-0 px-4 pt-1 pb-4 text-sm leading-7 text-(--color-text) sm:px-5">{answer}</p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
