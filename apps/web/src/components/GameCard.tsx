import { Paper, Typography, Stack, Box } from '@mui/material'
import { ReactNode } from 'react'

type GameCardProps = {
  title: string
  pointsToWin: string | number
  children: ReactNode
}

export default function GameCard({
  title,
  pointsToWin,
  children,
}: GameCardProps) {
  return (
    <Paper
      elevation={4}
      sx={{
        p: 2,
        height: '100%',
        borderRadius: 2,
        backgroundColor: 'secondary.main',
        color: 'primary.light',
        '&:hover': {
          backgroundColor: 'info.main',
          cursor: 'pointer',
        },
      }}
    >
      <Stack
        spacing={3}
        alignItems="center"
        justifyContent="space-between"
        sx={{ height: '100%' }}
      >
        <Typography variant="h4" color="primary.contrastText">
          {title}
        </Typography>
        {children}
        <Box textAlign="center">
          <Typography variant="caption" color="divider">
            {'Points to win:'}
          </Typography>
          <Typography variant="body1" color="primary.contrastText">
            {pointsToWin}
          </Typography>
        </Box>
      </Stack>
    </Paper>
  )
}
