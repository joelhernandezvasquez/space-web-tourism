import { useCallback} from 'react';
import useToggle from './hooks/useToggle';
import MenuIcon from '../assets/shared/icon-hamburger.svg';
import MobileMenu from './MobileMenu';
import '../style/main.scss';
import CloseIcon from '../assets/shared/icon-close.svg';

const MobileNavigation = () => {

  const [toggle,handleToggle] = useToggle(false);

  const closeMenu = useCallback(()=>{
    handleToggle();
  },[toggle])

  return (
    <>
    <div className='mobile-nav'>
      <img className='menu-icon' 
      src = {!toggle? MenuIcon:CloseIcon} 
      alt="close-icon"
      onClick={handleToggle}
      />
    </div>

   
    <MobileMenu  open = {toggle} closeMenu = {closeMenu}/>
    
    </>
  )
}

export default MobileNavigation;