import { Box } from '@mui/material';
import React from 'react'
import ApiRequestComponent from './ApiReqComp';

// const Feed = () => {
//   return (
//     <Box bgcolor={'yellow'} flex={4} p={2}>
//         <ApiRequestComponent />
//     </Box>
//   )
// }



const Feed = () => {
  return (
    <Box
      sx={{
        maxWidth: '1000px', // adjust as needed
        overflowX: 'auto',
        bgcolor: 'yellow',
        p: 2,
        flex: 4,
      }}
    >
      <ApiRequestComponent />
    </Box>
  );
};

export default Feed;