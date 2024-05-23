import { Container, Grid, Typography, Card, CardContent, Avatar } from '@mui/material'
import React from 'react'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import bg from '../asset/blogsingle.jpg'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Section1 = () => {

    const data = [
        {
            title: 'Date',
            value: '23rd Aug 2023'
        },
        {
            title: 'Category',
            value: 'Web Development'
        },
        {
            title: 'Reading time',
            value: '10 mins'
        }
    ];


    const data2 = [
        {
            title: 'Elit ullamcorper dignissim',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt. Enim neque volutpat ac tincidunt vitae. Dictum at tempor commodo ullamcorper a lacus vestibulum sed. Condimentum mattis pellentesque id nibh tortor id. Nisl condimentum id venenatis a condimentum. Nunc sed blandit libero volutpat sed. Tristique sollicitudin nibh sit amet commodo. Sit amet justo donec enim diam vulputate ut pharetra. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Massa vitae tortor condimentum lacinia quis vel. Hendrerit dolor magna eget est lorem ipsum dolor. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur.'
        },
        {
            title: 'Hendrerit dolor magna',
            desc: 'Tristique sollicitudin nibh sit amet commodo. Sit amet justo donec enim diam vulputate ut pharetra. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Massa vitae tortor condimentum lacinia quis vel. Hendrerit dolor magna eget est lorem ipsum dolor. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Suspendisse faucibus interdum posuere.'
        },
        {
            title: 'Hendrerit dolor magna',
            desc: 'Tristique sollicitudin nibh sit amet commodo. Sit amet justo donec enim diam vulputate ut pharetra. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Massa vitae tortor condimentum lacinia quis vel. Hendrerit dolor magna eget est lorem ipsum dolor. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Suspendisse faucibus interdum posuere.'
        }
    ];

    const data3 = [
        {
            icon: <InstagramIcon />,
            name: 'Instagram',
        },
        {
            icon: <TwitterIcon />,
            name: 'Twitter'
        },
        {
            icon: <FacebookIcon />,
            name: 'Facebook'
        }
    ]
    return (
        <Container sx={{ mt: '50px' }}>
            <Grid container display='flex' justifyContent='center'>
                <Grid item sx={{ textAlign: 'center', flexDirection: 'column' }}>
                    <Typography variant='h2' sx={{ color: '#DAC5A7' }}>How to Build a Stunning Website <br /> with Framer</Typography>
                    <Typography sx={{ color: '#DAC5A7', mt: 2 }}>Learn how to create an impressive website using Framer with <br /> our step-by-step guide.</Typography>
                    <Grid item display='flex' justifyContent='center' mt={2} flexDirection='row' gap={2}>
                        <ArrowCircleDownIcon sx={{ color: '#DAC5A7' }} /> <Typography sx={{ color: '#DAC5A7' }}>Read More</Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container justifyContent="center" mt={4} spacing={2} flexDirection='row'>
                {data.map((item, index) => (
                    <Grid item key={index}>
                        <Card sx={{ bgcolor: 'rgba(218, 197, 167, 0.05)', width: 'auto', borderRadius: '10px' }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ color: '#DAC5A7' }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#DAC5A7' }}>
                                    {item.value}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Grid item mt={5}><img src={bg} style={{ height: '100%', width: '100%' }} /></Grid>

            <Grid item container display='flex' justifyContent="center" mt={4} spacing={2} flexDirection='column'>
                {data2.map((item, index) => (
                    <Grid item key={index} md={12}>
                        <Typography variant="h4" sx={{ color: '#DAC5A7' }}>
                            {item.title}
                        </Typography>
                        <Typography variant="h6" sx={{ color: '#DAC5A7' }}>
                            {item.desc}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
            <Card sx={{ bgcolor: 'rgba(218, 197, 167, 0.05)', mt: 3 }}>
                <Grid item display='flex' justifyContent='flex-start' flexDirection='column' px={4} >
                    <Typography variant='h3' sx={{ color: '#DAC5A7', mt: 4 }}>Conclusion</Typography>
                    <Typography sx={{ color: '#DAC5A7', mt: 4 }}>Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Massa vitae tortor <br /> condimentum lacinia quis vel. Hendrerit dolor magna eget est lorem ipsum dolor. Mollis aliquam ut <br /> porttitor leo a diam sollicitudin tempor id. </Typography>
                </Grid>
                <Grid container display='flex' flexDirection='row' alignItems='center' mt={5} px={4}>
                    <Avatar sx={{ mt: 3, px: 2, py: 2 }} />
                    <Typography sx={{ color: '#DAC5A7' }}>Dhruvit Prajapati</Typography>
                </Grid>
            </Card>

            <Grid container justifyContent='center' mt={5} spacing={2}>
                {data3.map((item, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ bgcolor: 'rgba(218, 197, 167, 0.05)', borderRadius: '10px' }}>
                            <CardContent sx={{ color: '#DAC5A7' }}>
                                {item.icon}
                                <Typography variant="body1" sx={{ color: '#DAC5A7', textAlign: 'center', mt: 1 }}>
                                    {item.name} <ArrowOutwardIcon />
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>


        </Container >
    )
}

export default Section1
