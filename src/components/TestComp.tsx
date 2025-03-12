import React, { useState } from 'react';

const ApiRequestComponent: React.FC = () => {
  const [bearerToken, setBearerToken] = useState<string>('');
  const [orgUri, setOrgUri] = useState<string>('');
  const [userUri, setUserUri] = useState<string>('');
  const [apiResponse, setApiResponse] = useState<string>('');
  const [apiResponse2, setApiResponse2] = useState<string>('');
  const [apiResponse3, setApiResponse3] = useState<string>('');
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
      // console.log(apiResponse);
      // console.log(orgUri);
      // console.log(userUri);
    } catch (err) {
      setError((err as Error).message);
      setApiResponse2('');
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
      // console.log(apiResponse);
      // console.log(orgUri);
      // console.log(userUri);
    } catch (err) {
      setError((err as Error).message);
      setApiResponse3('');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div>
      {/* button for get current user */}
        <label htmlFor="bearerToken">Bearer Token:</label>
        <input
          type="text"
          id="bearerToken"
          value={bearerToken}
          onChange={handleTokenChange}
        />
      
      <button onClick={handleApiRequest} disabled={loading}>
        {loading ? 'Loading...' : 'Get Current User'}
      </button>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      <div>
      {Object.entries(apiResponse).map(([key, value]) => (
        <div key={key}>
          {key}: {JSON.stringify(value)}
        </div>
      ))}
    </div>
      

      {/* button for get scheduled events for org */}
      <label htmlFor="bearerToken">Bearer Token:</label>
        <input
          type="text"
          id="bearerToken"
          value={bearerToken}
          onChange={handleTokenChange}
        />
      
      <button onClick={handleApiRequest2} disabled={loading}>
        {loading ? 'Loading...' : 'Get Scheduled Events'}
      </button>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <div>
      {Object.entries(apiResponse2).map(([key, value]) => (
        <div key={key}>
          {key}: {JSON.stringify(value)}
        </div>
      ))}
    </div>
    <button onClick={handleUserSchEventsApiReq} disabled={loading}>
        {loading ? 'Loading...' : 'Get User Scheduled Events'}
      </button>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <div>
      {Object.entries(apiResponse3).map(([key, value]) => (
        <div key={key}>
          {key}: {JSON.stringify(value)}
        </div>
      ))}
    </div>

    </div>
  );
};

export default ApiRequestComponent;