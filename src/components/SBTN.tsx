import React, { useState } from 'react';

interface DataType {
  // Define the structure of your API response data here
  uri: string;
  name: string;
  email: string;
}

const DataComponent: React.FC = () => {
  const [data, setData] = useState<DataType[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const token = 'eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNzM5OTg1OTU1LCJqdGkiOiI0NWM0ZDRhOS0xYzkxLTQyNWQtYjM1NS04YTVjYjBhMmNjNzQiLCJ1c2VyX3V1aWQiOiI4NzY1OTUwMi1lNDBkLTRmOTYtYTJjMC1lYzE2NjI2ZDY5MTAifQ.Fo1EFZWJ3lPczMPM-vIAEYRtbCYMtuUls_wlCbmNGqB7jQQjleFij_pFMaBqEZ93WxWQbellBb7zbJhtdey-0A';

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
        const response = await fetch('https://api.calendly.com/users/me', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token} `
            }
          });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json: DataType[] = await response.json();
      setData(json);
    } catch (e: any) {
      setError(e.message);
      //setData(null);
      console.log(data)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={fetchData} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>
      
      {error && <p>Error: {error}</p>}

      {data && (
        <ul>
          {/* {data.map(item => (
            <li key={item.uri}>
              {item.name}: {item.email}
            </li>
          ))} */}
        </ul>
      )}
    </div>
  );
};

export default DataComponent;