import React from 'react'
import { useRef } from 'react'

import '../styles/landing.scss'
import Margins from './Margins.jsx'
import Button from './Button.jsx'
import AboutUs from '../components/AboutUs.jsx'
// import Survey from '../components/Survey.jsx'

import fox from '../assets/images/fox.png'
import AppSurvey from './AppSurvey'

function Landing() {
  const surveySection = useRef(null)
  const aboutSection = useRef(null)

  const scrollDown = (ref) => {
    console.log(ref)
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    })
  }
  return (
    <>
      <Margins>
        <div className="landing">
          <div className="landing-text">
            <h1>
              Find restaurants together, <br />
              without the hassle
            </h1>
            <p>
              Skip the indecisiveness of picking food and focus on having a good
              time.
            </p>
            <div className="landing-buttons">
              <div
                className="button-hover"
                onClick={() => scrollDown(surveySection)}
              >
                <Button
                  bgColour="#FFFFFF"
                  borderColour="#FF6C4A"
                  text="Apply for <br /> Early Access"
                />
              </div>
              <div
                className="button-hover"
                onClick={() => scrollDown(aboutSection)}
              >
                <Button
                  bgColour="#FF6C4A"
                  borderColour="rgba(52, 52, 52, 0.0)"
                  text="About Us"
                />
              </div>
            </div>
          </div>
          <img src={fox} alt="fox" loading="lazy" className="landing-img" />
        </div>
      </Margins>
      <AppSurvey innerRef={surveySection} />
      <AboutUs innerRef={aboutSection} />
    </>
  )
}

export default Landing
