import React, { useContext } from 'react'
import MenuContext from './MenuContext'

import './burgerButton.scss'

const BurgerMenuButton = () => {
  const ctx = useContext(MenuContext)
  return (
    <div className="burger-button" >
      <div className="menu cross menu--1" >
        <label>
          <input type="checkbox" checked={ctx.isMenuOpen} onChange={ctx.toggleMenu}/>
          <svg onClick={ctx.toggleMenu} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="30" />
            <path className="line--1" d="M0 40h62c13 0 6 28-4 18L35 35" />
            <path className="line--2" d="M0 50h70" />
            <path className="line--3" d="M0 60h62c13 0 6-28-4-18L35 65" />
          </svg>
        </label>
      </div>
    </div>
  )
}

export default BurgerMenuButton