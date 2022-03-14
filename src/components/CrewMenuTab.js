import React from 'react'
import PropTypes from 'prop-types'

const CrewMenuTab = ({ activeDot, handleActiveDot }) => {
  const crewMenu = [
    {
      id: 0
    },
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    }
  ]
  return (
    <div className='crew-menu-tab'>
      {crewMenu.map(({ id }) => {
        return (
          <div
            key={id}
            className={`dots ${id === activeDot && 'active-dot'}`}
            onClick={() => handleActiveDot(id)}
          ></div>
        )
      })}
    </div>
  )
}
CrewMenuTab.propTypes = {
  activeDot: PropTypes.number.isRequired,
  handleActiveDot: PropTypes.func.isRequired
}

export default CrewMenuTab
