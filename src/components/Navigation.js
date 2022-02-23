import React from 'react'
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'
import Logo from '../assets/shared/logo.svg';
const Navigation = () => {
  return (
   <nav className="navigation-container">
       <img className='logo-icon' src={Logo} alt="logo"/>
       
       {/* <DesktopNavigation/> */}
       <MobileNavigation/>
   </nav>
  )
}

export default Navigation