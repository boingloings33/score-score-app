import UserScore from '@/components/UserScore'
import theme from '@/theme'
import { Divider, Stack, Typography } from '@mui/material'
import { PlayableGame } from 'shared/types/models'
import { Player } from 'shared/types/models/player'

interface PlayerScoresProps {
  pointsToWin: PlayableGame['pointsToWin']
  players: Player[]
  date: Date | null | undefined
}

function PlayerScores({ pointsToWin, players, date }: PlayerScoresProps) {
  return (
    <Stack>
      {players[0].user !== undefined && (
        <UserScore
          username={
            players[0].guestName
              ? players[0].guestName
              : players[0].user?.username
          }
          profilePic={players[0].user?.profilePic}
          score={players[0].score}
          opponentScore={players[1].score}
          pointsToWin={pointsToWin}
          date={date}
        />
      )}

      <Divider sx={{ width: '100%', color: theme.palette.secondary.light }}>
        <Typography
          variant="body1"
          sx={{ color: theme.palette.secondary.light }}
        >
          vs.
        </Typography>
      </Divider>

      {players[1].user !== undefined && (
        <UserScore
          username={
            players[1].guestName
              ? players[1].guestName
              : players[1].user?.username
          }
          profilePic={players[1].user?.profilePic}
          score={players[1].score}
          opponentScore={players[0].score}
          pointsToWin={pointsToWin}
          date={date}
        />
      )}
    </Stack>
  )
}

export default PlayerScores
