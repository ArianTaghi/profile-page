import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

export default function StorefrontLayout() {
  return (
    <div lang="fa" dir="rtl" className="min-h-full bg-(--color-ivory-100) text-(--color-text)">
      <Navbar />
      <main className="mx-auto max-w-7xl space-y-10 px-4 py-6 sm:space-y-14 sm:px-8 sm:py-10">
        <Outlet />
      </main>
    </div>
  )
}
