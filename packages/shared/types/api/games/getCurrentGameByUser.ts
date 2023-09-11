import { Request } from 'express'
import { z } from 'zod'
import { Game, Player, User } from '../../models'
import { DefaultResponse } from '../common/defaultResponse'

export const getCurrentGameByUserSchema = {
  params: z.object({
    userId: z.string(),
  }),
}

type GetCurrentGameByUserRequestParams = z.input<
  typeof getCurrentGameByUserSchema.params
>

export type GetCurrentGameByUserRequest = Request<
  GetCurrentGameByUserRequestParams,
  never,
  never,
  never
>

export type GetCurrentGameByUserResponse = DefaultResponse<
  Pick<Game, 'id' | 'completed' | 'gamePlayed' | 'players'> & {
    players: (Pick<Player, 'id' | 'guestName' | 'score' | 'user'> & {
      user: User
    })[]
  }
>
