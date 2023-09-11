import {
  GetGameByUserResponse,
  GetGameResponse,
  StartNewGameResponse,
  EndGameResponse,
  ListGamesResponse,
  GetCurrentGameByUserResponse,
  DeleteGameResponse,
} from 'shared/types/api'
import { CreateApiService } from '@/api/Service'
import { StartGameFormFields } from '@/components/forms/startGame/StartGameForm'

const GameService = CreateApiService({
  baseURL: '/games',
})

// GET
export function getGame(gameId: number) {
  return GameService.get<GetGameResponse>(`/${gameId}`).then(
    (res) => res.data.data
  )
}
export function getGamesByUser(userId: number) {
  return GameService.get<GetGameByUserResponse>(`/user/${userId}`).then(
    (res) => res.data.data
  )
}

export function getCurrentGameByUser(userId: number) {
  return GameService.get<GetCurrentGameByUserResponse>(
    `/current/${userId}`
  ).then((res) => res.data.data)
}

export interface ListGamesParams {
  userId?: number
  gameId?: number
  playableGameId?: number
  squadId?: number
}
export function listGames({
  userId,
  gameId,
  playableGameId,
  squadId,
}: ListGamesParams) {
  return GameService.get<ListGamesResponse>('/', {
    params: {
      userId,
      gameId,
      playableGameId,
      squadId,
    },
  }).then((res) => res.data)
}

// PUT
export function endGame(gameId: number) {
  return GameService.put<EndGameResponse>(`/${gameId}/end`).then(
    (res) => res.data.data
  )
}

// POST
export function startNewGame(newGame: StartGameFormFields) {
  return GameService.post<StartNewGameResponse>('/', newGame).then(
    (res) => res.data.data
  )
}

// DELETE
export function deleteGame(gameId: number) {
  return GameService.delete<DeleteGameResponse>(`/${gameId}`).then(
    (res) => res.data.data
  )
}

export default GameService
