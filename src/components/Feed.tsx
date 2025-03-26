import { Box } from '@mui/material';
import React from 'react'
import ApiRequestComponent from './ApiReqComp';

const Feed = () => {
  return (
    <Box bgcolor={'yellow'} flex={4} p={2}>
        <ApiRequestComponent />
    </Box>
  )
}

export default Feed;