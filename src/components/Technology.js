import React from 'react'
import Navigation from './Navigation'
import TechnologyTab from './TechnologyTab'
import UseCounterTab from './hooks/UseCounterTab'
import UseScreen from './hooks/UseScreen'
import VehicleLandscape from '../assets/technology/image-launch-vehicle-landscape.jpg'
import VehiclePortrait from '../assets/technology/image-launch-vehicle-portrait.jpg'
import SpaceportLandscape from '../assets/technology/image-spaceport-landscape.jpg'
import SpaceportPortrait from '../assets/technology/image-spaceport-portrait.jpg'
import SpaceCapsuleLandscape from '../assets/technology/image-space-capsule-landscape.jpg'
import SpaceCapsulePortrait from '../assets/technology/image-space-capsule-portrait.jpg'
import TechnologyInfo from './TechnologyInfo'

const Technology = () => {
  const [currentTab, setCurrentTab] = UseCounterTab(0)
  const screenWidth = UseScreen()

  const technologyImages = [
    {
      id: 0,
      landscapeImage: VehicleLandscape,
      portraitImage: VehiclePortrait
    },
    {
      id: 1,
      landscapeImage: SpaceportLandscape,
      portraitImage: SpaceportPortrait
    },
    {
      id: 2,
      landscapeImage: SpaceCapsuleLandscape,
      portraitImage: SpaceCapsulePortrait
    }
  ]
  return (
    <div className='technology-wrapper'>
      <div className='container'>
        <Navigation />

        <h1 className='lead-heading'>
          <span className='lead-sub-heading'>03</span>
          space launch 101
        </h1>
      </div>

      <div className='main-technology-container'>
        <div className='technology-image-container'>
          <img
            src={
              screenWidth < 1440
                ? technologyImages[currentTab].landscapeImage
                : technologyImages[currentTab].portraitImage
            }
            alt='space'
          />
        </div>

        <div className='container'>
          <div className='technology-information-container'>
            <TechnologyTab
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
            />
            <TechnologyInfo currentTab={currentTab} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technology
