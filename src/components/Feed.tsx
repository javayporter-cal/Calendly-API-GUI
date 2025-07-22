import { Box } from '@mui/material';
import AuthControls from './AuthControls';
import { useState } from 'react';
import DisplayCurrUser from './DisplayCurrUser';


const Feed = () => {
  const [bearerToken, setBearerToken] = useState('');
  const [apiResponse, setApiResponse] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // For now this just logs - replace with your actual logic later
  const handleGetCurrentUser = async () => {
    console.log('Getting current user with token:', bearerToken);
    // You can pass bearerToken to FetchReq or trigger an API call
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://api.calendly.com/users/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${bearerToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.text();
      const jsonObject = JSON.parse(data);
      const testObj = jsonObject['resource'];
      setApiResponse(testObj);
      
    } catch (err) {
      setError((err as Error).message);
      setApiResponse('');
    } finally {
      setLoading(false);
    }
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


<DisplayCurrUser currUserData={apiResponse} />

    </Box>
  );
};

export default Feed;
