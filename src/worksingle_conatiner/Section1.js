import { Container, Grid, Typography, Card, CardContent } from '@mui/material'
import React from 'react'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import img1 from '../asset/service2.jpg'

const Section1 = () => {
    const data = [
        { name: 'Client', secondname: 'Pawel Gola' },
        { name: 'Timeline', secondname: '3 Weeks' },
        { name: 'Services', secondname: 'Template' },
        { name: 'Website', secondname: 'gola.io' }
    ];

    return (
        <Container sx={{ mt: 7 }}>
            <Grid container direction="column" alignItems="center">
                <Grid item xs={12}>
                    <Typography variant='h1' sx={{ color: '#DAC5A7', textAlign: 'center' }}>
                        Space
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h6' sx={{ color: '#DAC5A7', textAlign: 'center' }}>
                        Modern and visually appealing website that <br /> reflected the client's brand.
                    </Typography>
                </Grid>

                <Grid item container justifyContent="center" spacing={2} mt={4}>
                    {data.map((item, index) => (
                        <Grid key={index} item xs={12} sm={6} md={3}>
                            <Card sx={{ bgcolor: 'rgba(218, 197, 167, 0.15)' }}>
                                <CardContent>
                                    <Typography variant='subtitle1' sx={{ color: '#DAC5A7', textAlign: 'center' }}>
                                        {item.name}
                                    </Typography>
                                    <Typography variant='body2' sx={{ color: '#DAC5A7', textAlign: 'center' }}>
                                        {item.secondname}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Grid item display='flex' justifyContent='center' mt={5} gap={1}>
                    <ArrowCircleDownIcon sx={{ color: '#DAC5A7' }} /> <Typography sx={{ color: '#DAC5A7' }}>More Details</Typography>
                </Grid>
                <img src={img1} style={{ height: '100%', width: '100%', marginTop: 10 }} />
            </Grid>
        </Container >
    );
}

export default Section1;
