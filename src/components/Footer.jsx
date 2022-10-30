import React from 'react'
import '../styles/footer.scss'
import Margins from './Margins.jsx'
import Button from './Button'
function Footer() {
  return (
    <div className="footer">
      <Margins>
        <div className="footer-text">
          <div className="menu">
            <ul>
              <h1>Home</h1>
              <li>Our Story</li>
              <li>Community</li>
              <li>Events</li>
              <li>Contact</li>
            </ul>
            <ul>
              <h1>Resources</h1>
              <li>Survey</li>
              <li>News</li>
              <li>Guides</li>
              <li>Help Center</li>
            </ul>
            <ul>
              <h1>Community</h1>
              <li>Newsletter</li>
              <li>Profile</li>
              <li>Friends</li>
              <li>Forums</li>
            </ul>
          </div>
          <div className="subscribe">
            <h1>Subscribe to DishWay Newsletter</h1>
            <p>
              Subscribe to be the first one to know about updates. Enter your
              email.
            </p>
            <div className="input">
              <input
                type="email"
                id="email"
                pattern=".+@globex\.com"
                size="30"
                required
              ></input>
              <div className="button-hover">
                <input type="submit" value="Sus"></input>
              </div>
            </div>
          </div>
        </div>
      </Margins>
    </div>
  )
}

export default Footer
