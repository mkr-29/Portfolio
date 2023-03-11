import React from 'react'
import "./Socials.css"
import Twitter from './Assets/tw.svg'
import Github from './Assets/gh.svg'
import Linkedin from './Assets/ln.svg'
import Instagram from './Assets/in.svg'

export default function Socials() {
  return (
    <div className='socials'>
        <span/>
        <ul>
            <li><a href="https://twitter.com/mayankkumar_"><img src={Twitter} alt="Twitter" /></a></li>
            <li><a href="https://www.linkedin.com/in/mayank-kumar-0b1b1b1b1/"><img src={Linkedin} alt="Linkedin" /></a></li>
            <li><a href="https://www.instagram.com/mayankkumar_/" ><img src={Instagram} alt="Instagram" /></a></li>
            <li><a href="/" ><img src={Github} alt="Github" /></a></li>
        </ul>
    </div>
  )
}
