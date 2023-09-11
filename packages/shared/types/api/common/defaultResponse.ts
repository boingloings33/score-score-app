import { Response } from 'express'

interface DefaultResponse<DataType = Record<string, any>> {
  message?: string
  data?: DataType
  error?: { message: string; error: string }
}

export type { DefaultResponse }
