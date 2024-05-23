import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Box } from '@mui/material'
import Section1 from '../worksingle_conatiner/Section1'
import Section2 from '../worksingle_conatiner/Section2'

const WorkSingle = () => {
    return (
        <Box sx={{ bgcolor: 'black' }} >
            {/* Navbar */}
            <Navbar />

            {/* Section */}
            <Section1 />
            <Section2 />

            {/* Footer */}
            <Footer />
        </Box>
    )
}

export default WorkSingle