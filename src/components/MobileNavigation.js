import { useCallback } from 'react'
import useToggle from './hooks/useToggle'
import MobileMenu from './MobileMenu'
import '../style/main.scss'
import MenuIcon from '../assets/shared/icon-hamburger.svg'

const MobileNavigation = () => {
  const [toggle, handleToggle] = useToggle(false)

  const closeMenu = useCallback(() => {
    handleToggle()
  },[toggle])// eslint-disable-line react-hooks/exhaustive-deps


  return (
    <>
      <div className='mobile-nav'>
        <img
          className='menu-icon'
          src={ MenuIcon}
          alt='close-icon'
          aria-controls='primary-navigation'
          onClick={handleToggle}
        />
      </div>

      <MobileMenu open={toggle} closeMenu={closeMenu} />
    </>
  )
}

export default MobileNavigation
