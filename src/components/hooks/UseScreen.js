
import {useState,useEffect} from 'react';

const UseScreen = () => {
  const [screenSize,setScreenSize] = useState(window.screen.width);

  useEffect(()=>{
  
    const getScreenSize = () =>{
        setScreenSize(window.screen.width);
    }

    window.addEventListener("resize",getScreenSize)
  
    return ()=>{
        console.log("it was removed");
        window.removeEventListener('resize',getScreenSize);
   }
  
  },[])

  return screenSize;
}

export default UseScreen;