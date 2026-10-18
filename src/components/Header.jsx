import HeaderButton from './HeaderButton.jsx'
import { Link } from 'react-router-dom'

const Header = () => (
  <header className="site-header">
    <div className="header-inner">
      <Link className="header-brand" to="/">Arian Taghi</Link>
      <nav className="header-nav" aria-label="منوی اصلی">
        <HeaderButton dest="/" name="خانه" />
        <HeaderButton dest="/weblog" name="وبلاگ" />
      </nav>
    </div>
  </header>
)

export default Header
