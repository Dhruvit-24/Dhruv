import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Section2 = () => {
    const data = [
        {
            number: '01',
            title: 'Web design',
            desc: 'Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.',
            last: 'About Webdesign'
        },
        {
            number: '02',
            title: 'Development',
            desc: 'Get custom web development solutions that are tailored to your specifications, designed to deliver a flawless user experience.',
            last: 'About Webflow'
        },
        {
            number: '03',
            title: 'Content & Seo',
            desc: 'Proven SEO strategies that enhance your online performance, bringing you to the forefront of organic search results.',
            last: 'About SEO'
        }
    ];

    return (
        <>
            <Grid container spacing={2} justifyContent="center" sx={{ width: '100%', mt: '50px' }}>
                {data.map((item, index) => (
                    // Adjusted Grid item to ensure proper alignment and structure
                    <Grid key={index} item xs={12} sm={6} md={4} lg={4} xl={3} display="flex" justifyContent="center">
                        <Card sx={{
                            width: '100%', // Ensure card takes the full width of the grid item
                            maxWidth: 345, // Set a maximum width to prevent the card from stretching on larger screens
                            display: 'flex',
                            flexDirection: 'column',
                            bgcolor: 'rgba(218, 197, 167, 0.05)',
                            border: '1px solid',
                            justifyContent: 'center',
                            m: 2 // Add margin to ensure cards don't touch each other on wrap
                        }}>
                            <CardContent>
                                <Typography sx={{ color: '#DAC5A7' }}>
                                    {item.number}
                                </Typography>
                                <Typography sx={{ color: '#DAC5A7' }}>
                                    {item.title}
                                </Typography>
                                <Typography sx={{ color: '#DAC5A7' }}>
                                    {item.desc}
                                </Typography>
                            </CardContent>
                            <CardContent>
                                <Typography sx={{ color: '#DAC5A7', display: 'flex', alignItems: 'center' }}>
                                    <ArrowOutwardIcon />
                                    {item.last}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default Section2;
