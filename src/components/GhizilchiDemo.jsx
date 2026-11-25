import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import GhizilchiApp from './ghizilchi/App.jsx'
import GhizilchiReturnBar from './GhizilchiReturnBar.jsx'
import './ghizilchi/index.css'
import './GhizilchiDemo.scss'

export default function GhizilchiDemo() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="ghizilchi-demo" dir="rtl" lang="fa">
      <GhizilchiReturnBar />
      <div className="ghizilchi-demo-content">
        <GhizilchiApp />
      </div>
    </div>
  )
}
