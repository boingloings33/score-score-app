import {
  GetPlayableGamesRequest,
  GetPlayableGamesResponse,
} from 'shared/types/api'
import { Response } from 'express'
import errorHandler, { StatusError } from '@/utils/errorHandler'
import { prisma } from '@/prismaConnection'

async function getPlayableGames(
  req: GetPlayableGamesRequest,
  res: Response<GetPlayableGamesResponse>
) {
  try {
    const playableGames = await prisma.playableGame.findMany({
      select: {
        id: true,
        name: true,
        pointsToWin: true,
        icon: true,
      },
    })

    if (!playableGames || playableGames.length === 0) {
      throw new StatusError(404, 'No playable games found.')
    }

    return res.json({
      data: playableGames,
    })
  } catch (err) {
    return errorHandler(res, err, 'There was an error getting playable games')
  }
}

export default getPlayableGames
