import { Box, useTheme } from '@mui/material'
import React, { ReactNode } from 'react'

import ScoreScoreBackground from '../assets/score_score_bg_tile.png'

interface AnimatedBackgroundProps {
  children: ReactNode
}

function AnimatedBackground({ children }: AnimatedBackgroundProps) {
  const theme = useTheme()

  return (
    <Box
      sx={{
        width: '100%',
        flexGrow: '1',
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      <Box
        className="animated"
        sx={{
          position: 'fixed',
          height: '100%',
          width: '100%',
          backgroundImage: `url(${ScoreScoreBackground})`,
          backgroundSize: '800px',
          backgroundRepeat: 'repeat',
          opacity: 0.2,
        }}
      />
      <Box
        sx={{
          position: 'relative',
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default AnimatedBackground
