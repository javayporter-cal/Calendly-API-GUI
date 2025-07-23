import {Typography, Paper } from '@mui/material';

const IntroSection = () => {
  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 2, backgroundColor: '#ffffff' }}>
      <Typography variant="h5" gutterBottom>
        Welcome to the Calendly API GUI
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        This tool allows you to interact with the Calendly API using either a personal Bearer Token or via OAuth.
      </Typography>
      <Typography variant="body2">
        To get started, enter your Bearer Token in the field below or click "Connect to Calendly via OAuth" to authorize access.
        Once connected, you’ll be able to view your current user info, event types, scheduled events, and more.
      </Typography>
    </Paper>
  );
};

export default IntroSection;
