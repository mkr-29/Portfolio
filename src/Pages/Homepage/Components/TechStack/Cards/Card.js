import React from 'react'
import "./Card.css"
import {Link} from "react-router-dom"

export default function Card(parse) {
  return (
    <div className='mts-card'>
        <img src={parse.img} alt={parse.alt} className='mts-card-img'/>
        <span className='mts-card-title'><Link to="/">{parse.title}</Link></span>
    </div>
  )
}
