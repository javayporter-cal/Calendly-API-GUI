// src/components/PostEventModal.tsx
import React, { useState } from 'react';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';

type PostEventModalProps = {
  open: boolean;
  handleClose: () => void;
  bearerToken: string;
};

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const PostEventModal: React.FC<PostEventModalProps> = ({ open, handleClose, bearerToken }) => {
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setResponse('');

    const body = {
      name,
      slug,
      description,
      // Add other required fields as needed
    };

    try {
      const res = await fetch('https://api.calendly.com/event_types', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${bearerToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const result = await res.json();
      setResponse(JSON.stringify(result, null, 2));
    } catch (error) {
      setResponse('Error submitting request');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" gutterBottom>Create Event Type</Typography>
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ mt: 2 }}
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </Button>
        {response && (
          <Box mt={2}>
            <Typography variant="body2" component="pre" sx={{ whiteSpace: 'pre-wrap' }}>
              {response}
            </Typography>
          </Box>
        )}
      </Box>
    </Modal>
  );
};

export default PostEventModal;
