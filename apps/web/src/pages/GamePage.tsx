import useDialog from '@/hooks/useDialog'
import { Box, IconButton, CircularProgress } from '@mui/material'
import { Navigate, useParams } from 'react-router-dom'
import XIcon from '@mui/icons-material/CloseOutlined'
import ActiveGameView from '@/components/ActiveGameView'
import useGame from '@/hooks/api/games/useGame'
import GameResultsView from '@/components/GameResultsView'

function GamePage() {
  const { gameId } = useParams()

  const { data: game, isLoading } = useGame(Number(gameId))
  const { openExitGameDialog } = useDialog()

  function handleExitGameClicked() {
    openExitGameDialog()
  }

  return (
    <Box sx={{ mt: 2 }}>
      <IconButton sx={{ ml: 4 }} onClick={handleExitGameClicked}>
        <XIcon sx={{ color: 'primary.contrastText' }} fontSize="large" />
      </IconButton>

      {isLoading && <CircularProgress />}

      {game && !game?.completed && game.players && game.gamePlayed && (
        <ActiveGameView
          gameId={game.id}
          gamePlayed={game.gamePlayed.name}
          pointsToWin={game.gamePlayed.pointsToWin}
          player1Id={game.players[0].id}
          player1Name={
            game.players[0].guestName || game.players[0].user.username
          }
          player1Score={game.players[0].score}
          player1ProfilePic={game.players[0].user.profilePic}
          player1UserId={game.players[0].user.id}
          player2Id={game.players[1].id}
          player2Name={
            game.players[1].guestName || game.players[1].user.username
          }
          player2Score={game.players[1].score}
          player2ProfilePic={game.players[1].user.profilePic}
          player2UserId={game.players[1].user.id}
        />
      )}

      {game && game?.completed && game.gamePlayed && (
        <GameResultsView
          player1Name={
            game.players[0].guestName || game.players[0].user.username
          }
          player1Score={game.players[0].score}
          player1UserId={game.players[0].userId}
          player2Name={
            game.players[1].guestName || game.players[1].user.username
          }
          player2Score={game.players[1].score}
          player2UserId={game.players[1].userId}
          gamePlayedId={game.gamePlayed.id}
        />
      )}

      {!isLoading && !game && <Navigate to="/start" />}
    </Box>
  )
}

export default GamePage
