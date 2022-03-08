import React from 'react'
import Navigation from './Navigation'
import DouglasHurley from '../assets/crew/image-douglas-hurley.png';
import CrewMenuTab from './CrewMenuTab';
const Crew = () => {
  return (
    <div className='crew-wrapper'>
      <div className='container'>
      crew
       <Navigation/> 
       <h1 className='lead-heading'>
         <span className='lead-sub-heading'>02</span>
         meet your crew
       </h1>

       <div className='col2-container'>
          <div className='crew-image-container'>
             <img src={DouglasHurley} alt = "crew members"/>
            </div>
         </div>

         <div className='crew-information-container'>
           <CrewMenuTab/>
           </div>
        </div>
    </div>
  )
}

export default Crew