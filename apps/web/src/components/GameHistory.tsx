import { Stack, Typography, useTheme } from '@mui/material'
import CompletedGameScoreCard from '@/components/CompletedGameScoreCard'
import useListGames from '@/hooks/api/games/useListGames'
import { Game } from 'shared/types/models'
import InfiniteScroll from '@/components/InfiniteScroll'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import PlayableGameIcon from '@/components/PlayableGameIcon'

interface GameHistoryProps {
  userId?: number
  playableGameId?: number
}

function GameHistory({ userId, playableGameId }: GameHistoryProps) {
  const theme = useTheme()
  const {
    data: listGamesResponse,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useListGames({ userId, playableGameId })

  if (!listGamesResponse?.pages[0].data?.length) {
    return <></>
  }

  return (
    <Stack spacing={7} sx={{ py: 4 }}>
      <Stack spacing={4} sx={{ textAlign: 'center' }}>
        <Typography
          variant="h3"
          sx={{ color: theme.palette.primary.contrastText }}
        >
          Global Game History
        </Typography>
      </Stack>

      <InfiniteScroll
        isLoading={isLoading}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
        isFetchingNextPage={isFetchingNextPage}
      >
        <Stack spacing={4} sx={{ alignItems: 'center' }}>
          {listGamesResponse.pages.map((page) => {
            return (
              page.data !== undefined &&
              page.data.map((game: Game) => {
                if (!game.gamePlayed || !game.players) {
                  return
                }
                return (
                  <CompletedGameScoreCard
                    gameIcon={
                      <PlayableGameIcon
                        icon={game.gamePlayed.icon}
                        size="small"
                      />
                    }
                    gameName={game.gamePlayed.name}
                    gameDate={game.completed ? game.completed : new Date()}
                    pointsToWin={game.gamePlayed.pointsToWin}
                    players={game.players}
                    key={game.id}
                  />
                )
              })
            )
          })}
        </Stack>
      </InfiniteScroll>

      <ScrollToTopButton />
    </Stack>
  )
}

export default GameHistory
