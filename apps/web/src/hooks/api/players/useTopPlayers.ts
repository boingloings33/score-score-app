import { getTopPlayers } from '@/api/PlayerService'
import { useQuery } from 'react-query'
import { GetTopPlayersRequestQuery } from 'shared/types/api'

function useTopPlayers(topPlayersParams?: GetTopPlayersRequestQuery) {
  return useQuery({
    queryKey: ['players', 'top', topPlayersParams],
    queryFn: () => getTopPlayers(topPlayersParams),
  })
}

export default useTopPlayers
