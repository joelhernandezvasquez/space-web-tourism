import React from 'react'

const CrewMenuTab = () => {

    const crewMenu = [
        {
            id:0  
        },
        {
            id:1  
        },
        {
            id:2  
        },
        {
            id:3  
        }
    ]
  return (
    <div className='crew-menu-tab'>
     {crewMenu.map(({id})=>{
      return <div key = {id} className='dots'></div>
     })}

    </div>
  )
}

export default CrewMenuTab