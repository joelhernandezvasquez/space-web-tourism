import React from 'react'
import PropTypes from 'prop-types'

const TechnologyTab = ({ currentTab, setCurrentTab }) => {
  const menu = [
    {
      id: 0
    },
    {
      id: 1
    },
    {
      id: 2
    }
  ]
  return (
    <div className='technology-menu-tab'>
      {menu.map(({ id }) => {
        return (
          <div
            key={id}
            className={`technology-menu-dot ${id === currentTab && 'active'}`}
            onClick={() => setCurrentTab(id)}
          >
            {id + 1}{' '}
          </div>
        )
      })}
    </div>
  )
}
TechnologyTab.propTypes = {
  currentTab: PropTypes.number.isRequired,
  setCurrentTab: PropTypes.func.isRequired
}

export default TechnologyTab
