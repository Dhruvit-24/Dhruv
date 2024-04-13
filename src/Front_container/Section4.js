import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Section4 = () => {
    return (
        <>
            <Grid container justifyContent="center" alignItems="center" mt='50px' direction="column">
                <Typography variant='h6' sx={{ color: '#DAC5A7', mb: 2, textAlign: 'center' }}>The Process</Typography>
                <Typography variant='h1' sx={{ color: '#DAC5A7', mb: 2, textAlign: 'center', maxWidth: '710px', width: '100%' }}>Your Website in 5 steps</Typography>
                <Typography sx={{ color: '#DAC5A7', textAlign: 'center', fontSize: '20px', fontWeight: 400, maxWidth: '500px', width: '100%' }}>
                    Our process ensures that we create a website tailored to your business needs.
                </Typography>
                <ArrowDownwardIcon sx={{ color: '#DAC5A7' }} />
            </Grid>
        </>
    );
};

export default Section4;
