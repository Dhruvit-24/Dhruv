import { Container, Grid, Typography, Card, CardContent, Divider } from '@mui/material';
import React from 'react';
import img from '../asset/Image.png';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import img2 from '../asset/about.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const Section1 = () => {
    const iconarr = [
        { icon: InstagramIcon, name: 'Instagram' },
        { icon: TwitterIcon, name: 'Twitter' },
        { icon: LinkedInIcon, name: 'Linkedin' },
        { icon: FacebookIcon, name: 'Facebook' },
    ];

    const data2 = [
        { title: 'Awwwards SOTD', date: '2023' },
        { title: 'CSSDA SOTD', date: '2023' },
        { title: 'Awwwards Website of the Month', date: '2023' },
        { title: 'CSSDA SOTD', date: '2022' },
        { title: 'Awwwards SOTD', date: '2022' },
        { title: 'Awwwards Website of the Year', date: '2021' },
    ]

    return (
        <>
            <Container>
                <Grid container display='flex' alignItems="center" justifyContent="space-between">
                    <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
                        <img src={img} style={{ maxWidth: '100%', height: 'auto' }} alt="Dhruvit's Image" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ mt: 8 }}>
                        <Typography variant='h3' sx={{ color: '#DAC5A7' }}>Dhruvit Prajaapti</Typography>
                        <Typography sx={{ color: '#DAC5A7' }}>Delivering Premium Web Design and Development Services to Boost Your Online Presence.</Typography>
                    </Grid>
                    <Grid container justifyContent='center' alignItems='center' mt={1}>
                        <ArrowCircleDownIcon sx={{ color: '#DAC5A7', marginRight: '5px' }} />
                        <Typography sx={{ color: '#DAC5A7' }}>About Me</Typography>
                    </Grid>
                    <Grid item container justifyContent='flex-end' sx={{ bgcolor: 'rgba(218, 197, 167, 0.15)', mt: 5 }}>
                        <Container>
                            <Grid item xs={12}>
                                <Typography variant='h3' sx={{ color: '#DAC5A7' }}>Dhruvit</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{ color: '#DAC5A7' }}>Your Partner in Bringing Your Web Design Vision to Life</Typography>
                            </Grid>
                            <Grid item xs={12} mt={1}>
                                <Typography sx={{ color: '#DAC5A7' }}>As a freelance web designer and developer, I bring a unique combination of creativity and technical expertise to every project. With a keen eye for design and a passion for delivering user-friendly web experiences, I work closely with clients to understand their needs and bring their vision to life</Typography>
                            </Grid>
                            <Grid item xs={12} mt={1}>
                                <Typography sx={{ color: '#DAC5A7' }}>My approach is rooted in collaboration and communication, and I take pride in my ability to explain technical concepts in simple terms. Whether I'm developing a new website from scratch or optimizing an existing site for search engines, I always strive for excellence in both form and function. With a dedication to quality and a commitment to staying on top of the latest trends and technologies, I am confident in my ability to deliver exceptional results that exceed my clients' expectations.</Typography>
                            </Grid>
                            <Grid item xs={12} mt={1}>
                                <img src={img2} style={{ width: '100%' }} alt="About" />
                            </Grid>
                            <Grid item xs={12} mt={1} container justifyContent="center" >
                                {iconarr.map((item, index) => (
                                    <Grid item key={index} display='flex' sx={{ mx: 1 }}>
                                        <Card sx={{ width: '100px', textAlign: 'center', bgcolor: 'rgba(218, 197, 167, 0.15)' }}>
                                            <CardContent>
                                                <item.icon sx={{ fontSize: 32 }} />
                                                <Typography sx={{ color: '#DAC5A7' }}>{item.name}</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                    </Grid>

                    <Grid container justifyContent='flex-end' sx={{ mt: 5 }}>
                        {data2.map((item, index) => (
                            <React.Fragment key={index}>
                                <Grid item xs={12} display='flex' justifyContent='center'>
                                    <Card sx={{ bgcolor: 'rgba(218, 197, 167, 0.15)', width: '50%' }}>
                                        <CardContent>
                                            <Grid container spacing={2}>
                                                <Grid item xs={6}>
                                                    <Typography sx={{ color: '#DAC5A7' }}>{item.title}</Typography>
                                                </Grid>
                                                <Grid item xs={6} textAlign="right">
                                                    <Typography sx={{ color: '#DAC5A7' }}>{item.date}</Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                {index < data2.length - 1 && <Grid item xs={12}><Divider /></Grid>}
                            </React.Fragment>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Section1;
