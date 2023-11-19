"use client"
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { TextField, CardHeader, Typography, Divider, Grid } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useRouter } from "next/navigation";

const imageUrls = [
  'images/icons-facebook.png',
  'images/icons-twitter.png',
  'images/icons-github.png',
  'images/icons-google.png',
];

const showIcon = "visibility.png";
const hideIcon = "visibility_off.png";


const FormFieldComponent = () => {

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');





  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setErrorMessage('Please fill in both email and password fields');
      return;
    }
    localStorage.setItem('storedEmail', email);
    router.push('/aboutUs');
  };



  return (
    <div className='mobileVieForm'>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography component="span" className='pageHeader'>
          Welcome to Materialize <img src="/waving-hand.png" alt='Image' style={{ maxWidth: '100%', marginLeft: '5px' }} />
        </Typography>
      </div>
      <Typography
        component="span"
      >
        Please sign-in to your account and start the adventure
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={handleEmailChange}
          fullWidth
          margin="normal"
        />
        <div style={{ position: 'relative' }}>
          <TextField
            label="Password"
            variant="outlined"
            value={password}
            onChange={handlePasswordChange}
            type={showPassword ? 'text' : 'password'}
            fullWidth
            margin="normal"
          />
          <img
            src={showPassword ? hideIcon : showIcon}
            alt={showPassword ? "Hide" : "Show"}
            style={{
              position: 'absolute',
              top: '55%',
              right: '15px',
              transform: 'translateY(-50%)',
              height: '20px',
              width: 'auto',
              cursor: 'pointer',
            }}
            onClick={togglePasswordVisibility}
          />
        </div>

        <div className='checkBoxField'>
          <FormControlLabel control={<Checkbox size="small" />} label="Remember Me" />
          <Typography
            component="span"
            style={{ color: 'blue' }}
          >
            Forgot Password?
          </Typography>
        </div>
        {errorMessage && (
          <p style={{ color: 'red' }}>{errorMessage}</p>
        )}

        <Button style={{ marginTop: '10px' }} variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
      <div>
        <Typography component="span" mt={3} style={{ display: 'flex', justifyContent: 'center' }}>
          New on our platform? &nbsp;  <span style={{ color: 'blue' }}> Create an account</span>
        </Typography>
        <Divider style={{ paddingTop: '10px' }}>or</Divider>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%', paddingTop: '10px', margin: '0 auto' }}>
        {imageUrls.map((imageUrl, index) => (
          <Grid ml={2} key={index} item xs={12} sm={12}>
            <img src={imageUrl} alt={`Image ${index + 1}`} />
          </Grid>
        ))}
      </div>



    </div>
  )
}

export default FormFieldComponent;
