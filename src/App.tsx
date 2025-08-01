import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Navbar from './components/Navbar';
import { Box, Stack } from '@mui/material';
import { CalendlyProvider } from './context/CalendlyContext';

function App() {
  return (
    <CalendlyProvider>
    <Box>
      {/* Top Navigation Bar */}
      <Navbar />

      {/* Main layout: Sidebar, Feed, and Rightbar */}
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
    </CalendlyProvider>
  );
}

export default App;

