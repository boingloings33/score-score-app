import { PlusIcon } from '@/assets/icons'
import { Avatar, Stack, Typography, useTheme } from '@mui/material'
import { PlayableGame } from 'shared/types/models'

interface UserScore {
  username: string
  profilePic: string | null
  score: number
  opponentScore: number
  pointsToWin: PlayableGame['pointsToWin']
  date: Date | null | undefined
}

function UserScore({
  username,
  profilePic,
  score,
  opponentScore,
  pointsToWin,
  date,
}: UserScore) {
  const winner = score > opponentScore
  const theme = useTheme()

  return (
    <Stack
      direction="row"
      sx={{ justifyContent: 'space-between', alignItems: 'center' }}
    >
      <Stack spacing={1} direction="row" sx={{ alignItems: 'center' }}>
        <Avatar sx={{ height: 40 }}>
          {profilePic ? profilePic : <PlusIcon size="small" />}
        </Avatar>
        <Typography
          variant="h5"
          color={
            date == null || date == undefined
              ? theme.palette.primary.contrastText
              : theme.palette.text.secondary
          }
        >
          {username}
        </Typography>
      </Stack>
      <Typography
        variant="h5"
        color={
          date == null || date == undefined
            ? theme.palette.primary.contrastText
            : winner
            ? theme.palette.primary.main
            : theme.palette.text.secondary
        }
      >
        {pointsToWin
          ? score
          : date == null || date == undefined
          ? ''
          : winner
          ? 'W'
          : 'L'}
      </Typography>
    </Stack>
  )
}

export default UserScore
