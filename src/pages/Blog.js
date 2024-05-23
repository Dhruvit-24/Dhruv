import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Box } from '@mui/material'
import Section1 from '../Blog_container/Section1'

const Blog = () => {
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

export default Blog