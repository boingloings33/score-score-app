import {
  Box,
  Typography,
  Container,
  Stack,
  Avatar,
  Paper,
  Divider,
  Button,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { CrownIcon } from '@/assets/icons'
import useStartNewGame from '@/hooks/api/games/useStartNewGame'
import { LoadingButton } from '@mui/lab'
import useGetMe from '@/hooks/api/users/useGetMe'

interface GameResultsViewProps {
  player1Name: string
  player1Score: number
  player1UserId: number

  player2Name: string
  player2Score: number
  player2UserId: number

  gamePlayedId: number
}

function GameResultsView({
  player1Name,
  player1Score,
  player1UserId,

  player2Name,
  player2Score,
  player2UserId,
  gamePlayedId,
}: GameResultsViewProps) {
  const { mutateAsync: startNewGame, isLoading: isStartNewGameLoading } =
    useStartNewGame()

  const { data: me } = useGetMe()

  const userIsAPlayer =
    (me && (me.id === player1UserId || me.id === player2UserId)) ||
    (player1UserId === 1 && player2UserId === 1) ||
    false
  const draw = player1Score === player2Score

  function handleStartNewGame() {
    startNewGame({
      gamePlayedId,
      player1: {
        id: player1UserId,
        guestName: player1UserId === 1 ? player1Name : undefined,
      },
      player2: {
        id: player2UserId,
        guestName: player2UserId === 1 ? player2Name : undefined,
      },
    })
  }
  return (
    <Container sx={{ mb: 4 }}>
      <Stack alignItems="center" justifyContent="center">
        {draw && (
          <>
            <Typography
              variant="h1"
              color="primary.contrastText"
              sx={{ mb: 2 }}
            >
              DRAW
            </Typography>
          </>
        )}
        {!draw && (
          <>
            <Typography
              variant="h1"
              color="primary.contrastText"
              sx={{ mb: 2 }}
            >
              WINNER!
            </Typography>

            <Box sx={{ animation: `bounceAnimation 2.5s infinite` }}>
              <CrownIcon size="extraMedium" />
            </Box>

            <Avatar
              variant="square"
              sx={{
                borderRadius: '4px',
                width: '128px',
                height: '128px',
                border: 1,
                borderColor: 'divider',
                my: 1,
              }}
            />

            <Typography
              variant="h3"
              color="primary.contrastText"
              sx={{ mb: 2 }}
            >
              {player1Score > player2Score ? player1Name : player2Name}
            </Typography>
          </>
        )}

        <Stack spacing={3}>
          <Paper
            elevation={4}
            sx={{
              bgcolor: 'primary.contrastText',
              px: 6,
              py: 4,
              borderRadius: '8px',
            }}
          >
            <Stack spacing={6} direction="row" alignItems="center">
              <Stack
                alignItems="center"
                sx={{
                  width: '72px',
                }}
              >
                <Avatar
                  variant="square"
                  sx={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '4px',
                    border: 1,
                    borderColor: 'secondary.light',
                  }}
                />
                <Typography variant="button">{player1Name}</Typography>
                <Typography variant="body2">93-70</Typography>
                <Typography
                  variant="h1"
                  color={
                    player1Score === player2Score
                      ? 'info.main'
                      : player1Score > player2Score
                      ? 'primary.main'
                      : 'info.main'
                  }
                  sx={{ mt: 2 }}
                >
                  {player1Score > player2Score ? 'W' : 'L'}
                </Typography>
              </Stack>

              <Divider orientation="vertical" sx={{ height: '190px' }} />

              <Stack
                alignItems="center"
                sx={{
                  width: '72px',
                }}
              >
                <Avatar
                  variant="square"
                  sx={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '4px',
                    border: 1,
                    borderColor: 'secondary.light',
                  }}
                />
                <Typography variant="button">{player2Name}</Typography>
                <Typography variant="body2">1-0</Typography>
                <Typography
                  variant="h1"
                  color={
                    player1Score === player2Score
                      ? 'info.main'
                      : player2Score > player1Score
                      ? 'primary.main'
                      : 'info.main'
                  }
                  sx={{ mt: 2 }}
                >
                  {player2Score > player1Score ? 'W' : 'L'}
                </Typography>
              </Stack>
            </Stack>
          </Paper>

          {userIsAPlayer && (
            <LoadingButton
              variant="contained"
              fullWidth
              onClick={handleStartNewGame}
              loading={isStartNewGameLoading}
            >
              Play Again
            </LoadingButton>
          )}

          <Link
            to="/start"
            state={{ selectedGameId: gamePlayedId }}
            style={{ textDecoration: 'none' }}
          >
            {userIsAPlayer && (
              <Button variant="outlined" fullWidth color="primary">
                Back to Game Set-Up
              </Button>
            )}
          </Link>
        </Stack>
      </Stack>
    </Container>
  )
}
export default GameResultsView
