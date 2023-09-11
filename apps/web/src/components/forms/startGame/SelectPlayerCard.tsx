import { Stack, Typography, Card } from '@mui/material'
import { useFormContext } from 'react-hook-form'
import { StartGameFormFields } from '@/components/forms/startGame/StartGameForm'
import SelectPlayerButton from '@/components/forms/startGame/SelectPlayerButton'

export default function SelectPlayerCard() {
  const { watch, setValue } = useFormContext<StartGameFormFields>()

  const [player1, player2] = watch(['player1', 'player2'])

  function handlePlayer1Select({
    userId,
    guestName,
  }: {
    userId: number
    guestName?: string
  }) {
    setValue('player1', { id: userId, guestName })
  }

  function handlePlayer1GuestSelected(guestName: string) {
    setValue('player1', { id: 1, guestName })
  }

  function handlePlayer2Select({
    userId,
    guestName,
  }: {
    userId: number
    guestName?: string
  }) {
    setValue('player2', { id: userId, guestName })
  }

  function handlePlayer2GuestSelected(guestName: string) {
    setValue('player2', { id: 1, guestName })
  }

  return (
    <Card
      sx={{
        backgroundColor: 'primary.contrastText',
        py: 6,
        px: 4,
      }}
    >
      <Stack spacing={4}>
        <Stack spacing={2}>
          <Typography textAlign="center" variant="h4">
            Who's playing this game?
          </Typography>
          <Typography textAlign="center" variant="body2">
            Tap on either player to switch them
          </Typography>
        </Stack>
        <Stack spacing={2}>
          <SelectPlayerButton
            userId={player1.id}
            guestName={player1.guestName}
            onPlayerSelected={handlePlayer1Select}
            onGuestNameSelected={handlePlayer1GuestSelected}
          />

          <Typography textAlign="center" variant="button">
            vs.
          </Typography>

          <SelectPlayerButton
            userId={player2.id}
            guestName={player2.guestName}
            onPlayerSelected={handlePlayer2Select}
            onGuestNameSelected={handlePlayer2GuestSelected}
          />
        </Stack>
      </Stack>
    </Card>
  )
}
