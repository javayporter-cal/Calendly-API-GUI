import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DisplayCurrUser from './DisplayCurrUser';
import FetchReq from './FetchReq';
import { Box } from '@mui/material';

const ApiRequestComponent: React.FC = () => {
  const [bearerToken, setBearerToken] = useState<string>('');
  const [orgUri, setOrgUri] = useState<string>('');
  const [userUri, setUserUri] = useState<string>('');
  const [apiResponse, setApiResponse] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  const getOrgMemberships: string = `https://api.calendly.com/organization_memberships?organization=${orgUri}`;
  const getUserAvailSch: string = `https://api.calendly.com/user_availability_schedules?user=${userUri}`;
  const getUserSchEvents: string = `https://api.calendly.com/scheduled_events?user=${userUri}`;
  const getOrgSchEvents: string = `https://api.calendly.com/scheduled_events?organization=${orgUri}`;
  const getOrgEventTypes: string = `https://api.calendly.com/event_types?organization=${orgUri}`;
  const getUserEventTypes: string = `https://api.calendly.com/event_types?user=${userUri}`;
  const geteActivityLogs: string = `https://api.calendly.com/activity_log_entries?organization=${orgUri}`;

  const handleTokenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBearerToken(event.target.value);
  };

  const handleApiRequest = async () => {
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
      setOrgUri(testObj['current_organization']);
      setUserUri(testObj['uri']);
      // setAvatarUrl(testObj['avatar_url']);
    
    } catch (err) {
      setError((err as Error).message);
      setApiResponse('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{border: '3px solid black', maxWidth: '100%'}}>
      
        <TextField 
          // style={{ minWidth: '22em'}}
          id="outlined-basic" 
          label="Bearer Token"   
          variant="outlined" 
          type="text"
          value={bearerToken}
          onChange={handleTokenChange}  />
  
      
      <Button variant="outlined" style={{color: '#0066ff'}} onClick={handleApiRequest} disabled={loading}>
        {loading ? 'Loading...' : 'Get Current User'}
      </Button>

      <DisplayCurrUser currUserData={apiResponse} />

      {/* <FetchReq requestUrl={getOrgMemberships} bearerToken={bearerToken} buttonLabel='Get Organization Users' />
      <FetchReq requestUrl={getUserAvailSch} bearerToken={bearerToken} buttonLabel="List User's Availability Schedule" />
      <FetchReq requestUrl={getUserSchEvents} bearerToken={bearerToken} buttonLabel="Get User's Scheduled Events" />
      <FetchReq requestUrl={getOrgSchEvents} bearerToken={bearerToken} buttonLabel="Get Organization's Scheduled Events" />
      <FetchReq requestUrl={getUserEventTypes} bearerToken={bearerToken} buttonLabel="Get User's Event Types" />
      <FetchReq requestUrl={getOrgEventTypes} bearerToken={bearerToken} buttonLabel="Get Organization's Event Types" />
      <FetchReq requestUrl={geteActivityLogs} bearerToken={bearerToken} buttonLabel="Get Activity Logs" /> */}
      
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

    </Box>
  );
};

export default ApiRequestComponent;