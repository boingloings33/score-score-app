import { PlayableGame } from 'shared/types/models'
import { prisma } from '@/prismaConnection'
import { StatusError } from '@/utils/errorHandler'

export async function assertPlayableGameExists(
  playableGameId: string | number | undefined
): Promise<PlayableGame> {
  if (!playableGameId) {
    throw new StatusError(400, 'You must provide a playable game id')
  }

  if (isNaN(Number(playableGameId))) {
    throw new StatusError(400, 'Invalid game id')
  }

  const playableGame = await prisma.playableGame.findUnique({
    where: {
      id: Number(playableGameId),
    },
  })

  if (!playableGame) {
    throw new StatusError(404, 'Playable game not found')
  }

  return playableGame
}
