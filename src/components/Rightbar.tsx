import { Box } from '@mui/material'
import ApiRequestComponent from './ApiReqComp';

const Rightbar = () => {
  return (
    <Box
      sx={{
        maxWidth: '1000px', // adjust as needed
        overflowX: 'auto',
        p: 2,
        flex: 2,
      }}
    >
      <ApiRequestComponent  />
    </Box>
  );
}


export default Rightbar;


