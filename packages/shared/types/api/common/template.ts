import { Request } from 'express'
import { DefaultResponse } from './defaultResponse'
import { z } from 'zod'

export const xXxSchema = {
  params: z.object({
    param1: z.string(),
  }),
  body: z.object({
    prop1: z.string(),
  }),
  query: z.object({
    queryParam1: z.string(),
  }),
}

type XxxRequestParams = z.input<typeof xXxSchema.params>
type XxxRequestBody = z.input<typeof xXxSchema.body>
type XxxRequestQuery = z.input<typeof xXxSchema.query>

export type XxxRequest = Request<
  XxxRequestParams,
  never,
  XxxRequestBody,
  XxxRequestQuery
>

export type XxxResponse = DefaultResponse<never>
