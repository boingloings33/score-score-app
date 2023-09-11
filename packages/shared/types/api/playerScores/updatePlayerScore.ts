import { Request } from 'express'
import { DefaultResponse } from '../common/defaultResponse'
import { z } from 'zod'

export const updatePlayerScoreSchema = {
  params: z.object({
    playerId: z.string(),
  }),
  body: z.object({
    scoreScalar: z.number(),
  }),
}

type UpdatePlayerScoreRequestParams = z.input<
  typeof updatePlayerScoreSchema.params
>
type UpdatePlayerScoreRequestBody = z.input<typeof updatePlayerScoreSchema.body>

export type UpdatePlayerScoreRequest = Request<
  UpdatePlayerScoreRequestParams,
  never,
  UpdatePlayerScoreRequestBody,
  never
>

export type UpdatePlayerScoreResponse = DefaultResponse<never>
