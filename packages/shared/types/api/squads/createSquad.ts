import { Request } from 'express'
import { DefaultResponse } from '../common/defaultResponse'
import { z } from 'zod'
import { Squad } from '../../models'

export const createSquadSchema = {
  body: z.object({
    name: z.string(),
  }),
}

type CreateSquadRequestBody = z.input<typeof createSquadSchema.body>

export type CreateSquadRequest = Request<
  never,
  never,
  CreateSquadRequestBody,
  never
>

export type CreateSquadResponse = DefaultResponse<Squad>
