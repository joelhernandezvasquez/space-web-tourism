import React from 'react'
import Navigation from './Navigation'
import DestinationTab from './DestinationTab'
import MoonImg from '../assets/destination/image-moon.png'
import MarsImg from '../assets/destination/image-mars.png'
import EuropaImg from '../assets/destination/image-europa.png'
import TitanImg from '../assets/destination/image-titan.png'
import DestinationInfo from './DestinationInfo'
import UseCounterTab from './hooks/UseCounterTab'

const Destination = () => {
  const [currentDestination, handleCounter] = UseCounterTab(0)

  const planetImg = [
    {
      name: 'Moon',
      image: MoonImg
    },
    {
      name: 'Mars',
      image: MarsImg
    },
    {
      name: 'Europa',
      image: EuropaImg
    },
    {
      name: 'Titan',
      image: TitanImg
    }
  ]

  return (
    <div className='destination-wrapper'>
      <div className='container'>
        <Navigation />
        <h1 className='lead-heading'>
          <span className='lead-sub-heading'>01</span>
          pick your destination
        </h1>

        <div className='col2-container'>
          <div className='planet-image-container'>
            <img src={planetImg[currentDestination].image} alt='planet' />
          </div>

          <div className='info-destination-container'>
            <DestinationTab
              currentDestination={currentDestination}
              setCurrentTab={handleCounter}
            />
            <DestinationInfo currentDestination={currentDestination} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination
