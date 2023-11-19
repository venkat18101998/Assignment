"use client"
import React from 'react'
import { Button, Grid, Typography } from '@mui/material';
import { useTheme } from '../themeColor/ButtonTheme';

const AboutUsContainer = () => {

    const { isHighContrast } = useTheme();
    const getButtonClassName = () => {
        return isHighContrast ? 'demoButton highContrast' : 'demoButton';
    };

    return (
        <React.Fragment>
            <Grid container justifyContent="center" sx={{ display: { xs: 'flex', sm: 'none' } }}>
                <Grid item xs={10} md={8} lg={6}>
                    <Typography align="center" className='pageHeader' gutterBottom>
                        27 Best About Us and About Me Page Examples of 2023 [+Template]
                    </Typography>
                    <Button className={getButtonClassName()} variant="contained" fullWidth>
                        Download Now: Free About Us Example
                    </Button>
                    <Typography variant="body1" align="center" paragraph>
                        Software as a service is one of the most sought-after business opportunities.
                        People looking for their next service role or business venture can develop valuable skills and knowledge in this fast-moving industry.
                    </Typography>
                    <div style={{ textAlign: 'center' }}>
                        <img
                            src="about-us.png"
                            alt="About Us"
                            style={{ width: '100%', maxWidth: '300px' }}
                        />
                    </div>
                </Grid>
            </Grid>

            <Grid ml={3} sx={{ display: { xs: 'none', sm: 'flex' } }}>
                <Typography
                    component="span"
                    className='fontWeight fontSize'
                >
                    27 Best Abot Us and  About Me Page Example of 2023 [+Template]
                </Typography>
            </Grid>
            <Grid ml={3} mt={2} sx={{ display: { xs: 'none', sm: 'flex' } }}>
                <Button variant="contained" className={getButtonClassName()}>
                    Download Now : Free About Us Example
                </Button>

            </Grid>
            <Grid container justifyContent="center" mt={3} sx={{ display: { xs: 'none', sm: 'flex' } }}>
                <Grid item style={{ width: '50%' }}>
                    <Typography component="span">
                        Software as a service is one of the most sought-after business opportunities.
                        People looking for their next service role or business venture can develop valuable skills and knowledge in this fast-moving industry.
                    </Typography>
                    <div style={{ textAlign: 'center' }}>
                        <img
                            src="about-us.png"
                            alt="Login"
                            style={{ width: '80%', maxHeight: '300px' }}
                        />
                    </div>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default AboutUsContainer
