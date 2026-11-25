import EmeraldDiamond from './EmeraldDiamond'
import '../Css/Reusable/AuthFrame.css'

export default function AuthFrame({ children, stage }) {
  return (
    <main className="signup-screen auth-frame-screen">
      <div className="auth-frame relative grid w-full items-stretch gap-4">
        {children}
        <EmeraldDiamond stage={stage} />
      </div>
    </main>
  )
}
