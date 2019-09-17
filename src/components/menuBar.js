// import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
// import { elastic as Menu } from "react-burger-menu";
import React, { useContext } from 'react'
import {slide as Menu} from 'react-burger-menu'

import './MenuBar.scss'
import MenuContext from './MenuContext'



const MenuBar = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)
  const ctx = useContext(MenuContext)

  return (
    // Pass on our props
    <Menu  
      // customBurgerIcon={false} 
      right
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
      customBurgerIcon={false}
      isOpen={ctx.isMenuOpen}
      onStateChange={(state) => ctx.stateChangeHandler(state)}
    >
      {data.site.siteMetadata.menuLinks.map(link => (
        <Link className="nav-link" key={link.name} to={link.link} >
          {link.name}
        </Link>
      ))}
    </Menu>
  );
};

export default MenuBar
