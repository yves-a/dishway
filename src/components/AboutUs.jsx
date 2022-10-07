import React from "react";
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function AboutUs () {
    return (
        <Box
        sx={{
          flexGrow: 1,
          flexDirection: 'row',
          backgroundColor: 'red',
          height: '100vh',
        }}
      >
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
          About Us
        </Typography>
      </Box>
    )
}

export default AboutUs;