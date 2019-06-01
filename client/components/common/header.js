import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const generateMobileMenu = () => { // eslint-disable-line consistent-return
    if (mobileMenu) {
      return (
        <div className="common-header-mobileMenu">
          <Link
            to="/"
            className="common-header-mobileMenu-item"
            onClick={() => { setMobileMenu(false) }}
          >
            HOME
          </Link>
          <Link
            to="/todo"
            className="common-header-mobileMenu-item"
            onClick={() => { setMobileMenu(false) }}
          >
            Todo
          </Link>
        </div>
      )
    }
  }

  return (
    <div className="common-header">
      <div className="common-header-centering">
        <div className="common-header-icon icon-globe" />
        {/* desktop links lg/xl breakpoints */}
        <div className="common-header-links">
          <Link
            to="/"
            className="common-header-links-item"
          >
            HOME
          </Link>
          <Link
            to="/todo"
            className="common-header-links-item"
          >
            TODO
          </Link>
        </div>
        {/* mobile links xs/sm/md breakpoints */}
        <div
          className="common-header-mobilelinks icon-menu"
          onClick={() => { setMobileMenu(!mobileMenu) }}
          role="button"
          onKeyDown={() => {}}
          tabIndex={0}
        />
      </div>
      {/* mobile links xs/sm/md breakpoints */}
      {generateMobileMenu()}
    </div>
  )
}

export default Header
