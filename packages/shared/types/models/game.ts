import { PlayableGame, Player } from '.'

export interface Game {
  id: number

  gamePlayedId?: number

  created?: Date
  updated?: Date

  completed?: Date | null

  gamePlayed?: PlayableGame // which game did you play ?
  players?: Player[]
}
