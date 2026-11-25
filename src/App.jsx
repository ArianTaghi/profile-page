import './App.scss'
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import MainPage from './components/MainPage.jsx'
import Weblog from './components/Weblog.jsx'

const GhizilchiDemo = lazy(() => import('./components/GhizilchiDemo.jsx'))

function Portfolio() {
  return (
    <div className="portfolio-site page-shell">
      <Header />
      <MainPage />
    </div>
  )
}

function App() {
  return (
    <Suspense fallback={<p className="route-loading" role="status" dir="rtl">در حال بارگذاری…</p>}>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/weblog" element={<Weblog />} />
        <Route path="/ghizilchi/*" element={<GhizilchiDemo />} />
      </Routes>
    </Suspense>
  )
}

export default App
