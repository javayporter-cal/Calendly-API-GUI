import React, { useState } from 'react';
import DisplayCurrUser from './DisplayCurrUser';
import FetchReq from './FetchReq';
import { Box } from '@mui/material';
import { useCalendlyContext } from '../context/CalendlyContext';

const ApiRequestComponent: React.FC = () => {

  const { bearerToken, orgUri, userUri } = useCalendlyContext();
  // const [apiResponse, setApiResponse] = useState<string>('');
  // const [loading, setLoading] = useState<boolean>(false);
  //const [error, setError] = useState<string | null>(null);
  
  const getOrgMemberships: string = `https://api.calendly.com/organization_memberships?organization=${orgUri}`;
  const getUserAvailSch: string = `https://api.calendly.com/user_availability_schedules?user=${userUri}`;
  const getUserSchEvents: string = `https://api.calendly.com/scheduled_events?user=${userUri}`;
  const getOrgSchEvents: string = `https://api.calendly.com/scheduled_events?organization=${orgUri}`;
  const getOrgEventTypes: string = `https://api.calendly.com/event_types?organization=${orgUri}`;
  const getUserEventTypes: string = `https://api.calendly.com/event_types?user=${userUri}`;
  const geteActivityLogs: string = `https://api.calendly.com/activity_log_entries?organization=${orgUri}`;


  return (
    <Box sx={{maxWidth: '100%'}}>
      

      <FetchReq requestUrl={getOrgMemberships} bearerToken={bearerToken} buttonLabel='Get Organization Users' />
      <FetchReq requestUrl={getUserAvailSch} bearerToken={bearerToken} buttonLabel="List User's Availability Schedule" />
      <FetchReq requestUrl={getUserSchEvents} bearerToken={bearerToken} buttonLabel="Get User's Scheduled Events" />
      <FetchReq requestUrl={getOrgSchEvents} bearerToken={bearerToken} buttonLabel="Get Organization's Scheduled Events" />
      <FetchReq requestUrl={getUserEventTypes} bearerToken={bearerToken} buttonLabel="Get User's Event Types" />
      <FetchReq requestUrl={getOrgEventTypes} bearerToken={bearerToken} buttonLabel="Get Organization's Event Types" />
      <FetchReq requestUrl={geteActivityLogs} bearerToken={bearerToken} buttonLabel="Get Activity Logs" />
      
      {/* {error && <p style={{ color: 'red' }}>Error: {error}</p>} */}
      

    </Box>
  );
};

export default ApiRequestComponent;

