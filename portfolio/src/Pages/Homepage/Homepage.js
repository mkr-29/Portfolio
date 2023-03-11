import React from 'react'
import About from './Components/About/About'
import Landing from './Components/Landing/Landing'
import Navbar from './Components/Navbar/Navbar'
import "./Homepage.css"

export default function Homepage() {
  return (
    <div className='homepage'>
        <Navbar/>
        <Landing/>
        <About/>
    </div>
  )
}
