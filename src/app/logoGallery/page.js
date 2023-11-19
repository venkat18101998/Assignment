import { Grid, Typography, Paper } from '@mui/material'
import React from 'react'

const imageUrls = [
    'images/logo4.png',
    'images/logo2.png',
    'images/logo3.png',
    'images/logo4.png',
    'images/logo4.png',
    'images/logo2.png',
    'images/logo3.png',
    'images/logo4.png',
];

const LogoGalleryContainer = () => {
    return (
        <React.Fragment>
            <Grid container >
                <Typography
                    component="span"
                    ml={3}
                    className='pageHeader'
                >
                    Find the perfect Logo for Dude
                </Typography>
            </Grid>
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
                <Grid container spacing={2} mt={2} justifyContent="center" style={{ backgroundColor: '#f0f0f0', maxWidth: '800px' }}>
                    {imageUrls.map((imageUrl, index) => (
                        <Grid key={index} item xs={6} sm={3}>
                            <div style={{ position: 'relative' }}>
                                <img src={imageUrl} alt={`Image ${index + 1}`} style={{ width: '100%' }} />
                                <img src="images/icons-fav.png" alt="Favorite" style={{ position: 'absolute', top: '5px', right: '5px', width: '30px', height: '30px' }} />
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>

        </React.Fragment>
    )
}

export default LogoGalleryContainer
