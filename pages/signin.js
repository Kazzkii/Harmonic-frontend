import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AccountCircle } from '@material-ui/icons';


const theme = createTheme();


export default function SignIn() {
  let [user, setUser] = useState([])
  let [username, setName] = useState()
  let [password, setPass] = useState()

  

  let getUser = async () => {
      let response = await fetch('http://0.0.0.0:8000/api/')
      let data = await response.json()
      console.log('User:',data)
      setUser(data)
    }

  const handleSubmit = (event) => {
    getUser()
    user.map(user => {
      if (user.username == username && user.password == password) {
        console.log("success")
        window.location = "/dashboard"
        
      }
    })


    
  };
  const userOnChange = (event) => {
    setName(event.target.value)
  };
  const passOnChange = (event) => {
    setPass(event.target.value)
  };

  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AccountCircle />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoComplete="username" onChange={userOnChange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password" onChange={passOnChange}
              autoComplete="current-password"
            />
            <Button
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
        {/*<Copyright sx={{ mt: 8, mb: 4 }} />*/}
      </Container>
    </ThemeProvider>
  );
}