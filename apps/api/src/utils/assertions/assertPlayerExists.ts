import { Player } from 'shared/types/models'
import { prisma } from '@/prismaConnection'
import { StatusError } from '@/utils/errorHandler'

export async function assertPlayerExists(
  playerId: string | number | undefined
): Promise<Player> {
  if (!playerId) {
    throw new StatusError(400, 'You must provide a player id')
  }

  if (isNaN(Number(playerId))) {
    throw new StatusError(400, 'Invalid player id')
  }

  const player = await prisma.player.findUnique({
    where: {
      id: Number(playerId),
    },
  })

  if (!player) {
    throw new StatusError(404, 'Player not found')
  }

  return player
}
