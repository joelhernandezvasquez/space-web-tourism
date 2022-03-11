import React from 'react'
import Navigation from './Navigation';
import TechnologyTab from './TechnologyTab';
import VehicleLandscape from '../assets/technology/image-launch-vehicle-landscape.jpg';
import TechnologyInfo from './TechnologyInfo';
const Technology = () => {
  return (
    <div className='technology-wrapper'>
     
     <div className='container'>
       <Navigation/>
       
       <h1 className='lead-heading'>
         <span className='lead-sub-heading'>03</span>
         space launch 101
       </h1>
       </div>
       
       <div className='main-technology-container'>
         <div className='technology-image-container'>
            <img src={VehicleLandscape} alt = "space"/>
          </div>
          
          <div className='container'>
          
          <div className='technology-information-container'> 
            <TechnologyTab/>
            <TechnologyInfo/>
          </div>
          
          </div>
         

        </div>
      </div>
    
  )
}

export default Technology;