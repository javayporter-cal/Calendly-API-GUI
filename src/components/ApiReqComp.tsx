import React, { useState } from 'react';
import MyComponent from './ResponseTable';
import { TableBody, TableCell, TableContainer } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../index.css';
import DisplayCurrUser from './DisplayCurrUser';
import FetchReq from './FetchReq';

const ApiRequestComponent: React.FC = () => {
  const [bearerToken, setBearerToken] = useState<string>('');
  const [orgUri, setOrgUri] = useState<string>('');
  const [userUri, setUserUri] = useState<string>('');
  const [avatarUrl, setAvatarUrl] = useState<string>('');
  const [apiResponse, setApiResponse] = useState<string>('');
  const [apiResponse2, setApiResponse2] = useState<string>('');
  const [apiResponse3, setApiResponse3] = useState<string>('');
  const [apiResponse4, setApiResponse4] = useState<string>('');
  const [apiResponse5, setApiResponse5] = useState<string>('');
  const [userAvailSchRes, setUserAvailSchRes] = useState<string>('');
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
      setAvatarUrl(testObj['avatar_url']);
    
    } catch (err) {
      setError((err as Error).message);
      setApiResponse('');
    } finally {
      setLoading(false);
    }
  };

  const handleApiRequest2 = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.calendly.com/scheduled_events?organization=${orgUri}`, {
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
      setApiResponse2(data);
      const jsonObject = JSON.parse(data);
      const testObj = jsonObject['collection'];
      setApiResponse2(testObj);
      console.log(testObj);
      console.log(typeof testObj);
    } catch (err) {
      setError((err as Error).message);
      setApiResponse2('');
    } finally {
      setLoading(false);
    }
  };

  const handleGetOrgUsersReq = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.calendly.com/organization_memberships?organization=${orgUri}`, {
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
      setApiResponse4(data);
      const jsonObject = JSON.parse(data);
      const testObj = jsonObject['collection'];
      setApiResponse4(testObj);
    } catch (err) {
      setError((err as Error).message);
      setApiResponse4('');
    } finally {
      setLoading(false);
    }
  };


  const handleUserSchEventsApiReq = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.calendly.com/scheduled_events?user=${userUri}`, {
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
      setApiResponse3(data);
      const jsonObject = JSON.parse(data);
      const testObj = jsonObject['collection'];
      setApiResponse3(testObj);
    } catch (err) {
      setError((err as Error).message);
      setApiResponse3('');
    } finally {
      setLoading(false);
    }
  };

  const handlGetEventTypesReq = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.calendly.com/event_types?organization=${orgUri}`, {
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
      setApiResponse5(data);
      const jsonObject = JSON.parse(data);
      const testObj = jsonObject['collection'];
      setApiResponse5(testObj);
    } catch (err) {
      setError((err as Error).message);
      setApiResponse5('');
    } finally {
      setLoading(false);
    }
  };

  const handleAvailSchedules = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.calendly.com/user_availability_schedules?user=${userUri}`, {
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
      setUserAvailSchRes(data);
      const jsonObject = JSON.parse(data);
      const testObj = jsonObject['collection'];
      setUserAvailSchRes(testObj);
    } catch (err) {
      setError((err as Error).message);
      setUserAvailSchRes('');
    } finally {
      setLoading(false);
    }
  };



const MyComponentTwo: React.FC = () => {
  const callMultipleFunctions = () => {
    handleApiRequest2();
    handleGetOrgUsersReq();
    handleUserSchEventsApiReq();
    handlGetEventTypesReq();
    handleAvailSchedules();
  };

  

  return (
    <Button variant='contained' style={{backgroundColor: '#0066ff', marginTop: '25px'}} onClick={callMultipleFunctions}>
      Submit Requests
    </Button>
  );
};



  return (
    <div>
      
        <TextField 
          style={{ minWidth: '22em'}}
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

      <FetchReq requestUrl={getOrgMemberships} bearerToken={bearerToken} buttonLabel='Get Organization Users' />
      <FetchReq requestUrl={getUserAvailSch} bearerToken={bearerToken} buttonLabel="List User's Availability Schedule" />
      <FetchReq requestUrl={getUserSchEvents} bearerToken={bearerToken} buttonLabel="Get User's Scheduled Events" />
      <FetchReq requestUrl={getOrgSchEvents} bearerToken={bearerToken} buttonLabel="Get Organization's Scheduled Events" />
      <FetchReq requestUrl={getUserEventTypes} bearerToken={bearerToken} buttonLabel="Get User's Event Types" />
      <FetchReq requestUrl={getOrgEventTypes} bearerToken={bearerToken} buttonLabel="Get Organization's Event Types" />
      <FetchReq requestUrl={geteActivityLogs} bearerToken={bearerToken} buttonLabel="Get Activity Logs" />
      
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      
    
    

    </div>
  );
};

export default ApiRequestComponent;