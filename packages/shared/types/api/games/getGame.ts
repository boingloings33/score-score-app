import { Request } from 'express'
import { DefaultResponse } from '../common/defaultResponse'
import { z } from 'zod'
import { Game, Player, User } from '../../models'

export const getGameSchema = {
  params: z.object({
    gameId: z.string(),
  }),
}

type GetGameRequestParams = z.input<typeof getGameSchema.params>

export type GetGameRequest = Request<GetGameRequestParams, never, never, never>

export type GetGameResponse = DefaultResponse<
  Pick<Game, 'id' | 'completed' | 'gamePlayed' | 'players'> & {
    players: (Pick<Player, 'id' | 'guestName' | 'score' | 'user'> & {
      user: User
    })[]
  }
>
