import React from "react";
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

function Header () {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: 'black' }}
            >
              DishWay
            </Typography>
            <Button color="inherit">Sign Up</Button>
          </Toolbar>
        </AppBar>
      </Box>
    )
}

export default Header;