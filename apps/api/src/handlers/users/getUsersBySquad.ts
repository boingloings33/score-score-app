import { Request, Response } from 'express'

function getUsersBySquad(req: Request, res: Response) {
  res.status(500).send({
    message: 'this endpoint is not implemented yet',
  })
}

export default getUsersBySquad
