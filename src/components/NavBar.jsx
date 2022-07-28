import React from 'react'
import '../styling/NavBar.css'
const NavBar = (props) => {
  return (
    <nav>
          <div className='nav'>
          <div className='navItem'>Home</div>
          <div className='navItem'>Experiences</div>
          <div className='navItem'>Gallery</div>
          <div className='navItem'>Book</div>
          <div className='navItem'>About</div>
        </div>
        <div>
          <a href='https://sweetambiancellc.com'><button className='shop'>Shop Now</button></a>
        </div>
    </nav>
  )
}

export default NavBar