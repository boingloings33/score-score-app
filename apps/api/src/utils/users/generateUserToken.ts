import { Response } from 'express'
import jwt from 'jsonwebtoken'

import generateUserRefreshToken from './generateUserRefreshToken'

const generateUserToken = async (userId: number, res: Response) => {
  // Generate JWT token and refresh token
  const token = await jwt.sign({ id: userId }, process.env.JWT_SECRET || '', {
    expiresIn: process.env.JWT_EXPIRATION || '60m',
  })
  const refreshToken = await generateUserRefreshToken(userId)

  // Set cookies
  res.cookie('access_token', token, {
    httpOnly: true,
    secure: true,
    maxAge: Number(process.env.COOKIE_MAX_AGE) || undefined,
    sameSite: process.env.NODE_ENV !== 'dev' ? 'none' : 'none',
  })

  res.cookie('refresh_token', refreshToken, {
    httpOnly: true,
    secure: true,
    maxAge: Number(process.env.COOKIE_MAX_AGE) || undefined,
    sameSite: process.env.NODE_ENV !== 'dev' ? 'none' : 'none',
  })
}

export default generateUserToken
