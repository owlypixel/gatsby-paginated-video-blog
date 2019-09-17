import React, { useContext } from 'react'
import "./header.scss"
import MenuBurgerButton from './burgerButton'
import { Link, useStaticQuery, graphql } from "gatsby"

import Logo from "../../content/assets/site-logo.png" 

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)
  const { menuLinks } = data.site.siteMetadata
  
  const activeClassName = "active"
  return (
    <header className="site-header">
      <div className="wrapper">
        <div className="container">
          <div className="site-branding">
            <Link className="logo" to='/'>
              <img src={Logo} width="100px"/>
              <span className="siteTitle">Check This Out, Guitar God!</span>
            </Link>
          </div>
          <div className="header-right">
            <nav className="main-navigation">
              {menuLinks.map(link => (
                <Link className="nav-link" key={link.name} to={link.link} activeClassName={activeClassName}>
                  {link.name}
                </Link>
              ))}
            </nav>
            <MenuBurgerButton/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
