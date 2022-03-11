import React from 'react'
import PropTypes from 'prop-types';
import Data from '../Data/data.json';

const CrewInfo = ({activeDot}) => {
  const {crew} = Data;
  return (
    <div className='crew-info-container'>
       <h2 className='crew-title'>{crew[activeDot].role}</h2>
       <h1 className='crew-name'>{crew[activeDot].name}</h1>
       <p className='body-text'>
         {crew[activeDot].bio}
        </p>
    </div>
  )
}

CrewInfo.propTypes = {
  activeDot:PropTypes.number.isRequired,
 }
export default CrewInfo