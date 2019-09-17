import React from "react"
import Header from './header'
import Footer from './footer'

import './layout.scss'
import { MenuProvider } from './MenuContext'
import MenuBar from '../components/menuBar'


class Layout extends React.Component {
  render() {
    const { children } = this.props
  
    return (
      <MenuProvider>
        <div id="outer-container">
          <Header></Header>
          <MenuBar/>
          
          <div id="page-wrap">
            <main>{children}</main>
            <Footer></Footer>
          </div>
        </div>
      </MenuProvider>
    )
  }
}

export default Layout
