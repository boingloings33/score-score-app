import PlayerScores from '@/components/PlayerScores'
import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import { ReactNode } from 'react'
import { PlayableGame, Player } from 'shared/types/models'

interface CompletedGameScoreCardProps {
  gameIcon: ReactNode
  gameName: string
  gameDate: Date
  pointsToWin: PlayableGame['pointsToWin']
  players: Player[]
}

function CompletedGameScoreCard({
  gameName,
  gameIcon,
  gameDate,
  pointsToWin,
  players,
}: CompletedGameScoreCardProps) {
  const theme = useTheme()
  const date = new Date(gameDate)

  return (
    <Card variant="outlined" sx={{ width: '100%' }}>
      <CardContent
        sx={{
          p: 0,
          pb: '0 !important',
          bgcolor: theme.palette.background.default,
        }}
      >
        <Stack direction="row" sx={{ p: 2, justifyContent: 'space-between' }}>
          <Stack spacing={1} direction="row">
            {gameIcon}
            <Typography variant="body1">{gameName}</Typography>
          </Stack>
          <Typography variant="body1">
            {date.getUTCMonth()}/{date.getUTCDate()}/{date.getUTCFullYear()}
          </Typography>
        </Stack>
        <Box sx={{ p: 2, backgroundColor: 'background.paper' }}>
          <PlayerScores
            pointsToWin={pointsToWin}
            players={players}
            date={date}
          />
        </Box>
      </CardContent>
    </Card>
  )
}

export default CompletedGameScoreCard
