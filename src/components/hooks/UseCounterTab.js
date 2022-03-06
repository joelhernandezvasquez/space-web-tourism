import {useState} from 'react';

const UseCounterTab = (defaultValue = 0) => {
  const [counter,setCounter] = useState(defaultValue);

  const handleCounter = (value) =>{
      setCounter(value);
  }

  return [counter,handleCounter];

}

export default UseCounterTab;