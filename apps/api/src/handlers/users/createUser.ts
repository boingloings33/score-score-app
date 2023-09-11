import bcrypt from 'bcrypt'
import { Response } from 'express'
import { CreateUserRequest, CreateUserResponse } from 'shared/types/api'

import { prisma } from '@/prismaConnection'
import { StatusError } from '@/utils/errorHandler'
import generateUserToken from '@/utils/users/generateUserToken'
import getUser from '@/utils/users/getUser'

export default async function createUser(
  req: CreateUserRequest,
  res: Response<CreateUserResponse>
) {
  const { username, password, firstName } = req.body

  const existingUsername = await prisma.user.findFirst({
    where: {
      username,
    },
  })
  if (existingUsername) {
    throw new StatusError(
      409,
      'Cannot create user. A user with that username already exists.'
    )
  }

  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)
  const encryptedPassword = hash

  const newUser = await prisma.user.create({
    data: {
      username: username,
      password: encryptedPassword,
      firstName: firstName || null,
    },
  })

  const userWithoutSecrets = await getUser(newUser.id)

  await generateUserToken(newUser.id, res)

  return res.json({
    data: {
      user: userWithoutSecrets,
    },
  })
}
