import React from 'react'
import MyWorkCard from './Cards/MyWorkCard'
import "./MyWorks.css"
import WebDesigning from "./Assets/webDesigning.svg"
import WebDevelopment from "./Assets/webDevelopment.svg"

export default function MyWorks() {
  return (
    <div className='myworks'>
        <div className='myworks-inner'>
            <span className='myworks-heading'>What I Do</span>
            <div className='myworks-content'>
                <MyWorkCard
                    img={WebDesigning}
                    alt="Web Designing"
                    heading="Web Designing"
                    content="I have been doing web designing before web development but I am still a beginner at it though."
                />
                <MyWorkCard
                    img={WebDevelopment}
                    alt="Web Development"
                    heading="Web Development"
                    content="I have about three years of experience in front end web development till now and I am always expanding."
                />
                <MyWorkCard
                    img={WebDevelopment}
                    alt="Web Development"
                    heading="Web Development"
                    content="I have about three years of experience in front end web development till now and I am always expanding."
                />
            </div>
        </div>
    </div>
  )
}
