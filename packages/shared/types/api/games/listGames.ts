import { Request } from 'express'
import { z } from 'zod'
import { Game } from '../../models'
import { InfiniteScrollResponse } from '../common/infiniteScrollResponse'

export const listGamesSchema = {
  query: z.object({
    userId: z.string().optional(), // games this user played
    gameId: z.string().optional(), // give me games older than this one
    playableGameId: z.string().optional(), // played for this game type
    squadId: z.string().optional(), // games where a squad member played in
  }),
}

type ListGamesRequestQuery = z.input<typeof listGamesSchema.query>

export type ListGamesRequest = Request<
  never,
  never,
  never,
  ListGamesRequestQuery
>

export type ListGamesResponse = InfiniteScrollResponse<Game[]>
