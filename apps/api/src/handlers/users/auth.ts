import bcrypt from 'bcrypt'
import { Response } from 'express'
import { AuthRequest, AuthResponse } from 'shared/types/api'

import { prisma } from '@/prismaConnection'
import errorHandler, { StatusError } from '@/utils/errorHandler'
import generateUserToken from '@/utils/users/generateUserToken'
import getUser from '@/utils/users/getUser'

const auth = async (req: AuthRequest, res: Response<AuthResponse>) => {
  try {
    const { username, password } = req.body

    if (!username) {
      throw new StatusError(400, 'Username must be provided')
    }

    const user = await prisma.user.findFirst({
      where: {
        username: username,
      },
    })

    if (!user) {
      throw new StatusError(
        400,
        'Unable to login, check your phone number or password and try again'
      )
    }

    // Check password is not nullish
    if (!password) {
      throw new StatusError(400, 'Error authenticating user')
    }

    // Validate password
    if (!user.password) {
      throw new StatusError(400, 'No password set')
    }

    if (!bcrypt.compareSync(password, user.password)) {
      throw new StatusError(400, 'Invalid credentials')
    }

    // generate login tokens
    await generateUserToken(user.id, res)

    const userWithoutSecrets = await getUser(user.id)

    return res.json({
      data: userWithoutSecrets,
    })
  } catch (err) {
    return errorHandler(res, err, 'Error authenticating user')
  }
}

export default auth
