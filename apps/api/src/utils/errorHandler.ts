import { Response } from 'express'

type ErrorCode = 500 | 400 | 401 | 403 | 404 | 409
export class StatusError extends Error {
  status: number

  constructor(status: ErrorCode, msg: string) {
    super(msg)
    this.status = status

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, StatusError.prototype)
  }
}

const errorHandler = (
  res: Response,
  err: unknown,
  defaultMessage = 'Internal Server Error'
) => {
  console.error(err)
  const status = (err as StatusError)?.status || 500
  // const message = err instanceof Error ? err.message : err
  // console.error(chalk.red(message))
  if (!res.headersSent) {
    return res.status(status).json({ message: defaultMessage })
  }
}

export default errorHandler
