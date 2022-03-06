
import PropTypes from 'prop-types';
import Data from '../Data/data.json';

const DestinationInfo = ({currentDestination}) => {

  const {destinations} = Data;
  return (
    <div className="destination-info">
       
        <h1 className="destination-info-main-heading">{destinations[currentDestination].name}</h1>
        <p className="body-text">{destinations[currentDestination].description}</p>
        
        <div className="destination-distance-container">
         
         <div className="destination-distance-info">
         <h3>Avg distance</h3>
         <p> {destinations[currentDestination].distance}</p>
         </div>

         <div className="destination-distance-info">
         <h3>est. travel time</h3>
         <p> {destinations[currentDestination].travel}</p>
         </div>
          
        </div>
    </div>
  )
}

DestinationInfo.propTypes = {
  currentDestination:PropTypes.number.isRequired
}

export default DestinationInfo;