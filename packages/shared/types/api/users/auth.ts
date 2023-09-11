import { z } from 'zod'
import { Request } from 'express'
import { DefaultResponse } from '../common/defaultResponse'
import { User } from '../../models'

export const authSchema = {
  body: z.object({
    username: z.string(),
    password: z.string(),
  }),
}

type AuthRequestBody = z.input<typeof authSchema.body>

export type AuthRequest = Request<never, never, AuthRequestBody, never>

export type AuthResponse = DefaultResponse<User>
