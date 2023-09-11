import { Request } from 'express'
import { DefaultResponse } from '../common/defaultResponse'
import { z } from 'zod'

export const startNewGameSchema = {
  body: z.object({
    gamePlayedId: z.number(),
    player1: z.object({
      id: z.number().optional(),
      guestName: z.string().max(32).optional(),
    }),
    player2: z.object({
      id: z.number().optional(),
      guestName: z.string().max(32).optional(),
    }),
  }),
}

type StartNewGameRequestBody = z.input<typeof startNewGameSchema.body>

export type StartNewGameRequest = Request<
  never,
  never,
  StartNewGameRequestBody,
  never
>

export type StartNewGameResponse = DefaultResponse<{ gameId: number }>
