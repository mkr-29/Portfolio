import React from 'react'
import "./MyWorkCard.css"

export default function MyWorkCard(parse) {
  return (
    <div className='myworks-card'>
        <img src={parse.img} alt={parse.alt} />
        <div className='myworks-card-text'>
            <span className='myworks-card-heading'>{parse.heading}</span>
            <span className='myworks-card-content'>{parse.content}</span>
        </div>
    </div>
  )
}
