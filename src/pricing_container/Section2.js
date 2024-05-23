import { Card, CardContent, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Section2 = () => {

    const data = [
        {
            title: 'What is the typical turnaround time for a website project?',
            desc: 'The timeline for a website project can vary depending on the complexity of the project and the specific requirements of the client. However, we work closely with our clients to establish a timeline that works for everyone and strive to deliver projects in a timely and efficient manner.'
        },
        {
            title: 'Can you help with website maintenance and updates after the project is completed?'
        },
        {
            title: 'How do you ensure that my website will be optimized for search engines?'
        },
        {
            title: 'What is your process for website design and development?'
        }
    ]

    return (
        <Container sx={{ mt: 5 }}>
            <Grid container display='flex'>
                <Grid item md={6}>
                    <Typography variant='h3' alignItems='flex-start' color='#DAC5A7' py='50%'>Common <br /> Questions</Typography>
                </Grid>
                <Grid item md={6} flexDirection='column' sx={{ gap: 2 }}>
                    {data.map((item, index) => (
                        <Card sx={{ bgcolor: 'rgba(218, 197, 167, 0.05)', mb: 2 }} key={index}>
                            <CardContent>
                                <Typography variant="h6" color='#DAC5A7'>
                                    {item.title}
                                </Typography>
                                <Typography color='#DAC5A7' mt={2}>{item.desc}</Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Grid>


            </Grid>
        </Container>
    )
}

export default Section2