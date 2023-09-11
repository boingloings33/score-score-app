import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import { prisma } from '@/prismaConnection'
import errorHandler, { StatusError } from '@/utils/errorHandler'
import { User } from 'shared/types/models'

export interface AuthLocals {
  user: User
}

const validateAuthToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.access_token
    let parsedToken
    let attempts = 0

    // Check for access token
    if (!token && attempts < 1) {
      attempts++
      throw new StatusError(401, 'JWT must be provided')
    }

    // Parse token and throw error if expired or invalid
    try {
      parsedToken = jwt.verify(token, process.env.JWT_SECRET as string)
    } catch (error) {
      if (error instanceof Error && error.name === 'TokenExpiredError') {
        throw new StatusError(401, 'Token has expired')
      } else {
        throw new StatusError(401, 'Error validating token')
      }
    }

    if (!parsedToken) {
      throw new StatusError(401, 'Error validating token')
    }

    if (typeof parsedToken !== 'object') {
      throw new StatusError(401, 'Malformed JWT')
    }

    // Check that user exists and has a refresh token
    const user = await prisma.user.findFirst({
      where: {
        id: parsedToken.id,
      },
    })

    if (!user) {
      throw new StatusError(401, 'Error getting user data')
    }

    if (user?.refreshToken === null || user?.refreshToken === '') {
      throw new StatusError(401, 'User has been logged out')
    }

    res.locals.user = user
    return next()
  } catch (err) {
    return errorHandler(res, err, 'Error validating user')
  }
}

export default validateAuthToken
