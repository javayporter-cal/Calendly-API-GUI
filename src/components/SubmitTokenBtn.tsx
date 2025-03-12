import React, { useState, useEffect } from 'react';

interface DataType {
  id: number;
  name: string;
  value: string;
  email: string;
}

const MyComponent: React.FC = () => {
  const [data, setData] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);



  const token = 'eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNzM5OTg1OTU1LCJqdGkiOiI0NWM0ZDRhOS0xYzkxLTQyNWQtYjM1NS04YTVjYjBhMmNjNzQiLCJ1c2VyX3V1aWQiOiI4NzY1OTUwMi1lNDBkLTRmOTYtYTJjMC1lYzE2NjI2ZDY5MTAifQ.Fo1EFZWJ3lPczMPM-vIAEYRtbCYMtuUls_wlCbmNGqB7jQQjleFij_pFMaBqEZ93WxWQbellBb7zbJhtdey-0A';


  useEffect(() => {
    const fetchData = async () => {
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

        const json = await response.json();
        setData(json);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
   

















fetchData();
    //<button onClick={fetchData}>Get Cal Data</button>
  }, []);

 

  console.log('data:', data)
  const resData = data.resource;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Data from API</h1>
      <ul>
        {resData.email}
        {/* {data.map(item => (
          <li key={item.slug}>
            {item.email}: {item.uri}
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default MyComponent;