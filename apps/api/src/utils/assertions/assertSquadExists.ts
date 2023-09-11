import { Squad } from 'shared/types/models'
import { prisma } from '@/prismaConnection'
import { StatusError } from '@/utils/errorHandler'

export async function assertSquadExists(
  squadId: string | number | undefined
): Promise<Squad> {
  if (!squadId) {
    throw new StatusError(400, 'You must provide a squad id')
  }

  if (isNaN(Number(squadId))) {
    throw new StatusError(400, 'Invalid squad id')
  }

  const squad = await prisma.squad.findUnique({
    where: {
      id: Number(squadId),
    },
  })

  if (!squad) {
    throw new StatusError(404, 'Squad not found')
  }

  return squad
}
