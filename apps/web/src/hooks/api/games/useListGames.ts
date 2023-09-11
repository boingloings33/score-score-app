import { ListGamesParams, listGames } from '@/api/GameService'
import { useInfiniteQuery, useQuery } from 'react-query'

function useListGames(queryParams: ListGamesParams) {
  return useInfiniteQuery({
    queryKey: ['games', queryParams],
    queryFn: ({ pageParam }) =>
      listGames({ ...queryParams, gameId: pageParam as number | undefined }),

    getNextPageParam: ({ data: games, totalRemaining }) => {
      // what on "page 1" tells us how to get page 2?
      // look at last index
      // use that id

      if (!games || !games.length) {
        return undefined
      }
      if (totalRemaining) {
        // then look at last index
        const lastGame = games[games.length - 1]
        return lastGame.id
      } else {
        return undefined
      }
    },
  })
}

export default useListGames
