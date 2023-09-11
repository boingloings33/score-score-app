import bcrypt from 'bcrypt'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import { prisma } from '@/prismaConnection'
import errorHandler, { StatusError } from '@/utils/errorHandler'
import generateUserToken from '@/utils/users/generateUserToken'

const refreshToken = async (req: Request, res: Response) => {
  try {
    // Get refresh token from headers
    const token = req.cookies.refresh_token
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const jwtSecret: string = process.env.JWT_REFRESH_SECRET!

    // Check for jwt secret
    if (!jwtSecret) {
      throw new Error('Missing JWT secret')
    }

    // Parse refresh token
    const parsedToken = jwt.verify(token, jwtSecret) || null

    // If parsedToken is null respond with 401
    if (!parsedToken) {
      throw new StatusError(401, 'Invalid refresh token')
    }

    // Check to make sure parsed token
    const id = typeof parsedToken === 'object' && parsedToken?.id

    // Use refresh token to check for valid session
    const user = await prisma.user.findFirst({
      where: {
        id: id,
      },
    })

    if (!user || !user.refreshToken) {
      throw new StatusError(401, 'Invalid refresh token')
    }

    // Compare refresh tokens
    if (!bcrypt.compareSync(token, user.refreshToken)) {
      throw new StatusError(401, 'Invalid refresh token')
    }

    // generate login tokens
    await generateUserToken(user.id, res)

    return res.status(200).json({
      message: 'Tokens refreshed',
      data: { id: user.id },
    })
  } catch (err) {
    return errorHandler(res, err, 'Error checking refresh token')
  }
}

export default refreshToken
