import React from 'react'
import CloseIcon from '../assets/shared/icon-close.svg';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const MobileMenu = ({open,closeMenu}) => {
    console.log("I am rendering again")
  return (
    
    <div className={`mobile-menu ${open && 'show'}`}>
         <div className='mobile-menu-close-icon-container'>
            <img src={CloseIcon} alt="close icon" onClick={closeMenu}/> 
        </div>

        <ul className='mobile-menu-items'>
            <li> <Link className='link' to ="/"> 00 Home</Link></li>
            <li> <Link className='link' to="/destination">01 Destination</Link></li>
            <li> <Link className='link' to="/crew"> 02 Crew</Link></li>
            <li> <Link className='link' to="/technology">03 Technology</Link></li>
        </ul>
    </div>
  )
}

MobileMenu.propTypes = {
    open:PropTypes.bool,
    closeMenu:PropTypes.func
}
export default MobileMenu