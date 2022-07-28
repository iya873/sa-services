import React from 'react'
import '../styling/Header.css'
const Header = () => {
  return (
      <header className='header'>
          <div>
              <p>000-000-000<br />
              brand@email.com</p>
          </div>
          <div className='logo'>
              <span className='logoIcon'></span><h1>Sweet Ambiance <span className='llc'>LLC</span></h1>
          </div>
          <div className='socials'>
              <span>☺ </span> 
              <span>☺ </span> 
              <span>☺</span> <br/>
              <span>@sweetambiancellc</span>
          </div>
     </header>
  )
}

export default Header