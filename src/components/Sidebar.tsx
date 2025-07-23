import { useState } from 'react';
import { Box, Button } from '@mui/material';
import PostEventModal from './PostEventModal';
//import { useCalendlyContext } from '../context/CalendlyContext';


const Sidebar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  //const { bearerToken } = useCalendlyContext();
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <Box p={2} flex={1} borderRight="1px solid #ccc">
      {/* Other sidebar items */}
      <Button variant="outlined" onClick={handleOpen}>
        Create Event Type
      </Button>

      <PostEventModal open={modalOpen} handleClose={handleClose}  />
    </Box>
  );
};

export default Sidebar;
