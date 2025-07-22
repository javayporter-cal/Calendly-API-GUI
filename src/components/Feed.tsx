import { Box } from '@mui/material';
import AuthControls from './AuthControls';
import { useState } from 'react';


const Feed = () => {
  const [bearerToken, setBearerToken] = useState('');

  // For now this just logs - replace with your actual logic later
  const handleGetCurrentUser = () => {
    console.log('Getting current user with token:', bearerToken);
    // You can pass bearerToken to FetchReq or trigger an API call
  };

  const handleOAuthConnect = () => {
    console.log('Redirect to Calendly OAuth flow');
    // In the future: redirect to Calendly OAuth endpoint
  };

  return (
    <Box bgcolor={'#f9f9f9'} flex={4} p={2}>
      <AuthControls
  bearerToken={bearerToken}
  onTokenChange={setBearerToken}
  onGetCurrentUser={handleGetCurrentUser}
  onOAuthConnect={handleOAuthConnect}
/>




    </Box>
  );
};

export default Feed;
