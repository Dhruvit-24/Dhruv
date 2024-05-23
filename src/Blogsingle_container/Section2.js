import { Container, Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';
import React from 'react';
import bg1 from '../asset/blogsin1.png';
import bg2 from '../asset/blogsin2.png';
import bg3 from '../asset/blogsin3.png';

const Section2 = () => {
    const data = [
        {
            img: bg1,
            title: 'How to Build a Stunning Website with Framer',
            desc: 'Learn how to create an impressive website using Framer with our step-by-step guide.'
        },
        {
            img: bg2,
            title: 'How to Build a Stunning Website with React',
            desc: 'Learn how to create an impressive website using React with our step-by-step guide.'
        },
        {
            img: bg3,
            title: 'How to Build a Stunning Website with Angular',
            desc: 'Learn how to create an impressive website using Angular with our step-by-step guide.'
        }
    ];

    return (
        <Container sx={{ mt: 5 }}>
            <Grid container spacing={3}>
                <Typography variant='h2' color='#DAC5A7'>Related News</Typography>
                <Grid item sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', overflowX: 'auto' }}>
                    {data.map((item, index) => (
                        <Card key={index} sx={{ minWidth: 275, marginRight: 2, bgcolor: 'rgba(218, 197, 167, 0.05)' }}>
                            <CardMedia
                                component="img"
                                image={item.img}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" sx={{ color: '#DAC5A7' }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="#DAC5A7">
                                    {item.desc}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
};

export default Section2;
