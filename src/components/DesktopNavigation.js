import React from 'react'
import {Link } from 'react-router-dom';
import UseScreen from './hooks/UseScreen';

const DesktopNavigation = () => {

  const screenSize = UseScreen();


  const isDesktopScreen = () =>{
    return screenSize > 1439
  }

  return (
    <div className='desktop-nav'>
    <ul className='desktop-menu-items'>
            <li> <Link className='link' to ="/"> {isDesktopScreen() && <span class="bolder">00</span>} Home</Link></li>
            <li> <Link className='link' to="/destination"> {isDesktopScreen() && <span class="bolder">01</span>} Destination</Link></li>
            <li> <Link className='link' to="/crew"> {isDesktopScreen() && <span class="bolder">02</span>} Crew</Link></li>
            <li> <Link className='link' to="/technology"> {isDesktopScreen()  && <span class="bolder">03</span>} Technology</Link></li>
        </ul>
    </div>
  )
}

export default DesktopNavigation