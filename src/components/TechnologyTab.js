import React from 'react'

const TechnologyTab = () => {

    const menu = [
        {
            id:0
            
        },
        {
            id:1
        },
        {
            id:2
        }
    ]
  return (
    <div className='technology-menu-tab'>
       {menu.map(({id})=>{
           return <div key={id} class="technology-menu-dot">{id + 1} </div>
       })}
    </div>
  )
}

export default TechnologyTab