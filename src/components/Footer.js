import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Footer = () => {
    return (
        <>
            <Grid container display='flex' justifyContent='center' mt={4}>
                <Grid item display='flex' flexDirection='column' md={6}>
                    <Typography sx={{ color: 'rgba(218, 197, 167, 1)', textAlign: 'center' }}>Project in mind?</Typography>
                    <Typography variant='h1' sx={{ color: 'rgba(218, 197, 167, 1)', textAlign: 'center' }}>Let’s make your
                        Website shine</Typography>
                    <Typography sx={{ color: 'rgba(218, 197, 167, 1)', textAlign: 'center' }}>Premium web design, webflow, and SEO services to help your business stand out.</Typography>
                </Grid>

                <Grid item container display='flex' flexDirection='row' justifyContent='center' mt={4} spacing={20} >
                    <Grid item display='flex' flexDirection='column' ml={10} gap={3} alignItems='center'>
                        <Grid item display='flex' flexDirection='row' gap={1} alignItems='center'>
                            <InstagramIcon sx={{ color: 'rgba(218, 197, 167, 1)' }} />
                            <Typography sx={{ color: 'rgba(218, 197, 167, 1)' }}>Instagram</Typography>
                        </Grid>
                        <Grid item display='flex' flexDirection='row' gap={1} alignItems='center'>
                            <FacebookIcon sx={{ color: 'rgba(218, 197, 167, 1)' }} />
                            <Typography sx={{ color: 'rgba(218, 197, 167, 1)' }}>Facebook</Typography>
                        </Grid>
                        <Grid item display='flex' flexDirection='row' gap={1} alignItems='center'>
                            <LinkedInIcon sx={{ color: 'rgba(218, 197, 167, 1)' }} />
                            <Typography sx={{ color: 'rgba(218, 197, 167, 1)' }}>LinkedIn</Typography>
                        </Grid>
                        <Grid item display='flex' flexDirection='row' gap={1} alignItems='center'>
                            <XIcon sx={{ color: 'rgba(218, 197, 167, 1)' }} />
                            <Typography sx={{ color: 'rgba(218, 197, 167, 1)' }}>Twitter</Typography>
                        </Grid>
                    </Grid>

                    <Grid item display='flex' flexDirection='column' ml={4} gap={3} alignItems='center' sx={{ mr: '6' }}>
                        <Grid item display='flex' flexDirection='row' gap={1} alignItems='center'>
                            <Typography sx={{ color: 'rgba(218, 197, 167, 1)' }}>Home</Typography>
                        </Grid>
                        <Grid item display='flex' flexDirection='row' gap={1} alignItems='center'>
                            <Typography sx={{ color: 'rgba(218, 197, 167, 1)' }}>Services</Typography>
                        </Grid>
                        <Grid item display='flex' flexDirection='row' gap={1} alignItems='center'>
                            <Typography sx={{ color: 'rgba(218, 197, 167, 1)' }}>About</Typography>
                        </Grid>
                        <Grid item display='flex' flexDirection='row' gap={1} alignItems='center'>
                            <Typography sx={{ color: 'rgba(218, 197, 167, 1)' }}>Contact</Typography>
                        </Grid>
                        <Grid item display='flex' flexDirection='row' gap={1} alignItems='center'>
                            <Button sx={{ bgcolor: 'rgba(218, 197, 167, 1)', color: 'black' }}>More Templates <ArrowForwardIcon /> </Button>
                        </Grid>
                    </Grid>
                    <Grid item display='flex' flexDirection='column' ml={4} gap={3} alignItems='center' sx={{ mr: '6' }}>
                        <Typography sx={{ color: 'rgba(218, 197, 167, 1)' }} variant='h4'>CMS</Typography>
                        <Grid item display='flex' flexDirection='row' gap={1} alignItems='center'>
                            <Typography sx={{ color: 'rgba(218, 197, 167, 1)' }}>Work</Typography>
                        </Grid>
                        <Grid item display='flex' flexDirection='row' gap={1} alignItems='center'>
                            <Typography sx={{ color: 'rgba(218, 197, 167, 1)' }}>Work Single</Typography>
                        </Grid>
                        <Grid item display='flex' flexDirection='row' gap={1} alignItems='center'>
                            <Typography sx={{ color: 'rgba(218, 197, 167, 1)' }}>Blog</Typography>
                        </Grid>
                        <Grid item display='flex' flexDirection='row' gap={1} alignItems='center'>
                            <Typography sx={{ color: 'rgba(218, 197, 167, 1)' }}>Contact</Typography>
                        </Grid>
                    </Grid>
                    <Grid item display='flex' flexDirection='column' ml={4} gap={3} alignItems='center' sx={{ mr: '6' }}>
                        <Typography sx={{ color: 'rgba(218, 197, 167, 1)' }} variant='h4'>Utility Pages</Typography>
                        <Grid item display='flex' flexDirection='row' gap={1} alignItems='center'>
                            <Typography sx={{ color: 'rgba(218, 197, 167, 1)' }}>404 Error Page</Typography>
                        </Grid>
                        <Grid item display='flex' flexDirection='row' gap={1} alignItems='center'>
                            <Typography sx={{ color: 'rgba(218, 197, 167, 1)' }}>Password Protected</Typography>
                        </Grid>
                        <Grid item display='flex' flexDirection='row' gap={1} alignItems='center'>
                            <Typography sx={{ color: 'rgba(218, 197, 167, 1)' }}>Styleguide</Typography>
                        </Grid>
                        <Grid item display='flex' flexDirection='row' gap={1} alignItems='center'>
                            <Typography sx={{ color: 'rgba(218, 197, 167, 1)' }}>Licensing</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid >
        </>
    )
}

export default Footer