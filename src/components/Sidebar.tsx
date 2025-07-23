import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import PostEventModal from './PostEventModal';

const Sidebar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const bearerToken = import.meta.env.VITE_CALENDLY_TOKEN as string;

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <Box p={2} flex={1} borderRight="1px solid #ccc">
      {/* Other sidebar items */}
      <Button variant="outlined" onClick={handleOpen}>
        Create Event Type
      </Button>

      <PostEventModal open={modalOpen} handleClose={handleClose} bearerToken={bearerToken} />
    </Box>
  );
};

export default Sidebar;
