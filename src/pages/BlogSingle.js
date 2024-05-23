import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Section1 from '../Blogsingle_container/Section1';
import Section2 from '../Blogsingle_container/Section2';

const BlogSingle = () => {
    return (
        <Box sx={{ bgcolor: 'black' }}>

            {/* navbar */}
            <Navbar />

            {/* Section */}
            <Section1 />
            <Section2 />

            {/* Fooetr */}
            <Footer />
        </Box>
    )
}

export default BlogSingle