import React from 'react'
import '../styling/MainOne.css'
const MainOne = () => {
  return (
      <div className='bigDiv'>
          <div >
              <img
                  src={require('../images/spa-tools-and-decorations.jpg')}
                  alt='spa tools and decorations'
                 className='heroImg' />
          </div>
          <div className='questionBox'>
              <h2>It's time.<br/> Get ready to experience the<br/> <span className='ambiance'>ambiance </span><br/><span className='you'>YOU</span> create!</h2>
          <button className='book'>Book Now</button>
          </div>
      </div>
  )
}

export default MainOne