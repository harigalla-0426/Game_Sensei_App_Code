import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import gta from '../images/gta.jpg'
import { useState, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import GameContext from '../context/GameContext'
import axios from 'axios'

let theme = createTheme({
  palette: {
    primary: {
      main: '#1e293b',
    },
    secondary: {
      main: '#1f2937',
    },
  },
})

export default function SignIn() {
  const { setLogin, setLanding, setSearch } = useContext(GameContext)
  const [isauthenticated, setIsauthenticated] = useState(false)
  const [open, setOpen] = useState(false)
  const [messageResponse, setMessageResponse] = useState('')
  const url =
    import.meta.env.VITE_APP_ENVIROMENT === 'DEV'
      ? import.meta.env.VITE_LOCAL_URL
      : import.meta.env.VITE_PUBLIC_URL

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  })
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const reqBody = {
      email: inputs.email,
      password: inputs.password,
    }

    try {
      const { status } = await axios.post(`${url}login/validate`, reqBody)
      if (status === 200) {
        setIsauthenticated(true)
      }
    } catch ({ code, response }) {
      setOpen(true)
      setMessageResponse(`${code}: ${response?.data?.message}`)
    }
  }
  if (isauthenticated) {
    setLogin(false)
    setLanding(true)
    setSearch(false)
    return <Navigate to="/" />
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{ width: '150vh', height: '70vh', overflow: 'hidden' }}
      >
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
        >
          <Alert severity="error" sx={{ width: '100%' }}>
            {messageResponse}
          </Alert>
        </Snackbar>
        {/* <Grid container component="main" sx={{ height: "90vh"}}> */}
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${gta})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={handleChange}
                value={inputs.email}
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                onChange={handleChange}
                value={inputs.password}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                onClick={handleSubmit}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}
