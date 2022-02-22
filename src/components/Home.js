import React from 'react';
import MobileNavigation from './MobileNavigation';
import '../style/main.scss';


const Home = () => {
  return (
    
    <div className = "home_wrapper">
      <div className='container'>

    <MobileNavigation/>
    <section className='home-page-hero-section'>
      <div className='left-col'>
        <h3 className='sm-heading'>so, you want to travel to</h3>
        <h1 className='lg-heading'> space</h1>
        <p className='body-text'>
         Let’s face it; if you want to go to space, you might as well genuinely go to outer space and 
         not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly 
         out of this world experience!
        </p>
      </div>

      <div className='right-col'>
        <div className='explore-btn'>explore</div>
      </div> 
    </section>
      </div>
    
    </div>
  )
}

export default Home;