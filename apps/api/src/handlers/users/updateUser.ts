import { prisma } from '@/prismaConnection'
import { assertUserExists } from '@/utils/assertions'
import errorHandler, { StatusError } from '@/utils/errorHandler'
import { AuthLocals } from '@/utils/validateAuthToken'
import { Response } from 'express'
import { UpdateUserRequest, UpdateUserResponse } from 'shared/types/api'

async function updateUser(
  req: UpdateUserRequest,
  res: Response<UpdateUserResponse, AuthLocals>
) {
  try {
    const { userId } = req.params
    const newUserData = req.body
    const { user } = res.locals

    if (Number(userId) !== user.id) {
      throw new StatusError(
        400,
        "You may not update another user's information"
      )
    }

    await assertUserExists(userId)

    await prisma.user.update({
      where: {
        id: Number(userId),
      },
      data: newUserData,
    })

    return res.json({
      message: 'The user was updated successfully',
    })
  } catch (err) {
    return errorHandler(res, err, 'There was an error updating a user')
  }
}

export default updateUser
