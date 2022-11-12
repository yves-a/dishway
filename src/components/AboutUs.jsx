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
            ​We're now on a new journey - Foodi! As foodies who have spent
            hours trying to pick a place to eat, and could literally never
            remember the restaurants our friends have recommended, we thought it
            was time to build a solution to our pain.
          </p>
        </div>
        <div className="images">
          <div className="column" style={{ marginRight: '1rem' }}>
            <img src={pic1} alt="restaurant"></img>
          </div>
          <div className="column">
            <img src={pic2} alt="plate of food"></img>
            <img src={pic2} alt="plate of food" style={{ marginTop: '1rem' }}></img>
          </div>
        </div>
      </div>
    </Margins>
  )
}

export default AboutUs
