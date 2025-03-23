import React, { useState } from 'react';
import MyComponent from './TestState';
import { TableBody, TableCell, TableContainer } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import '../index.css';

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
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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
    
      console.log(data)
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



const MyComponentTwo: React.FC = () => {
  const callMultipleFunctions = () => {
    handleApiRequest2();
    handleGetOrgUsersReq();
    handleUserSchEventsApiReq();
    handlGetEventTypesReq();
  };

  return (
    <Button variant='contained' onClick={callMultipleFunctions}>
      Call All Functions
    </Button>
  );
};




  return (
    <div>
      
      {/* button for get current user */}
      
        <TextField 
          id="outlined-basic" 
          label="Bearer Token"   
          variant="outlined" 
          type="text"
          value={bearerToken}
          onChange={handleTokenChange}  />
  
      
      <Button onClick={handleApiRequest} disabled={loading}>
        {loading ? 'Loading...' : 'Get Current User'}
      </Button>

      

      <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 650 }} aria-label="simple table">
         
            <TableCell>
            {Object.entries(apiResponse).map(([key, value]) => (
             
              <div>
                {key} : {JSON.stringify(value)}
                </div>
            ))}
            </TableCell>
            <img src={avatarUrl} alt="logo" />
          <TableBody>
            
          </TableBody>
        </Table>
      </TableContainer>

      <MyComponentTwo />
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

    <MyComponent data1={apiResponse4} data2={apiResponse2} data3={apiResponse3} data4={apiResponse5} buttonLabel1='Get Org Users' buttonLabel2='Get Org Events' buttonLabel3='Get Users Events' buttonLabel4='Get Org Event Types'/>
    

    </div>
  );
};

export default ApiRequestComponent;