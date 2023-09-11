import { Box, Container, Typography, Stack, Button } from '@mui/material'
import PointsScorecard from '@/components/PointsScorecard'
import useDialog from '@/hooks/useDialog'
import useGetMe from '@/hooks/api/users/useGetMe'
import { PlayableGame } from 'shared/types/models'
import NoPointsNeededScorecard from '@/components/NoPointsNeededScorecard'
import useUpdatePlayerScore from '@/hooks/api/players/useUpdatePlayerScore'
import { useEffect } from 'react'

interface ActiveGameViewProps {
  gameId: number
  gamePlayed: string
  pointsToWin: PlayableGame['pointsToWin']

  player1Id: number
  player1Name: string
  player1Score: number
  player1ProfilePic: string | null
  player1UserId: number

  player2Id: number
  player2Name: string
  player2Score: number
  player2ProfilePic: string | null
  player2UserId: number
}

function ActiveGameView({
  gameId,
  gamePlayed,
  pointsToWin,

  player1Id,
  player1Name,
  player1Score,
  player1ProfilePic,
  player1UserId,

  player2Id,
  player2Name,
  player2Score,
  player2ProfilePic,
  player2UserId,
}: ActiveGameViewProps) {
  const { openEndGameDialog } = useDialog()
  const { data: me } = useGetMe()

  const userIsAPlayer =
    (me && (me.id === player1UserId || me.id === player2UserId)) ||
    (player1UserId === 1 && player2UserId === 1)

  const { mutateAsync: updateScore } = useUpdatePlayerScore()

  function handleEndGameClicked() {
    openEndGameDialog(Number(gameId))
  }

  function handlePlayer1Select() {
    if (player1Score > player2Score) {
      return
    } else {
      updateScore({
        playerId: player1Id,
        scoreScalar: 1,
      })
      if (player2Score) {
        updateScore({
          playerId: player2Id,
          scoreScalar: -player2Score, // set score back to 0
        })
      }
    }
  }

  function handlePlayer2Select() {
    if (player2Score > player1Score) {
      return
    } else {
      updateScore({
        playerId: player2Id,
        scoreScalar: 1,
      })
      if (player1Score) {
        updateScore({
          playerId: player1Id,
          scoreScalar: -player1Score, // set score back to 0
        })
      }
    }
  }

  useEffect(() => {
    if (player1Score === pointsToWin && player2Score < pointsToWin) {
      openEndGameDialog(gameId)
    }
  }, [player1Score])

  useEffect(() => {
    if (player2Score === pointsToWin && player1Score < pointsToWin) {
      openEndGameDialog(gameId)
    }
  }, [player2Score])

  return (
    <Container sx={{ mb: 4 }} maxWidth="xs">
      <Typography variant="h3" textAlign="center" color="primary.contrastText">
        Begin your game of
      </Typography>
      <Typography variant="h3" textAlign="center" color="primary.light" mb={4}>
        {gamePlayed}!
      </Typography>

      {pointsToWin && (
        <>
          <Box textAlign="center" mb={5}>
            <Typography variant="h5" color="primary.contrastText">
              First player to{' '}
              <Typography variant="h5" component="span" color="primary.light">
                {pointsToWin}
              </Typography>{' '}
              points WINS!
            </Typography>
          </Box>

          <Stack spacing={4} sx={{ mb: 5 }}>
            <PointsScorecard
              playerId={player1Id}
              score={player1Score}
              playerName={player1Name}
              avatar={player1ProfilePic}
              displayControls={userIsAPlayer}
            />
            <PointsScorecard
              playerId={player2Id}
              score={player2Score}
              playerName={player2Name}
              avatar={player2ProfilePic}
              displayControls={userIsAPlayer}
            />
          </Stack>
        </>
      )}

      {!pointsToWin && (
        <>
          <Typography
            variant="h5"
            textAlign="center"
            color="primary.contrastText"
          >
            When your game is over,
          </Typography>
          <Typography
            variant="h5"
            textAlign="center"
            color="primary.contrastText"
            mb={9}
          >
            select the player who won!
          </Typography>

          <Stack spacing={4} sx={{ mb: 9 }}>
            <NoPointsNeededScorecard
              playerId={player1Id}
              playerName={player1Name}
              onPlayerSelect={handlePlayer1Select}
              score={player1Score}
              opponentScore={player2Score}
            />
            <NoPointsNeededScorecard
              playerId={player1Id}
              playerName={player2Name}
              onPlayerSelect={handlePlayer2Select}
              score={player2Score}
              opponentScore={player1Score}
            />
          </Stack>
        </>
      )}

      {userIsAPlayer && (
        <Button variant="contained" onClick={handleEndGameClicked} fullWidth>
          End Game
        </Button>
      )}
    </Container>
  )
}

export default ActiveGameView
