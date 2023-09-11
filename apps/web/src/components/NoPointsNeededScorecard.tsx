import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Stack, Avatar, Divider, Typography, useTheme } from '@mui/material'

import { CrownIcon } from '@/assets/icons/CrownIcon'

interface NoPointsNeededScorecardProps {
  playerId: number
  playerName: string
  onPlayerSelect: () => void
  score: number
  opponentScore: number
}

const NoPointsNeededScorecard = ({
  playerName,
  onPlayerSelect,
  score,
  opponentScore,
}: NoPointsNeededScorecardProps) => {
  const theme = useTheme()

  const handleCardClicked = () => {
    onPlayerSelect()
  }

  const isWinning = score > opponentScore
  const isLosing = score < opponentScore
  const isTied = score == opponentScore

  return (
    <Card
      onClick={handleCardClicked}
      sx={{
        border: 'none',
        borderRadius: '8px',
        p: 4,
        bgcolor: isWinning ? 'background.paper' : 'secondary.light',
        cursor: 'pointer',
      }}
    >
      <CardContent
        sx={{
          p: 0 + ' !important',
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="center">
          <Avatar variant="square" sx={{ borderRadius: '8px', mr: 2 }} />
          <Typography
            variant="h3"
            sx={{
              color: isWinning ? 'secondary.light' : 'primary.contrastText',
            }}
          >
            {playerName}
          </Typography>
        </Stack>

        <Divider
          variant="fullWidth"
          sx={{
            borderBottomWidth: '1.5px',
            borderColor: isWinning ? theme.palette.secondary.light : 'divider',
            mt: 3,
            mb: 4,
          }}
        />

        <Stack direction="row" alignItems="center" justifyContent="center">
          {!isLosing && <CrownIcon size="small" />}
          {isWinning && (
            <Typography variant="h4" color="secondary.main" sx={{ ml: 1 }}>
              WINNER!
            </Typography>
          )}
          {!isWinning && isLosing && (
            <Typography variant="h4" color="primary.contrastText">
              Runner-Up
            </Typography>
          )}
          {!isWinning && isTied && (
            <Typography variant="h4" color="primary.contrastText">
              ---
            </Typography>
          )}
        </Stack>
      </CardContent>
    </Card>
  )
}
export default NoPointsNeededScorecard
