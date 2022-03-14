import React from 'react'
import UseScreen from './hooks/UseScreen'
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'
import Logo from '../assets/shared/logo.svg'

const Navigation = props => {
  const screenSize = UseScreen()

  return (
    <nav className='navigation-container'>
      <img className='logo-icon' src={Logo} alt='logo' />
       {screenSize < 767 ? <MobileNavigation /> : <DesktopNavigation />}
    </nav>
  )
}

export default Navigation
