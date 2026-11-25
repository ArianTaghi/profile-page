import TopNavbar from './TopNavbar'
import BottomNavbar from './BottomNavbar'
import '../Css/Navbar/Navbar.css'

export default function Navbar() {
  return (
    <header className="site-navbar bg-(--color-ivory-50)" dir="rtl">
      <TopNavbar />
      <BottomNavbar />
    </header>
  )
}
