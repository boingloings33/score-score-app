import { Request } from 'express'
import { DefaultResponse } from '../common/defaultResponse'
import { z } from 'zod'
import { User } from '../../models'

export const createUserSchema = {
  body: z.object({
    username: z.string(),
    password: z.string(),
    firstName: z.string().optional(),
  }),
}

type CreateUserRequestBody = z.input<typeof createUserSchema.body>

export type CreateUserRequest = Request<
  never,
  never,
  CreateUserRequestBody,
  never
>

export type CreateUserResponse = DefaultResponse<{ user: User }>
