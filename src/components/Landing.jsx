import React from "react";
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import fox from '../assets/images/fox.png'

function Landing () {
    return (
        <Box sx={{ flexGrow: 1, flexDirection: 'row', height: '100vh' }}>
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
        <img
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
        />
      </Box>
    )
}

export default Landing;