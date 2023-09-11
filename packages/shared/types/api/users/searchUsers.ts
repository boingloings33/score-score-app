import { Request } from 'express'
import { DefaultResponse } from '../common/defaultResponse'
import { z } from 'zod'
import { User } from '../../models/user'

export const searchUsersSchema = {
  query: z.object({
    searchTerm: z.string(),
  }),
}

type SearchUsersRequestQuery = z.input<typeof searchUsersSchema.query>

export type SearchUsersRequest = Request<
  never,
  never,
  never,
  SearchUsersRequestQuery
>

export type SearchUsersResponse = DefaultResponse<User[]>
