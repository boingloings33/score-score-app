import { User } from 'shared/types/models'
import { prisma } from '@/prismaConnection'
import { StatusError } from '@/utils/errorHandler'

export async function assertUserExists(
  userId: string | number | undefined
): Promise<User> {
  if (!userId) {
    throw new StatusError(400, 'You must provide a user id')
  }

  if (isNaN(Number(userId))) {
    throw new StatusError(400, 'Invalid user id')
  }

  const user = await prisma.user.findUnique({
    where: {
      id: Number(userId),
    },
    select: {
      id: true,
      username: true,
      firstName: true,
      lastName: true,
      profilePic: true,
    },
  })

  if (!user) {
    throw new StatusError(404, 'User not found')
  }

  return user
}
