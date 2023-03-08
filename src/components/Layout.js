import { Box } from '@mui/system'
import React from 'react'

export default function Layout({ children }) {
  return (
    <Box sx={{
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        bgcolor: 'background.paper'
    }}>
        {children}
    </Box> 
  )
}
