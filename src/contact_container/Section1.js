import { Button, Container, Grid, TextField, Typography, Card, CardContent, CardMedia } from '@mui/material';
import React from 'react';
import img from '../asset/Image.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Section1 = () => {

    const carddata = [
        { icon: InstagramIcon, name: 'Instagram' },
        { icon: LinkedInIcon, name: 'LinkedIn' },
        { icon: FacebookIcon, name: 'Facebook' },
        { icon: TwitterIcon, name: 'Twitter' },
    ];

    return (
        <Container sx={{ mt: '50px' }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <img src={img} alt="Image" style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={6} sx={{ bgcolor: 'rgba(218, 197, 167, 0.15)' }}>
                    <Container>
                        <Typography sx={{ color: '#DAC5A7' }}>Contact</Typography>
                        <Typography variant='h3' sx={{ color: '#DAC5A7' }}>Let’s get in touch.</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField fullWidth id="standard-basic" label="Name" variant="standard" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth id="standard-basic" label="Email" variant="standard" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="standard-multiline-static"
                                    label="Message"
                                    multiline
                                    rows={4}
                                    variant="standard"
                                />
                            </Grid>

                            <Button fullWidth sx={{ bgcolor: 'rgba(218, 197, 167, 1)', color: 'black', mt: 2 }}>Send Message</Button>

                        </Grid>
                    </Container>
                </Grid>
            </Grid>
            <Grid container spacing={2} mt={4}>
                {carddata.map((item, index) => (
                    <Grid item xs={3} key={index} display='flex' justifyContent='center'>
                        <Card sx={{ height: '100px', width: '100%', bgcolor: 'rgba(218, 197, 167, 0.15)', alignItems: 'center', justifyContent: 'center' }}>
                            <CardMedia
                                component={item.icon}
                                sx={{ fontSize: 50, alignContent: 'center' }}
                            />
                            <CardContent>
                                <Typography variant="body2" color='#DAC5A7' textAlign='center'>
                                    {item.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

        </Container>
    );
};

export default Section1;
