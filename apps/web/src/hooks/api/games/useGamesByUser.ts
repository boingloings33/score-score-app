import { getGamesByUser } from '@/api/GameService'
import { useQuery } from 'react-query'

function useGamesByUser(userId: number) {
  return useQuery({
    queryKey: ['games', 'user', userId],
    queryFn: () => getGamesByUser(userId),
  })
}

export default useGamesByUser
