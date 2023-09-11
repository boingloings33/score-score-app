import { Request } from 'express'
import { DefaultResponse } from '../common/defaultResponse'
import { z } from 'zod'

export const deleteUserSchema = {
  params: z.object({
    userId: z.string(),
  }),
}

type DeleteUserRequestParams = z.input<typeof deleteUserSchema.params>

export type DeleteUserRequest = Request<
  DeleteUserRequestParams,
  never,
  never,
  never
>

export type DeleteUserResponse = DefaultResponse<never>
