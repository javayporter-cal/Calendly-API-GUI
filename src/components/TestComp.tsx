import React, { useState } from 'react';

const ApiRequestComponent: React.FC = () => {
  const [bearerToken, setBearerToken] = useState<string>('');
  const [orgUri, setOrgUri] = useState<string>('');
  const [userUri, setUserUri] = useState<string>('');
  const [apiResponse, setApiResponse] = useState<string>('');
  const [apiResponse2, setApiResponse2] = useState<string>('');
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
      setApiResponse(data);
      //console.log('the data', data);

      const jsonObject = JSON.parse(data);
      const testObj = jsonObject['resource'];
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
      //console.log('the data', data);
      console.log(orgUri);
      console.log(userUri);
    } catch (err) {
      setError((err as Error).message);
      setApiResponse2('');
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
        {loading ? 'Loading...' : 'Submit API Request'}
      </button>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {apiResponse}

      {/* button for get scheduled events for org */}
      <label htmlFor="bearerToken">Bearer Token:</label>
        <input
          type="text"
          id="bearerToken"
          value={bearerToken}
          onChange={handleTokenChange}
        />
      
      <button onClick={handleApiRequest2} disabled={loading}>
        {loading ? 'Loading...' : 'Submit API Request'}
      </button>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {apiResponse2}
    </div>
  );
};

export default ApiRequestComponent;