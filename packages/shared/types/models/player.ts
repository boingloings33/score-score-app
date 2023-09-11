import { Game, User } from '.'

export interface Player {
  id: number

  gameId?: number
  userId: number // userId = 1 -> guest user

  score: number
  guestName: string | null

  user?: User
  game?: Game
}
