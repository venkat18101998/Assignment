import React from 'react'
import { Grid, Hidden } from '@mui/material';
import './LoginPageStyle.css';
import FormFieldComponent from '../logForm/page';


const LoginContainer = () => {
  return (
    <>
      <Grid container>
        <Hidden smDown>
          <Grid item md={7}>
            <div style={{ backgroundColor: '#f0f0f0' }}>
              <img
                src="login_image.png"
                alt="Login"
                style={{ width: '100%', height: 'auto', maxHeight: '595px' }}
              />
            </div>
          </Grid>
        </Hidden>
        <Grid item xs={12} md={5} container
          justifyContent="center"
          alignItems="center">
          <FormFieldComponent />
        </Grid>
      </Grid>
    </>
  )
}

export default LoginContainer;
