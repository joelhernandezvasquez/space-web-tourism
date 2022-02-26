import React,{useRef,useEffect} from 'react'
import {Link } from 'react-router-dom';
import UseScreen from './hooks/UseScreen';
import { useLocation } from 'react-router-dom';

const DesktopNavigation = () => {

  const screenSize = UseScreen();
 const currentLocation = useLocation();
 const menuRef = useRef();
  const menuItems = [
    {
      id:0,
      name:'Home',
      route:'/'
    },
    {
      id:1,
      name:'Destination',
      route:'/destination'
    },
    {
      id:2,
      name:'Crew',
      route:'/crew'
    },
    {
      id:3,
      name:'Tecnology',
      route:'/technology'
    }
  ]

  const isDesktopScreen = () =>{
    return screenSize > 1439
  }

  
  useEffect(()=>{

   menuRef.current.addEventListener("mouseover",(e)=>{
      if(e.target.classList.contains('active-link')){
        e.target.style.pointerEvents = 'none';
      }
    });

  },[])

  return (
    <div className='desktop-nav'>
    
    <ul  className='desktop-menu-items' ref={menuRef}>
           
        {menuItems.map((item)=>{
          return(
             <li key = {item.id}  className={`${currentLocation.pathname === item.route && 'active-link'}`}> 
             <Link className='link' to ={item.route}> {isDesktopScreen() && <span className="bolder">0{item.id}</span>} {item.name}</Link>
             </li>
          )
        })}
        </ul>
    </div>
  )
}

export default DesktopNavigation