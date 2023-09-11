import { Game } from 'shared/types/models'
import { prisma } from '@/prismaConnection'
import { StatusError } from '@/utils/errorHandler'

export async function assertGameExists(
  gameId: string | number | undefined
): Promise<Game> {
  if (!gameId) {
    throw new StatusError(400, 'You must provide a game id')
  }

  if (isNaN(Number(gameId))) {
    throw new StatusError(400, 'Invalid game id')
  }

  const game = await prisma.game.findUnique({
    where: {
      id: Number(gameId),
    },
  })

  if (!game) {
    throw new StatusError(404, 'Game not found')
  }

  return game
}
