import { Box } from '@mui/material'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Section1 from '../About_container/Section1'

const About = () => {
    return (
        <Box sx={{ bgcolor: 'black' }} >
            {/* Navbar */}
            <Navbar />

            {/* Section */}
            <Section1 />

            {/* Footer */}
            <Footer />
        </Box>
    )
}

export default About