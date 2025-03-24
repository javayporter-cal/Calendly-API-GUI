import React, { useState, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import ReqResp from './ReqResp';

type ApiReqPropsType = {
    requestUrl: string;
    orgUri?: string;
    userUri?: string;
    bearerToken: string;
    buttonLabel: string
    handleApiRequest?: () => void;
}

const FetchReq: React.FC<ApiReqPropsType> = (props) => {
    const [apiRes, setApiRes] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const [isVisible, setIsVisible] = useState(false);
    const divRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (divRef.current && !divRef.current.contains(event.target as Node)) {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            props.buttonLabel;
        };
    }, []);
    
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
      
            const data = await response.text();
            setApiRes(data);
            const jsonObject = JSON.parse(data);
            const testObj = jsonObject['collection'];
            setApiRes(testObj);
            console.log(testObj);
            console.log(typeof testObj);
          } catch (err) {
            setError((err as Error).message);
            setApiRes('');
          } finally {
            setLoading(false);
          }
    }

    
    const SubmitReq: React.FC = () => {
        const callFunc = () => {
          handleApiReq();
          setIsVisible(!isVisible)
        };

        return (
          <Button variant='contained' style={{backgroundColor: '#0066ff', marginTop: '25px'}} onClick={callFunc}>
            {loading ? 'Loading...' : props.buttonLabel}
          </Button>
        );
      };

  return (
    <div>
        <SubmitReq />
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {isVisible && (
        <ReqResp data={apiRes} />
        )}
    </div>
  )
}

export default FetchReq