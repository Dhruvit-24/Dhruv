import React from 'react';
import { Grid, Typography, Card, CardMedia, Container } from '@mui/material';
import img1 from '../asset/work_1.png';
import img2 from '../asset/work_2.png';
import img3 from '../asset/work_3.png';
import img4 from '../asset/work_4.png';

const Section1 = () => {
    const images = [img1, img2, img3, img4];

    return (
        <Container sx={{ mt: 8 }}>
            <Typography variant='h1' sx={{ color: '#DAC5A7', textAlign: 'center', mt: 4, mb: 2 }}>
                Work
            </Typography>
            <Typography sx={{ color: '#DAC5A7', textAlign: 'center' }}>
                My latest web design projects and see how we can<br /> help bring your ideas to life.
            </Typography>
            <Grid container justifyContent='center' spacing={2} sx={{ mt: 3 }}>
                {images.map((image, index) => (
                    <Grid item key={index} xs={12} sm={6} md={6}>
                        <Card>
                            <CardMedia
                                component="img"
                                image={image}
                                alt={`Work ${index + 1}`}
                            />
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Section1;
