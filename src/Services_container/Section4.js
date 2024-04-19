import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import lap4 from '../asset/service4.jpg'

const Section4 = () => {

    const data = [
        { title: 'Research ', desc: 'I take time to understand your business needs and audience to develop a unique concept for your website. Ill create wireframes that serve as the foundation for your site\'s design and functionality.' },
        { title: 'SEo Ranking', desc: 'I take time to understand your business needs and audience to develop a unique concept for your website. Ill create wireframes that serve as the foundation for your site\'s design and functionality.' },
        { title: 'SEO Support', desc: 'I take time to understand your business needs and audience to develop a unique concept for your website. Ill create wireframes that serve as the foundation for your site\'s design and functionality.' }
    ];

    return (
        <>
            <Grid container display='flex' justifyContent='center' mt={3} >
                <Container sx={{ bgcolor: 'rgba(218, 197, 167, 0.15)' }}>
                    <Typography variant='h2' sx={{ color: '#DAC5A7' }}>Boosting Your Website's Organic Search Traffic</Typography>
                    <Box mt={1}><img src={lap4} style={{ width: '100%' }} /></Box>
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
    )
}

export default Section4