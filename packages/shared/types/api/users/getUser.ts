import { Request } from 'express'
import { DefaultResponse } from '../common/defaultResponse'
import { z } from 'zod'
import { User } from '../../models'

export const getUserSchema = {
  params: z.object({
    userId: z.string(),
  }),
}

type GetUserRequestParams = z.input<typeof getUserSchema.params>

export type GetUserRequest = Request<GetUserRequestParams, never, never, never>

export type GetUserResponse = DefaultResponse<User>
