import React from "react";
import '../styles/landing.scss';
import Margins from "./Margins";

import fox from '../assets/images/fox.png'

function Landing () {
    return (
      <Margins>
        <div className="landing">
          <div className="landing-text">
            <h1>Find restaurants together, <br/>
            without the hassle</h1>
            <p>Skip the indecisiveness of picking food and focus on having a good time.</p>
          </div>
          <img
            src={fox}
            alt="fox"
            loading="lazy"
            className="landing-img"
          />
        </div>
      </Margins>
      /* <Box sx={{ flexGrow: 1, flexDirection: 'row', height: '100vh' }}>
        <Typography
          variant="h3"
          component="div"
          align="left"
          sx={{
            flexGrow: 1,
            color: 'black',
            margin: 15,
            marginTop: 20,
            display: 'inline-block',
          }}
        >
          Find restaurants together, {<br />}without the hassle
        </Typography>
        {/* <img
          src={fox}
          alt="fox"
          loading="lazy"
          style={{
            float: 'right',
            position: 'absolute',
            top: '10%',
            right: '10%',
            marginTop: 20,
          }}
        /> */
      // </Box> */
    )
}

export default Landing;