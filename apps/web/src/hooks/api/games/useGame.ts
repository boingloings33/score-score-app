import { getGame } from '@/api/GameService'
import { useQuery } from 'react-query'

function useGame(gameId: number) {
  return useQuery({
    queryKey: ['games', gameId],
    queryFn: () => getGame(gameId),
  })
}

export default useGame
