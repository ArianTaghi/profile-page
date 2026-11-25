import { CircleAlert, CircleCheck } from 'lucide-react'

export default function ResultMessage({ type = 'success', message }) {
  const isError = type === 'error'
  const Icon = isError ? CircleAlert : CircleCheck
  const tone = isError ? 'text-(--color-danger)' : 'text-(--color-emerald-800)'

  return (
    <div role={isError ? 'alert' : 'status'}>
      {message && (
        <p className={`mt-3 mb-0 inline-flex items-center gap-2 rounded-(--radius-control) border border-solid border-current px-3 py-2 text-sm font-semibold ${tone}`}>
          <Icon size={17} aria-hidden="true" />
          {message}
        </p>
      )}
    </div>
  )
}
