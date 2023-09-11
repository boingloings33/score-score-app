import { Request } from 'express'
import { DefaultResponse } from '../common/defaultResponse'
import { z } from 'zod'
import { User, WinLossRecord } from '../../models'

export const getTopPlayersSchema = {
  query: z.object({
    playableGameId: z.string().optional(),
  }),
}

export type GetTopPlayersRequestQuery = z.input<
  typeof getTopPlayersSchema.query
>

export type GetTopPlayersRequest = Request<
  never,
  never,
  never,
  GetTopPlayersRequestQuery
>

export type GetTopPlayersResponse = DefaultResponse<(User & WinLossRecord)[]>
