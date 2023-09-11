import { Request } from 'express'
import { DefaultResponse } from '../common/defaultResponse'
import { z } from 'zod'

export const endGameSchema = {
  params: z.object({
    gameId: z.string(),
  }),
}

type EndGameRequestParams = z.input<typeof endGameSchema.params>

export type EndGameRequest = Request<EndGameRequestParams, never, never, never>

export type EndGameResponse = DefaultResponse<never>
