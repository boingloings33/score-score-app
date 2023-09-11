import { Request } from 'express'
import { DefaultResponse } from '../common/defaultResponse'
import { PlayableGame } from '../../models'

export const getPlayableGamesSchema = {}

export type GetPlayableGamesRequest = Request<never, never, never, never>

export type GetPlayableGamesResponse = DefaultResponse<PlayableGame[]>
