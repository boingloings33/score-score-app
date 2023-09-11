import { prisma } from '@/prismaConnection'
import { assertUserExists } from '@/utils/assertions'
import errorHandler from '@/utils/errorHandler'
import { Response } from 'express'
import { DeleteUserRequest, DeleteUserResponse } from 'shared/types/api'

async function getUsersByTeam(
  req: DeleteUserRequest,
  res: Response<DeleteUserResponse>
) {
  try {
    const { userId } = req.params

    await assertUserExists(userId)

    await prisma.user.delete({
      where: {
        id: Number(userId),
      },
    })

    return res.json({
      message: 'The user was deleted successfully',
    })
  } catch (err) {
    return errorHandler(res, err, 'There was an error deleting a user')
  }
}

export default getUsersByTeam
