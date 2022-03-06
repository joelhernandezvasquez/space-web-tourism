import React from 'react'
import PropTypes from 'prop-types';
import UseCounterTab from './hooks/UseCounterTab';

const DestinationTab = ({ setCurrentTab }) => {
  const [activeTab,handleCounter] = UseCounterTab(0);

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

  const handleCurrentTab = (id) =>{
    setCurrentTab(id);
    handleCounter(id);
  }
  return (
    <ul className='destination-menu'>
      {destinations.map(({ id, name }) => {
        return (
          <li
            key={id}
            className={`destination-items ${id === activeTab && 'active-link'}`}
            onClick={() => handleCurrentTab(id)}
          >
            {name}
          </li>
        )
      })}
    </ul>
  )
}

DestinationTab.propTypes = {
  setCurrentTab: PropTypes.func.isRequired
}

export default DestinationTab
