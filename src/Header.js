import React from 'react';
import Typed from 'react-typed';
import Particles from 'react-particles-js'

function Header() {
    return (

        <div className='header-wrapper'>
            <Particles
      params={{
        particles: {
          number:{
          value:30,
          density: {
            enable: true,
            value_area: 900
          }
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 6,
            color: 'grey'
          }
        }
      }
      }}
      />
            <div className='main-info'>                
                <h1>Kartik Jha</h1>
                <Typed
                className='typed-text'
                strings={['Web Design', 'Web Development','Full Stack Developer', 'Back-end', 'Front-end']} 
                typeSpeed={40}
                backSpeed={60}
                loop                               
                />

            <a href='#' className='btn-main-offer'>contact me</a>
            </div>
            
        </div>
    )
}

export default Header;
