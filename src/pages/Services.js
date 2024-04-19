import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Box } from '@mui/material'
import Section1 from '../Services_container/Section1'
import Section2 from '../Services_container/Section2'
import Section3 from '../Services_container/Section3'
import Section4 from '../Services_container/Section4'

const Services = () => {
    return (
        <Box sx={{ bgcolor: 'black' }} >
            {/* Navbar */}
            <Navbar />

            {/* Section */}
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />

            {/* Footer */}
            <Footer />
        </Box>
    )
}

export default Services