import { Container, Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import React from 'react';
import bg1 from '../asset/blog1.png';
import bg2 from '../asset/blog2.png';
import bg3 from '../asset/blog3.png';
import bg4 from '../asset/blog4.png';
import bg5 from '../asset/blog5.png';
import bg6 from '../asset/blog6.png';

const Section1 = () => {

    const data = [
        {
            img: bg1,
            title: 'How to Build a Stunning Website with Framer',
            desc: 'Learn how to create an impressive website using Framer with our step-by-step guide.'
        },
        {
            img: bg2,
            title: 'How to Build a Stunning Website with Framer',
            desc: 'Learn how to create an impressive website using Framer with our step-by-step guide.'
        },
        {
            img: bg3,
            title: 'How to Build a Stunning Website with Framer',
            desc: 'Learn how to create an impressive website using Framer with our step-by-step guide.'
        },
        {
            img: bg4,
            title: 'How to Build a Stunning Website with Framer',
            desc: 'Learn how to create an impressive website using Framer with our step-by-step guide.'
        },
        {
            img: bg5,
            title: 'How to Build a Stunning Website with Framer',
            desc: 'Learn how to create an impressive website using Framer with our step-by-step guide.'
        },
        {
            img: bg6,
            title: 'How to Build a Stunning Website with Framer',
            desc: 'Learn how to create an impressive website using Framer with our step-by-step guide.'
        }
    ];

    return (
        <Container sx={{ mt: 6 }}>
            <Grid container display='flex' direction='column'>
                <Grid item sx={{ textAlign: 'center' }}>
                    <Typography variant='h1' sx={{ color: '#DAC5A7' }}>Blog</Typography>
                </Grid>
                <Grid item sx={{ textAlign: 'center', mt: 2 }}>
                    <Typography variant='h6' sx={{ color: '#DAC5A7' }}>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor lorem.</Typography>
                </Grid>
                <Grid container spacing={2} justifyContent="center" mt={4}>
                    {data.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{ bgcolor: 'rgba(218, 197, 167, 0.05)', height: '100%', width: '100%' }}>
                                <CardMedia
                                    component="img"
                                    image={item.img}
                                    alt={item.title}
                                />
                                <CardContent>
                                    <Typography variant="h5" sx={{ color: '#DAC5A7', mt: 2 }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#DAC5A7', mt: 2 }}>
                                        {item.desc}
                                    </Typography>
                                    <Button variant='outlined' sx={{ mt: 2, color: '#DAC5A7' }}>Web Design</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
};
export default Section1;