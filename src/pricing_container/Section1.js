import React from 'react';
import { Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';

const Section1 = () => {
    const data = [
        {
            title: 'Lite',
            price: '$3900.00',
            desc: 'Affordable web design package with a custom design, CMS integration, and responsive design for small businesses and startups.',
            features: ['Concept', 'Strategy', 'Webdesign', 'Prototype']
        },
        {
            title: 'Premium',
            price: '$6900.00',
            desc: 'Comprehensive web design package with UX/UI design, interactive prototype, Framer development, and CMS integration for medium businesses.',
            features: ['Concept', 'Strategy', 'Webdesign', 'Prototype']
        },
        {
            title: 'Gold',
            price: '$9900.00',
            desc: 'Elite web design package with SEO optimization, research, and SEO support for businesses looking to dominate their market.',
            features: ['Concept', 'Strategy', 'Webdesign', 'Prototype']
        }
    ];

    return (
        <Container sx={{ mt: 10 }}>
            <Grid container justifyContent='center' alignItems='center' spacing={2}>
                <Grid item xs={12} >
                    <Typography variant='h2' sx={{ color: '#DAC5A7', textAlign: 'center', fontFamily: 'Gambetta' }}>Experience the Power of <br /> Premium Web Design</Typography>
                    <Typography variant='h6' sx={{ color: '#DAC5A7', textAlign: 'center', mt: 2 }}>Choose a package that suits your needs and budget.<br /> Transparent pricing with no hidden fees.</Typography>
                </Grid>
                {data.map((item, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} mt={3}>
                        <Card variant="outlined" sx={{ bgcolor: 'rgba(218, 197, 167, 0.05)', height: '100%', width: '100%' }}>
                            <CardContent>
                                <Typography variant='h6' color='#DAC5A7'>{item.title}</Typography>
                                <Typography variant='h4' color='#DAC5A7'>{item.price}</Typography>
                                <Typography color='#DAC5A7'>{item.desc}</Typography>
                                <ul style={{ color: '#DAC5A7', paddingLeft: 0 }}>
                                    {item.features.map((feature, idx) => (
                                        <React.Fragment key={idx}>
                                            <li>{feature}</li>
                                            {idx !== item.features.length - 1 && <hr />}
                                        </React.Fragment>
                                    ))}
                                </ul>
                                <Button fullWidth sx={{ bgcolor: 'rgba(218, 197, 167, 1)', color: 'black' }}>Get Started</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Section1;
