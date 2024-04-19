import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Frontpage from "./pages/Frontpage";
import Services from "./pages/Services";
import Work from "./pages/Work";
import WorkSingle from "./pages/WorkSingle";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogSingle from "./pages/BlogSingle";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Box from '@mui/material/Box';

function App() {
  return (
    <Box sx={{ color: '#161617', height: '100vh' }}>
      <Router>
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/service" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/worksingle" element={<WorkSingle />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogsingle" element={<BlogSingle />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
