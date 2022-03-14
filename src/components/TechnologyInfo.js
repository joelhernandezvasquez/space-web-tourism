import React from 'react'
import PropTypes from 'prop-types'
import Data from '../Data/data.json'

const TechnologyInfo = ({ currentTab }) => {
  const { technology } = Data
  return (
    <div className='technology-info-container'>
      <h2 className='technology-title'>The Terminology...</h2>
      <h1 className='technology-action'>{technology[currentTab].name}</h1>
      <p className='body-text'>{technology[currentTab].description}</p>
    </div>
  )
}
TechnologyInfo.propTypes = {
  currentTab: PropTypes.number.isRequired
}

export default TechnologyInfo
