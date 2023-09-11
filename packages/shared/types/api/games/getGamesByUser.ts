import { Request } from 'express'
import { DefaultResponse } from '../common/defaultResponse'
import { z } from 'zod'
import { Game } from '../../models'

export const getGameByUserSchema = {
  params: z.object({
    userId: z.string(),
  }),
}

type GetGameByUserRequestParams = z.input<typeof getGameByUserSchema.params>

export type GetGameByUserRequest = Request<
  GetGameByUserRequestParams,
  never,
  never,
  never
>

export type GetGameByUserResponse = DefaultResponse<Array<Game>>
