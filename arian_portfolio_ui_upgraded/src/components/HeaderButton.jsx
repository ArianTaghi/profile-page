import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const HeaderButton = ({ dest, name, className = '' }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isSelected = pathname === dest

  return (
    <button
      type="button"
      onClick={() => navigate(dest)}
      className={`header-button ${isSelected ? 'header-button-selected' : ''} ${className}`.trim()}
      aria-current={isSelected ? 'page' : undefined}
    >
      {name}
    </button>
  )
}

export default HeaderButton
