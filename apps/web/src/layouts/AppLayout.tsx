import { Box, Stack, useTheme } from '@mui/material'
import { Outlet } from 'react-router-dom'

import AnimatedBackground from '@/components/AnimatedBackground'
import AppBar from '@/components/AppBar'

const AppLayout = () => {
  return (
    <Stack sx={{ minHeight: '100vh' }}>
      <AppBar />
      <AnimatedBackground>
        <Box pt={7}>
          <Outlet />
        </Box>
      </AnimatedBackground>
    </Stack>
  )
}

export default AppLayout
