import React from 'react';
import Logo from '../assets/shared/logo.svg';
import MenuIcon from '../assets/shared/icon-hamburger.svg';
import '../style/main.scss';
//import CloseIcon from '../assets/shared/icon-close.svg';

const MobileNavigation = () => {
  return (
    <nav className='mobile-nav'>
      <img className='logo-icon' src={Logo} alt="logo"/>
      <img className='menu-icon' src = {MenuIcon} alt="close-icon"/>
    </nav>
  )
}

export default MobileNavigation;