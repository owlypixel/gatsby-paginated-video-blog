import React from 'react'

import './footer.scss'

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        © {new Date().getFullYear()}, All Rights Conserved
      </div>
    </footer>
  )
}

export default Footer