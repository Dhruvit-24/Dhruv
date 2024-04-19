import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import lap2 from '../asset/service2.jpg';

const Section2 = () => {
    const data = [
        { title: 'Concept', desc: 'I specialize in developing web applications using Framer. From custom animations to complex interactions, I bring your web app to life.' },
        { title: 'UX / UI Design', desc: 'I specialize in developing web applications using Framer. From custom animations to complex interactions, I bring your web app to life.' },
        { title: 'Prototype', desc: 'I specialize in developing web applications using Framer. From custom animations to complex interactions, I bring your web app to life.' }
    ];

    return (
        <>
            <Grid container display='flex' justifyContent='center' mt={3}>
                <Container sx={{ bgcolor: 'rgba(218, 197, 167, 0.15)' }}>
                    <Typography variant='h2' sx={{ color: '#DAC5A7' }}>Transforming Your Ideas into Reality</Typography>
                    <Box mt={1}><img src={lap2} style={{ width: '100%' }} /></Box>
                    {data.map((item, index) => (
                        <Box key={index} mt={3}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12} md={3}>
                                    <Typography variant='h5' sx={{ fontWeight: 'bold', color: '#DAC5A7' }}>
                                        {item.title}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={9}>
                                    <Typography variant='body1' sx={{ color: '#DAC5A7' }}>
                                        {item.desc}
                                    </Typography>
                                </Grid>
                            </Grid>
                            {index < data.length - 1 && <Divider fullwidth sx={{ my: 2, bgcolor: '#DAC5A7', }} />}
                        </Box>
                    ))}
                </Container>
            </Grid>
        </>
    );
}

export default Section2;
