import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Loading() {
  return (
    <Stack spacing={1} style={{margin: "auto"}}>
     
     <Skeleton variant="text" />
      <Skeleton variant="rectangular" width={210} height={118} />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      
    </Stack>
  );
}