import React from "react"
import Header from './header'
import Footer from './footer'

import './layout.scss'
import { MenuProvider } from './MenuContext'
import MenuBar from '../components/menuBar'
import { Waypoint } from 'react-waypoint';


class Layout extends React.Component {
  constructor(props) {
    super(props)
    this._handleWaypointEnter = this._handleWaypointEnter.bind(this)
    this._handleWaypointLeave = this._handleWaypointLeave.bind(this)
  }

  state = {
    isHeaderFixed: false
  }

  _handleWaypointEnter = function(){
    this.setState({isHeaderFixed: false});
  }
  _handleWaypointLeave = function(){
    this.setState({isHeaderFixed: true});
  }

  render() {
    const { children } = this.props
    return (
      <MenuProvider>
        <div id="outer-container">
          <Header isHeaderFixed={this.state.isHeaderFixed}></Header>
          <MenuBar/>
          <div id="page-wrap">
            <Waypoint 
              onEnter={this._handleWaypointEnter}
              onLeave={this._handleWaypointLeave}
            />
            <main>{children}</main>
            <Footer></Footer>
          </div>
        </div>
      </MenuProvider>
    )
  }
}

export default Layout
