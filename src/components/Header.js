import React, { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import '../styles/header.css'

const Header = () => {
  const navLinks = [
    { path: '/', display: 'Home' },
    { path: '/bakoB1', display: 'BakoB1' },
    { path: '/services', display: 'Services' },
    { path: '/blog', display: 'Blog' },
    { path: '/contact', display: 'Contact' }
  ]

  const menuRef = useRef(null)

  const toggleMenu = (e) => {
    // empêche la propagation du clic pour éviter la fermeture immédiate
    if (e.target.classList.contains('navigation')) {
      menuRef.current.classList.remove("menu-active")
    }
  }

  const handleLinkClick = () => {
    menuRef.current.classList.remove("menu-active")
  }

  return (
    <div className="header">
      <div className="main-nav">
        <div className="navigation-wrapper">
          <span className="mobile-menu">
            <i className="ri-menu-line" onClick={() => menuRef.current.classList.toggle("menu-active")}></i>
          </span>
        </div>

        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
          <div className="menu">
            {navLinks.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className={({ isActive }) => isActive ? 'nav-Active nav-item' : 'nav-item'}
                onClick={handleLinkClick}
              >
                {item.display}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
