import React from 'react'
import PropTypes from 'prop-types'

const DestinationTab = ({ currentDestination, setCurrentTab }) => {
  const destinations = [
    {
      id: 0,
      name: 'Moon'
    },
    {
      id: 1,
      name: 'Mars'
    },
    {
      id: 2,
      name: 'Europa'
    },
    {
      id: 3,
      name: 'Titan'
    }
  ]

  return (
    <ul className='destination-menu'>
      {destinations.map(({ id, name }) => {
        return (
          <li
            key={id}
            className={`destination-items ${id === currentDestination &&
              'active-link'}`}
            onClick={() => setCurrentTab(id)}
          >
            {name}
          </li>
        )
      })}
    </ul>
  )
}

DestinationTab.propTypes = {
  currentDestination: PropTypes.number.isRequired,
  setCurrentTab: PropTypes.func.isRequired
}

export default DestinationTab
