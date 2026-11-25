import React from 'react'

const ProfileSideBar = () => {
  return (
  <div className="profile-sidebar">
          <div className="profile-sidebar-banner" aria-hidden="true">
            <EmeraldDiamond compact stage={diamondStage} />
          </div>
          <div className="profile-completion">
            <div className="profile-completion-caption">
              <label htmlFor="profile-completion">تکمیل پروفایل</label>
              <span aria-hidden="true">{formattedPercent}</span>
            </div>
            <progress id="profile-completion" className="profile-completion-track" value={percent} max={100} />
          </div>
          <nav className="profile-sidebar-nav" aria-labelledby="profile-title">
            <h1 id="profile-title" className="profile-sidebar-title">
              <UserRound size={16} aria-hidden="true" />
              پروفایل من
            </h1>
            <ul className="profile-nav-list">
              {profileSections.map(({ path, label, icon: Icon }) => (
                <li key={path}>
                  <NavLink to={path || '.'} end className="profile-nav-link">
                    <Icon size={16} aria-hidden="true" />
                    <span>{label}</span>
                    <ChevronLeft className="profile-nav-chevron" size={14} aria-hidden="true" />
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
    )
}

export default ProfileSideBar