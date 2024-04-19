import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Section1 from '../contact_container/Section1'

const Contact = () => {
    return (
        <Box sx={{ bgcolor: 'black' }}>
            {/* navbar */}
            <Navbar />

            {/* Section */}
            <Section1 />

            {/* Footer */}
            <Footer />
        </Box>
    )
}

export default Contact