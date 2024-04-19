import { Grid, Typography, Box } from '@mui/material'
import React from 'react'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import lap from '../asset/service1.png'

const Section1 = () => {
    const data = [
        { name: 'clients', nummber: '150+' },
        { name: 'Project', nummber: '300+' },
        { name: 'Happy Clients', nummber: '100%' },
        { name: 'Follow Us', nummber: '100K' },
    ]

    return (
        <Grid container display='flex' justifyContent='center' >
            <Grid item justifyContent='center' md={6}>
                <Typography variant='h1' sx={{ color: '#DAC5A7', textAlign: 'center' }}>Web Design
                    & Framer</Typography>
                <Grid item mt={2} display='flex' justifyContent='center' >
                    <Typography sx={{ color: '#DAC5A7', textAlign: 'center' }}>Premium web design, development, and SEO services to help your business stand out.</Typography>
                </Grid>
                <Grid display='flex' justifyContent='center' mt={1} gap={1}>
                    <ArrowCircleDownIcon sx={{ color: '#DAC5A7' }} /><Typography sx={{ color: '#DAC5A7' }}>My Services</Typography>
                </Grid>
                <Box sx={{ mt: 2 }}><img src={lap} style={{ width: '100%', height: '50%', }} /></Box>
                <Grid container item justifyContent="center" spacing={10} mt={1} >
                    {data.map((item, index) => (
                        <Grid item key={index} >
                            <Typography sx={{ color: '#DAC5A7', textAlign: 'center', }}>{item.name}</Typography>
                            <Typography variant='h3' sx={{ color: '#DAC5A7', textAlign: 'center' }}>{item.nummber}</Typography>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Section1