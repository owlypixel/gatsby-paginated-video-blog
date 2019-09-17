import React, { useState } from 'react'

// make a new context
const MenuContext = React.createContext();

// create the provider
export const MenuProvider = (props) => {
  const [menuOpenState, setMenuOpenState] = useState(false)
  
  return (
    <MenuContext.Provider value={{
      isMenuOpen: menuOpenState,
      toggleMenu: () => setMenuOpenState(!menuOpenState),
      stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen)
    }}>
      {props.children}
    </MenuContext.Provider>
  )
}

export default MenuContext