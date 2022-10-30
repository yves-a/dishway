import React from 'react'
import '../styles/appsurvey.scss'
import { Helmet } from 'react-helmet'
import Margins from './Margins'
import app from '../assets/images/app.png'

function AppSurvey(props) {
  return (
    <Margins>
      <div className="background" ref={props.innerRef}>
        <div className="app">
          <img src={app} className="app-demo" alt="demonstration of app"></img>
        </div>
        <div className="right-side">
          <h1>Subscribe to our Newsletter</h1>
          <div className="survey-background">
            <Helmet>
              <script src="https://tally.so/widgets/embed.js"></script>
            </Helmet>
            <div className="survey">
              <iframe
                data-tally-src="https://tally.so/embed/3NqrYb?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                width="100%"
                height="200"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                title="DishWay Waitlist"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Margins>
  )
}

export default AppSurvey
