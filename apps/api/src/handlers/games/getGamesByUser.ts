import { Response } from 'express'
import errorHandler from '@/utils/errorHandler'
import { assertUserExists } from '@/utils/assertions'
import { prisma } from '@/prismaConnection'
import { StatusError } from '@/utils/errorHandler'
import { GetGameByUserRequest, GetGameByUserResponse } from 'shared/types/api'

async function getGamesByUser(
  req: GetGameByUserRequest,
  res: Response<GetGameByUserResponse>
) {
  try {
    const { userId } = req.params

    await assertUserExists(userId)

    const games = await prisma.game.findMany({
      where: {
        id: Number(userId),
      },
      select: {
        id: true,
        gamePlayedId: true,
        completed: true,
        gamePlayed: {
          select: {
            id: true,
            name: true,
            pointsToWin: true,
            icon: true,
          },
        },
        players: {
          select: {
            id: true,
            score: true,
            userId: true,
            guestName: true,
            gameId: true,
            user: {
              select: {
                id: true,
                username: true,
                profilePic: true,
                firstName: true,
                lastName: true,
              },
            },
          },
        },
      },
    })

    if (!games || games.length === 0) {
      throw new StatusError(404, 'No games found.')
    }

    return res.json({
      data: games,
    })
  } catch (err) {
    return errorHandler(res, err, 'There was an error getting games')
  }
}

export default getGamesByUser
