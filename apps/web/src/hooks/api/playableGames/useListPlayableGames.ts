import { getPlayableGames } from '@/api/PlayableGameService'
import { useQuery } from 'react-query'

function useListPlayableGames() {
  return useQuery({
    queryKey: ['playableGames'],
    queryFn: () => getPlayableGames(),
  })
}

export default useListPlayableGames
