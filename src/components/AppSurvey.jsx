import React from 'react'
import '../styles/appsurvey.scss'
import { Helmet } from 'react-helmet'
import Margins from './Margins'
import app from '../assets/images/app.png'

function AppSurvey(props) {
  return (
    <Margins>
      <div className="appsurvey" ref={props.innerRef}>
        <img src={app} className="demo-img" alt="demonstration of app"></img>
        <div className="text-container">
          <h1>Subscribe to Our Newsletter</h1>
          <div className="survey-container">
            <Helmet>
              <script src="https://tally.so/widgets/embed.js"></script>
            </Helmet>
            <div className="survey">
              <iframe
                data-tally-src="https://tally.so/embed/wbZWLE?alignLeft=1&hideTitle=1&transparentBackground=1"
                width="90%"
                height="100%"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                title="DishWay Waitlist"
              ></iframe>
              {/* <h2>Hey! You've caught us before we're ready.</h2>
              <p>Want to be first in line for when we launch our private beta? Join our waitlist!</p>
              <a href="https://tally.so#tally-open=wbZWLE&tally-layout=modal&tally-width=395"><Button
                  bgColour="#FF6C4A"
                  borderColour="rgba(52, 52, 52, 0.0)"
                  text="Signup!"></Button></a>
              <button data-tally-width="500" data-tally-open="wbZWLE" data-tally-layout="modal">Signup!</button> */}
            </div>
          </div>
        </div>
      </div>
    </Margins>
  )
}

export default AppSurvey
