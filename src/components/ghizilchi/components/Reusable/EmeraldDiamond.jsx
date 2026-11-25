import { useId } from 'react'
import '../Css/Reusable/EmeraldDiamond.css'

const stageLabels = ['مرحلهٔ ۱ از ۳', 'مرحلهٔ ۲ از ۳', 'الماس کامل شد']

export default function EmeraldDiamond({ stage, compact = false }) {
  const id = useId()
  const shine = `${id}-shine`
  const depth = `${id}-depth`
  const table = `${id}-table`

  return (
    <div className={`emerald-diamond relative isolate grid min-w-0 place-content-center justify-items-center overflow-hidden text-center${compact ? ' emerald-diamond--compact' : ''}`} data-stage={stage ?? 3}>
      <svg viewBox="0 0 320 290" className="emerald-diamond-art block h-auto w-full" aria-hidden="true">
        <defs>
          <linearGradient id={shine} x1="0" y1="0" x2="0.8" y2="1">
            <stop stopColor="var(--diamond-light)" />
            <stop offset="0.55" stopColor="var(--diamond-bright)" />
            <stop offset="1" stopColor="var(--color-emerald-700)" />
          </linearGradient>
          <linearGradient id={depth} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="var(--color-emerald-600)" />
            <stop offset="1" stopColor="var(--color-emerald-950)" />
          </linearGradient>
          <linearGradient id={table} x1="0" y1="0" x2="0.7" y2="1">
            <stop stopColor="var(--diamond-light)" />
            <stop offset="0.38" stopColor="var(--diamond-bright)" />
            <stop offset="1" stopColor="var(--color-emerald-600)" />
          </linearGradient>
        </defs>

        <g className="emerald-diamond-orbit" fill="none" stroke="currentColor">
          <circle cx="160" cy="145" r="120" strokeDasharray="1 6" />
          <circle cx="160" cy="145" r="133" opacity=".45" />
          <path d="M160 8v16m-8-8h16M160 266v16m-8-8h16M20 145h16m-8-8v16M284 145h16m-8-8v16" />
        </g>

        <g className="emerald-diamond-stones" stroke="var(--diamond-edge)" strokeWidth=".75" strokeLinejoin="round">
          <g className="emerald-diamond-piece emerald-diamond-piece--left">
            <path d="M48 126 99 70h37l-15 56 16 38-9 16 32 65Z" fill={`url(#${depth})`} />
            <path d="M48 126 99 70l22 56Z" fill={`url(#${shine})`} />
            <path d="M99 70h37l-15 56Z" fill="var(--diamond-bright)" />
            <path d="M48 126h73l16 38-9 16 32 65Z" fill="var(--color-emerald-800)" />
            <path d="m48 126 80 54 32 65Z" fill={`url(#${shine})`} />
          </g>

          <g className="emerald-diamond-piece emerald-diamond-piece--right">
            <path d="M184 70h37l51 56-112 119 32-69-15-14 22-36Z" fill={`url(#${depth})`} />
            <path d="M184 70h37l-22 56Z" fill="var(--diamond-bright)" />
            <path d="m221 70 51 56h-73Z" fill={`url(#${shine})`} />
            <path d="M199 126h73l-80 50-15-14Z" fill="var(--color-emerald-700)" />
            <path d="m272 126-80 50-32 69Z" fill="var(--color-emerald-600)" />
          </g>

          <g>
            <path d="M136 70h48l15 56h-78Z" fill={`url(#${table})`} />
            <path d="M121 126h78l-22 36 15 14-32 69-32-65 9-16Z" fill={`url(#${shine})`} />
            <path d="M121 126h78l-39 55Z" fill="var(--diamond-bright)" />
            <path d="m199 126-22 36 15 14-32 69v-64Z" fill={`url(#${depth})`} />
            <path d="M136 70h48l5 17h-58Z" fill="var(--diamond-light)" opacity=".55" stroke="none" />
          </g>

          <g className="emerald-diamond-cracks" fill="none" stroke="var(--diamond-light)" strokeWidth="1.25">
            <path d="m136 70-15 56 16 38-9 16 32 65" />
            <path d="m184 70 15 56-22 36 15 14-32 69" />
          </g>
        </g>

        <g className="emerald-diamond-sparks" fill="currentColor">
          <path d="M229 47c0 13 4 17 17 17-13 0-17 4-17 17 0-13-4-17-17-17 13 0 17-4 17-17Z" />
          <path d="M67 170c0 8 3 11 11 11-8 0-11 3-11 11 0-8-3-11-11-11 8 0 11-3 11-11Z" />
          <circle cx="251" cy="183" r="2" />
          <circle cx="80" cy="56" r="2" />
        </g>
      </svg>

      {!compact && (
        <div className="min-w-0 px-3">
          <p className="mb-0 text-lg font-extrabold sm:text-2xl">{stage ? 'الماس رو کامل کنیم' : 'قیزیلچی'}</p>
          {stage && (
            <p className="mt-2 mb-0 text-xs font-semibold text-(--color-gold-200)" role="status">
              {stageLabels[stage - 1]}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
