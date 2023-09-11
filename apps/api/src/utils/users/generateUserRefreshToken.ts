import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { prisma } from '@/prismaConnection'

const generateAdminRefreshToken = async (id: number) => {
  // Create refresh token
  const refreshToken = jwt.sign(
    {
      id,
    },
    process.env.JWT_REFRESH_SECRET || '',
    { expiresIn: '15m' }
  )

  // Hash refresh token
  const salt = bcrypt.genSaltSync(5)
  const hashedRefreshToken = bcrypt.hashSync(refreshToken, salt)

  // Insert refresh token into user table
  await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      refreshToken: hashedRefreshToken,
    },
  })

  return refreshToken
}

export default generateAdminRefreshToken
