import React from 'react'
import CloseIcon from '../assets/shared/icon-close.svg'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const MobileMenu = React.memo(({ open, closeMenu }) => {
  return (
    
    <div className={`mobile-menu ${open && 'show'}`}>
      <div className='mobile-menu-close-icon-container'>
        <img src={CloseIcon} alt='close icon' onClick={closeMenu} />
      </div>

      <ul className='mobile-menu-items'>
        <li>
          {' '}
          <Link className='link' to='/'>
            {' '}
            <span className='bolder'>00</span> Home
          </Link>
        </li>
        <li>
          {' '}
          <Link className='link' to='/destination'>
            <span className='bolder'>01</span> Destination
          </Link>
        </li>
        <li>
          {' '}
          <Link className='link' to='/crew'>
            {' '}
            <span className='bolder'>02</span> Crew
          </Link>
        </li>
        <li>
          {' '}
          <Link className='link' to='/technology'>
            <span className='bolder'>03</span> Technology
          </Link>
        </li>
      </ul>
    </div>
  )
})

MobileMenu.propTypes = {
  open: PropTypes.bool,
  closeMenu: PropTypes.func
}
export default MobileMenu
