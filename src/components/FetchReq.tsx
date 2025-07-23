import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ReqResp from './ReqResp';
import { Box } from '@mui/material';

type ApiReqPropsType = {
  requestUrl: string;
  orgUri?: string;
  userUri?: string;
  bearerToken: string;
  buttonLabel: string;
  handleApiRequest?: () => void;
};

const FetchReq: React.FC<ApiReqPropsType> = (props) => {
  const [apiRes, setApiRes] = useState<Record<string, any> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // ✅ controls modal visibility

  const handleApiReq = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(props.requestUrl, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${props.bearerToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const textData = await response.text();
      const jsonData = JSON.parse(textData);
      const collectionData = jsonData?.collection ?? {};
      setApiRes(collectionData);             // ✅ store data
      setIsModalOpen(true);                  // ✅ open modal
      console.log('API response collection:', collectionData);
    } catch (err) {
      setError((err as Error).message);
      setApiRes(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{maxWidth: '100%' }}>
      <Button
        variant="contained"
        style={{ backgroundColor: 'primary', marginTop: 25 }}
        onClick={handleApiReq}
      >
        {loading ? 'Loading...' : props.buttonLabel}
      </Button>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {/* ✅ Show modal if data is fetched */}
      {apiRes && (
        <ReqResp
          data={apiRes}
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </Box>
  );
};

export default FetchReq;
