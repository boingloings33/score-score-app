import {
  Card,
  CardContent,
  Stack,
  Typography,
  useTheme,
  IconButton,
} from '@mui/material'
import { RecycleBinIcon } from '../assets/icons'
import PlayerScores from '@/components/PlayerScores'
import PlayableGameIcon from '@/components/PlayableGameIcon'
import { useNavigate } from 'react-router-dom'
import { MouseEvent as ReactMouseEvent } from 'react'
import { Game, Player } from 'shared/types/models'
import useDeleteGame from '@/hooks/api/games/useDeleteGame'

interface ContinueGameCardProps {
  currentGame: Game
}

const ContinueGameCard = ({ currentGame }: ContinueGameCardProps) => {
  const { mutateAsync: deleteGame, isLoading: isDeleteGameLoading } =
    useDeleteGame()

  const theme = useTheme()

  const navigate = useNavigate()

  const handleContinueGame = () => {
    navigate(`/game/${currentGame?.id}`)
  }

  function handleTrashCanClicked(
    e: ReactMouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.stopPropagation()

    if (!currentGame) {
      return
    }

    deleteGame(currentGame.id)
  }

  return (
    <Card
      elevation={4}
      onClick={handleContinueGame}
      sx={{
        bgcolor: theme.palette.secondary.main,
        p: 3,
        pt: 4,
        borderRadius: 2,
        cursor: 'pointer',
        '&:hover': {
          bgcolor: theme.palette.secondary.dark,
        },
      }}
    >
      {!isDeleteGameLoading && (
        <CardContent sx={{ p: 0, pb: '0 !important' }}>
          <Stack spacing={5}>
            <Stack
              direction="row"
              sx={{
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Stack
                direction="row"
                spacing={1}
                sx={{ alignItems: 'center', textAlign: 'initial' }}
              >
                {currentGame.gamePlayed && (
                  <PlayableGameIcon
                    icon={currentGame.gamePlayed?.icon}
                    size="small"
                  />
                )}

                <Typography
                  variant="h4"
                  sx={{ color: theme.palette.primary.contrastText }}
                >
                  Continue Game?
                </Typography>
              </Stack>

              <IconButton onClick={handleTrashCanClicked}>
                <RecycleBinIcon />
              </IconButton>
            </Stack>
            {currentGame.gamePlayed?.pointsToWin !== undefined && (
              <PlayerScores
                players={currentGame.players as Player[]}
                pointsToWin={currentGame.gamePlayed?.pointsToWin}
                date={currentGame.completed}
              />
            )}
          </Stack>
        </CardContent>
      )}
    </Card>
  )
}

export default ContinueGameCard
