import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Section1 from '../pricing_container/Section1'
import Section2 from '../pricing_container/Section2'

const Pricing = () => {
    return (
        <Box sx={{ bgcolor: 'black' }}>
            {/* Navbaer */}
            <Navbar />

            {/* Section  */}
            <Section1 />
            <Section2 />

            {/* Footer */}
            <Footer />
        </Box>
    )
}

export default Pricing