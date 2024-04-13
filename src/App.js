import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Frontpage from "./pages/Frontpage";
import Box from '@mui/material/Box'

function App() {
  return (
    <Box sx={{ color: '#161617', height: '100vh' }}>
      <Router>
        <Routes>
          <Route path="/" element={<Frontpage />} />
        </Routes>
      </Router>

    </Box>
  );
}

export default App;
