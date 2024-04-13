import React from 'react';
import Grid from '@mui/material/Grid';
import bg from '../asset/Image.png';
import Typography from '@mui/material/Typography';
import img1 from '../asset/logo (1).png';
import img2 from '../asset/logo (2).png';
import img3 from '../asset/logo (3).png';
import img4 from '../asset/logo (4).png';
import img5 from '../asset/logo (5).png';

const Section1 = () => {
    const data = [img1, img2, img3, img4, img5];

    return (
        <>
            <Grid container display='flex' justifyContent='center' sx={{ width: '100%' }}>
                <Grid item xs={12} display='flex' justifyContent='center' >
                    <img src={bg} style={{ width: '100%' }} alt="Background" />
                </Grid>
                <Grid item xs={12} container sx={{ flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
                    <Typography variant='h1' sx={{ color: '#DAC5A7', textAlign: 'center', fontSize: 'clamp(24px, 5vw, 100px)', fontFamily: 'Satoshi' }}>
                        Web Designer & Developer
                    </Typography>
                    <Typography variant='body1' sx={{ color: '#DAC5A7', mt: '8px', textAlign: 'center' }}>
                        Premium web design, development, and SEO services to help your business stand out.
                    </Typography>

                    <Grid item display='flex' justifyContent='center' sx={{ gap: '10px', marginTop: '50px', gap: '50px' }}>
                        {data.map((image, index) => (
                            <Grid item key={index} xs={6} sm={4} md={3} sx={{ alignItems: 'center' }}>
                                <img src={image} alt={`Image ${index}`} style={{ maxWidth: '100%', height: 'auto', }} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Section1;
