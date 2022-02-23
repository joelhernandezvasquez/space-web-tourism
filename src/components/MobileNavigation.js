
import useToggle from './hooks/useToggle';
import MenuIcon from '../assets/shared/icon-hamburger.svg';
import MobileMenu from './MobileMenu';
import '../style/main.scss';
import CloseIcon from '../assets/shared/icon-close.svg';

const MobileNavigation = () => {

  const [toggle,handleToggle] = useToggle(false);

  return (
    <>
    <div className='mobile-nav'>
      <img className='menu-icon' 
      src = {!toggle? MenuIcon:CloseIcon} 
      alt="close-icon"
      onClick={handleToggle}
      />
    </div>

     {/* this leads to memoization and useCallback refactoring  */}
    <MobileMenu open = {toggle} closeMenu = {handleToggle}/>
    
    </>
  )
}

export default MobileNavigation;