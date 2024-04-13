import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Box from '@mui/material/Box'
import Section1 from '../Front_container/Section1'
import Section2 from '../Front_container/Section2'
import Section3 from '../Front_container/Section3'
import Section4 from '../Front_container/Section4'
import Section5 from '../Front_container/Section5'
import Section6 from '../Front_container/Section6'

const Frontpage = () => {
    return (
        <Box sx={{ bgcolor: 'black' }} >
            {/* Navbar */}
            <Navbar />

            {/* Section */}
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            {/* footer */}
            <Footer />

        </Box>
    )
}

export default Frontpage