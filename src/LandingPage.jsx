import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import fox from './img/fox.png'
const LandingPage = () => {
  return (
    <>
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
    </>
  )
}
export default LandingPage
