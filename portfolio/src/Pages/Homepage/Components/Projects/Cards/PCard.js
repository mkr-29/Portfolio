import React from 'react'
import "./PCard.css"
import {Link} from "react-router-dom"

export default function Card(parse) {
  return (
    <div className='mts-card p-card'>
        <img src={parse.img} alt={parse.alt} className='p-card-img'/>
        <span className='p-card-title mts-card-title'><Link to="/">{parse.title}</Link></span>
    </div>
  )
}