import React from 'react'
import NavBar from './NavBar'
import '../styling/pgOne.css'
import MainOne from './MainOne'

const pgOneContainer = () => {
  return (
      <div className='bgOne'>
          <NavBar />
          <MainOne/>
      </div>
  )
}

export default pgOneContainer