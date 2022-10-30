import React from 'react'
import '../styles/aboutus.scss'
import Margins from './Margins.jsx'
import pic1 from '../assets/images/pic1.png'
import pic2 from '../assets/images/pic2.png'
function AboutUs(props) {
  return (
    <Margins>
      <div className="about" ref={props.innerRef}>
        <div className="about-text">
          <h3 classname>What's DishWay?</h3>
          <h1>Our story</h1>
          <p>
            ​ We're now on a new journey - Foodi! As foodies who have spent
            hours trying to pick a place to eat, and could literally never
            remember the restaurants our friends have recommended, we thought it
            was time to build a solution to our pain. We've tried using the note
            app on our phones, pinning places on Google Maps, or even saving
            posts on Instagram / TikTok. However, these methods were super
            tedious and really disorganized. This is why we're building Foodi.
            We would love if you joined us on the journey to building the best
            app for foodies to organize their entire restaurant life :)
          </p>
        </div>
        <div className="row">
          <div className="column">
            <img src={pic1} alt="restaurant" style={{ width: '100%' }}></img>
          </div>
          <div className="column">
            <img src={pic2} alt="plate of food" style={{ width: '100%' }}></img>
            <img src={pic2} alt="plate of food" style={{ width: '100%' }}></img>
          </div>
        </div>
      </div>
    </Margins>
  )
}

export default AboutUs
