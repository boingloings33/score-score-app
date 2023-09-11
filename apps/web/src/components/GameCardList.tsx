import { PlusIcon } from '@/assets/icons'
import GameCard from '@/components/GameCard'
import { Grid, Container, Skeleton } from '@mui/material'
import { Link } from 'react-router-dom'
import useListPlayableGames from '@/hooks/api/playableGames/useListPlayableGames'
import PlayableGameIcon from '@/components/PlayableGameIcon'

export default function GameCardList() {
  const { data: playableGames, isLoading } = useListPlayableGames()

  return (
    <Container
      maxWidth="xs"
      sx={{
        pt: 2,
      }}
    >
      <Grid container spacing={2}>
        {isLoading &&
          Array(4)
            .fill('')
            .map((_, i) => (
              <Grid key={i} item xs={6}>
                <Skeleton
                  variant="rectangular"
                  sx={{ width: '188px', height: '362px' }}
                />
              </Grid>
            ))}

        {!isLoading &&
          playableGames &&
          playableGames.map((game) => (
            <Grid key={game.id} item xs={6}>
              <Link
                to="start"
                state={{ selectedGameId: game.id }}
                style={{ textDecoration: 'none' }}
              >
                <GameCard
                  title={game.name}
                  pointsToWin={
                    game.pointsToWin === null ? 'W/L' : game.pointsToWin
                  }
                >
                  <PlayableGameIcon icon={game.icon} size="large" />
                </GameCard>
              </Link>
            </Grid>
          ))}

        {/* add back when new games can be created */}
        {/* <Grid item xs={6}>
          <GameCard title="Create new game" pointsToWin="Custom">
            <PlusIcon size="large" />
          </GameCard>
        </Grid> */}
      </Grid>
    </Container>
  )
}
