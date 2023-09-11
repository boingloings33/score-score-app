import { prisma } from '@/prismaConnection'
import { StatusError } from '@/utils/errorHandler'

interface AssertUserIsInSquadParams {
  userId: number
  squadId: number
}
export async function assertUserIsInSquad({
  userId,
  squadId,
}: AssertUserIsInSquadParams): Promise<void> {
  const user = await prisma.user.findFirst({
    where: {
      id: userId,
      squadId: squadId,
    },
  })

  if (!user) {
    throw new StatusError(
      404,
      `User ${userId} is not a member of Squad ${squadId}`
    )
  }
}
