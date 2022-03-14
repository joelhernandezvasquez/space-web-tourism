import React from 'react'
import Navigation from './Navigation'
import CrewMenuTab from './CrewMenuTab'
import CrewInfo from './CrewInfo'
import UseCounterTab from './hooks/UseCounterTab'
import DouglasHurley from '../assets/crew/image-douglas-hurley.webp'
import MarkShuttleworth from '../assets/crew/image-mark-shuttleworth.png'
import VictorGlover from '../assets/crew/image-victor-glover.png'
import AnoushehAnsari from '../assets/crew/image-anousheh-ansari.png'

const Crew = () => {
  const [activeDot, setActiveDot] = UseCounterTab(0)

  const crewImages = [
    {
      id: 0,
      image: DouglasHurley
    },
    {
      id: 1,
      image: MarkShuttleworth
    },
    {
      id: 2,
      image: VictorGlover
    },
    {
      id: 3,
      image: AnoushehAnsari
    }
  ]
  const handleActiveDot = id => {
    setActiveDot(id)
  }

  return (
    <div className='crew-wrapper'>
      <div className='container'>
        <Navigation />
        <h1 className='lead-heading'>
          <span className='lead-sub-heading'>02</span>
          meet your crew
        </h1>

        <div className='main-crew-container'>
          <div className='crew-image-container'>
            <img src={crewImages[activeDot].image} alt='crew members' />
          </div>

          <div className='crew-information-container'>
            <CrewMenuTab
              activeDot={activeDot}
              handleActiveDot={handleActiveDot}
            />
            <CrewInfo activeDot={activeDot} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Crew
