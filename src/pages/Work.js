import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Section1 from '../work_conatiner/Section1'

const Work = () => {
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

export default Work