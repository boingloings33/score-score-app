import { Request } from 'express'
import { DefaultResponse } from '../common/defaultResponse'
import { z } from 'zod'

export const deleteGameSchema = {
  params: z.object({
    gameId: z.string(),
  }),
}

type DeleteGameRequestParams = z.input<typeof deleteGameSchema.params>

export type DeleteGameRequest = Request<
  DeleteGameRequestParams,
  never,
  never,
  never
>

export type DeleteGameResponse = DefaultResponse<never>
