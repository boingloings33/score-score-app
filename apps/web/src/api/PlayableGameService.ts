import { GetPlayableGamesResponse } from 'shared/types/api'
import { CreateApiService } from '@/api/Service'

const PlayableGameService = CreateApiService({
  baseURL: '/playableGames',
})

// GET
export function getPlayableGames() {
  return PlayableGameService.get<GetPlayableGamesResponse>('/').then(
    (res) => res.data.data
  )
}

// POST

export default PlayableGameService
