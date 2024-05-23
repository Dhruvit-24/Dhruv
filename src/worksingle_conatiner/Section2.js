import React from 'react';
import { Container, Grid, Typography, Card, CardContent } from '@mui/material';

const Section2 = () => {
    const data = [
        { heading: 'Challenge', desc: 'Our client was struggling to attract and retain customers due to an outdated and non-responsive website that didn’t align with their brand identity.' },
        { heading: 'Goal', desc: 'Our goal was to create a modern and visually appealing website that reflected the client’s brand and delivered a seamless user experience. The website needed to be responsive, easy to navigate, and optimized for search engines to improve their online visibility.' },
        { heading: 'Result', desc: 'Our team developed a custom website design that was not only visually stunning but also user-friendly and optimized for search engines. The client’s website now showcases their products and services in a professional and engaging manner, and has seen a significant increase in organic traffic and customer engagement. The client is thrilled with the final result and has received positive feedback from their customers.' }
    ];

    return (
        <Container>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6} mt={5}>
                    <Typography variant='h3' sx={{ color: '#DAC5A7' }}>
                        Concept, Design, and <br /> Development. All-in-one.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} mt={5}>
                    {data.map((item, index) => (
                        <Card key={index} sx={{ mb: 2, bgcolor: 'rgba(218, 197, 167, 0.15)' }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ color: '#DAC5A7' }}>
                                    {item.heading}
                                </Typography>
                                <Typography variant="body1" sx={{ mt: 1, color: '#DAC5A7' }}>
                                    {item.desc}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
}

export default Section2;
