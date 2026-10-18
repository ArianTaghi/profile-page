import React from 'react'
import HeaderButton from './HeaderButton'

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-brand">Arian Taghi</div>
        <nav className="header-nav" aria-label="منوی اصلی">
          <HeaderButton dest="/skill" name="مهارت" />
          <HeaderButton dest="/sample" name="نمونه کار ها" />
          <HeaderButton dest="/contact" name="ارتباط" className="header-button--primary" />
          <HeaderButton dest="/weblog" name="وبلاگ" />
        </nav>
      </div>
    </header>
  )
}

export default Header
