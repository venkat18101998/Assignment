import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const BlogContainer = () => {
    return (
        <div>
            <Typography component="div" sx={{ ml: 3 }}>
                <span className='website'>Website </span>
                <span className='restText'>
                    Tips and tutorials on how to build better websites
                </span>
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
                <Card sx={{ maxWidth: 460 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="blogs.png"
                            alt="green iguana"
                        />
                        <CardContent style={{ backgroundColor: '#ffe1e6' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                The 16 Best CMS System Today & How To Choose
                            </Typography>
                            <Typography variant="body2" color="text.secondary" >
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                            <CardActions>
                                <Typography gutterBottom component="div">
                                    Anna Fitzgerald 11/17/2023
                                </Typography>
                            </CardActions>
                        </CardContent>
                    </CardActionArea>

                </Card>
            </div>
        </div>
    )
}

export default BlogContainer
