import React from "react";
import { Grid, Card, Typography, CardContent, Avatar, Container } from "@mui/material";
import img1 from '../asset/img1.png'
import img2 from '../asset/img2.png'
import img3 from '../asset/img3.png'
import img4 from '../asset/img4.png'
import img5 from '../asset/img5.png'
import img6 from '../asset/img6.png'

const Section6 = () => {
    const data = [
        {
            title: 'Amazing Results with Arik’s Premium Web Design Services.',
            desc: 'Arik is a top-notch web designer who created a stunning website for my business. He was attentive to my needs and provided excellent customer service throughout the entire process. I highly recommend his services.',
            image: img1,
            name: 'John Smith',
            company: 'ABC Company'
        },
        {
            title: 'Amazing Results with Arik’s Premium Web Design Services.',
            desc: 'Arik is a top-notch web designer who created a stunning website for my business. He was attentive to my needs and provided excellent customer service throughout the entire process. I highly recommend his services.',
            image: img2,
            name: 'John Smith',
            company: 'ABC Company'
        },
        {
            title: 'Amazing Results with Arik’s Premium Web Design Services.',
            desc: 'Arik is a top-notch web designer who created a stunning website for my business. He was attentive to my needs and provided excellent customer service throughout the entire process. I highly recommend his services.',
            image: img3,
            name: 'John Smith',
            company: 'ABC Company'
        },
        {
            title: 'Amazing Results with Arik’s Premium Web Design Services.',
            desc: 'Arik is a top-notch web designer who created a stunning website for my business. He was attentive to my needs and provided excellent customer service throughout the entire process. I highly recommend his services.',
            image: img4,
            name: 'John Smith',
            company: 'ABC Company'
        },
        {
            title: 'Amazing Results with Arik’s Premium Web Design Services.',
            desc: 'Arik is a top-notch web designer who created a stunning website for my business. He was attentive to my needs and provided excellent customer service throughout the entire process. I highly recommend his services.',
            image: img5,
            name: 'John Smith',
            company: 'ABC Company'
        },
        {
            title: 'Amazing Results with Arik’s Premium Web Design Services.',
            desc: 'Arik is a top-notch web designer who created a stunning website for my business. He was attentive to my needs and provided excellent customer service throughout the entire process. I highly recommend his services.',
            image: img6,
            name: 'John Smith',
            company: 'ABC Company'
        }

    ]
    // const leftColumnData = data.slice(0, 3);
    // const rightColumnData = data.slice(3, 6);
    return (
        <>
            <Grid container spacing={2} justifyContent="center" mt='50px'>
                {/* Title and Description */}
                <Grid item xs={12}>
                    <Typography variant="h1" sx={{ color: '#DAC5A7', textAlign: 'center' }}>
                        What my<br />
                        <Typography variant="h1" component="span">clients say</Typography>
                    </Typography>
                    <Typography sx={{ color: '#DAC5A7', mt: '15px', textAlign: 'center' }}>
                        See what my clients have to say about working with me and the results I helped them achieve.
                    </Typography>
                </Grid>

                {/* Left Side Cards */}
                <Grid item container xs={12} md={6} direction="column" alignItems="center" spacing={5}>
                    {data.slice(0, 3).map((item, index) => (
                        <Grid item key={index}>
                            <Card sx={{ width: '100%', height: '100%', bgcolor: 'rgba(218, 197, 167, 0.05)', border: '1px solid', borderRadius: '5px' }}>
                                <CardContent>
                                    <Typography sx={{ color: '#DAC5A7', mt: '10px' }}>{item.title}</Typography>
                                    <Typography sx={{ color: '#DAC5A7', mt: '20px' }}>{item.desc}</Typography>
                                    <Avatar src={item.image} alt={item.name} sx={{ width: 56, height: 56, mt: '30px' }} />
                                    <Typography sx={{ color: '#DAC5A7' }}>{item.name}</Typography>
                                    <Typography sx={{ color: '#DAC5A7' }}>{item.company}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Right Side Cards */}
                <Grid item container xs={12} md={6} direction="column" alignItems="center" spacing={5}>
                    {data.slice(3, 6).map((item, index) => (
                        <Grid item key={index}>
                            <Card sx={{ width: '100%', height: '100%', bgcolor: 'rgba(218, 197, 167, 0.05)', border: '1px solid', borderRadius: '5px' }}>
                                <CardContent>
                                    <Typography sx={{ color: '#DAC5A7', mt: '10px' }}>{item.title}</Typography>
                                    <Typography sx={{ color: '#DAC5A7', mt: '20px' }}>{item.desc}</Typography>
                                    <Avatar src={item.image} alt={item.name} sx={{ width: 56, height: 56, mt: '30px' }} />
                                    <Typography sx={{ color: '#DAC5A7' }}>{item.name}</Typography>
                                    <Typography sx={{ color: '#DAC5A7' }}>{item.company}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

            </Grid>
        </>
    );
};

export default Section6;
