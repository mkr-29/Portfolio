import React from 'react'
import About from './Components/About/About'
import Landing from './Components/Landing/Landing'
import MyWorks from './Components/MyWorks/MyWorks'
import Navbar from './Components/Navbar/Navbar'
import TechStack from './Components/TechStack/TechStack'
import "./Homepage.css"

export default function Homepage() {
  return (
    <div className='homepage'>
        <Navbar/>
        <Landing/>
        <About/>
        <MyWorks/>
        <TechStack/>
    </div>
  )
}
