import {
  GetTopPlayersRequestQuery,
  GetTopPlayersResponse,
  UpdatePlayerScoreResponse,
} from 'shared/types/api'
import { CreateApiService } from '@/api/Service'

const PlayerService = CreateApiService({
  baseURL: '/players',
})

// GET
export function getTopPlayers(topPlayersParams?: GetTopPlayersRequestQuery) {
  return PlayerService.get<GetTopPlayersResponse>('/', {
    params: {
      ...topPlayersParams,
    },
  }).then((res) => res.data.data)
}

// POST

// PUT
export function updatePlayerScore({
  playerId,
  scoreScalar,
}: {
  playerId: number
  scoreScalar: number
}) {
  return PlayerService.put<UpdatePlayerScoreResponse>(`/${playerId}`, {
    scoreScalar,
  }).then((res) => res.data.data)
}

export default PlayerService
