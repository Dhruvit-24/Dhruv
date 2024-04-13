import Container from '@mui/material/Container';
import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import laptop from '../asset/Grid.png';
import phone from '../asset/Grid (1).png';
import phone2 from '../asset/Grid (2).png';
import laptop2 from '../asset/1.png';

const Section3 = () => {

    const imgdata = [
        { image: laptop },
        { image: phone },
        { image: phone2 },
        { image: laptop2 }
    ];

    return (
        <>
            <Container sx={{ display: 'flex', justifyContent: 'center', mt: '50px' }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography sx={{ color: '#DAC5A7', fontSize: '64px' }}>Selected Work</Typography>
                    </Grid>
                    {imgdata.map((item, index) => (
                        <Grid key={index} item xs={6} sm={6} md={6} lg={6} display='flex' justifyContent='center' sx={{ width: '684px', height: '513px' }}>
                            <Card >
                                <CardMedia
                                    component="img"
                                    style={{ height: '100%', width: '100%' }}
                                    height="140"
                                    image={item.image}
                                    alt={item.title}
                                />
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default Section3;
