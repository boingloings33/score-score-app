import { Request } from 'express'
import { DefaultResponse } from '../common/defaultResponse'
import { User } from '../../models'

export type GetMeRequest = Request<never, never, never, never>

export type GetMeResponse = DefaultResponse<User>
