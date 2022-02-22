
import useToggle from './hooks/useToggle';
import Logo from '../assets/shared/logo.svg';
import MenuIcon from '../assets/shared/icon-hamburger.svg';
import '../style/main.scss';
import CloseIcon from '../assets/shared/icon-close.svg';

const MobileNavigation = () => {

  const [toggle,handleToggle] = useToggle(false);

  return (
    <nav className='mobile-nav'>
      <img className='logo-icon' src={Logo} alt="logo"/>
      <img className='menu-icon' 
      src = {!toggle? MenuIcon:CloseIcon} 
      alt="close-icon"
      onClick={handleToggle}
      />

    </nav>
  )
}

export default MobileNavigation;