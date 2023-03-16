import React from 'react'
import Socials from '../Socials/Socials'
import './Footer.css'
import MK from "./Assets/mk.svg"
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-socials'><Socials/></div>
        <div className='footer-inner'>
            <div className='footer-up'>
                <img src={MK} alt="MK" className='footer-logo'/>
                <div>
                    <Link to='/'>Home</Link>
                    <span/>
                    <Link to='/about'>About</Link>
                    <span/>
                    <Link to='/projects'>Projects</Link>
                    <span/>
                    <Link to='/contact'>Contact</Link>
                </div>
            </div>
            <div className='footer-down'>
                <h3>Thanks For Visiting</h3>
                <p>© 2023 Made by Mayank Kumar</p>
            </div>
        </div>
    </div>
  )
}
