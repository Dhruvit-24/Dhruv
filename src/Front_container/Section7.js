import React from 'react';
import bg from '../asset/Image.png';
import { Box, Grid, Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Section7 = () => {
    return (
        <>
            <Grid container justifyContent='center' textAlign='center' mt='50px'>
                <Grid item xs={12}>
                    <Typography variant='h2' color='rgba(218, 197, 167, 1)'> Dhruvit</Typography>
                </Grid>
                <Grid item xs={12} >
                    <Typography variant='h2' color='rgba(218, 197, 167, 1)' width='100%'>Prajapati</Typography>
                </Grid>
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                    <img src={bg} alt="Background" style={{ width: '50%', height: '100%', justifyItems: 'center' }} />
                </Grid>

                <Grid item display='flex' justifyContent='space-between' mt={5}>
                    <Box width='100%' height='auto'><Typography variant='h3' sx={{ color: 'rgba(218, 197, 167, 1)', alignItems: 'flex-start' }}>A website that leaves
                        a lasting impression!
                    </Typography></Box>
                    <Box sx={{ height: 'auto', width: '100%' }}> <Typography sx={{ color: 'rgba(218, 197, 167, 1)' }}>Hi, I'm Arik Andersson - a freelancer specializing in premium web design, development, and SEO services. I'm passionate about creating unique and effective solutions for my clients, and I bring a personal touch to every project. Let's work together to bring your vision to life!</Typography></Box>
                </Grid>
                <Box sx={{}}>
                    <InstagramIcon sx={{ color: 'rgba(218, 197, 167, 1)', mr: 1 }} />
                    <TwitterIcon sx={{ color: 'rgba(218, 197, 167, 1)', ml: 1 }} />
                </Box>
            </Grid>
        </>
    );
}

export default Section7;
