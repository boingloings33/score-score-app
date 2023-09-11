import { Response } from 'express'

import errorHandler, { StatusError } from '@/utils/errorHandler'
import { assertGameExists } from '@/utils/assertions'
import { GetGameRequest, GetGameResponse } from 'shared/types/api'
import { prisma } from '@/prismaConnection'

export async function getGameById(
  req: GetGameRequest,
  res: Response<GetGameResponse>
) {
  try {
    const { gameId } = req.params

    await assertGameExists(gameId)

    const game = await prisma.game.findFirst({
      where: {
        id: Number(gameId),
      },
      select: {
        id: true,
        completed: true,
        gamePlayed: true,
        players: {
          select: {
            id: true,
            guestName: true,
            score: true,
            userId: true,
            user: {
              select: {
                id: true,
                username: true,
                firstName: true,
                lastName: true,
                profilePic: true,
              },
            },
          },
        },
      },
    })

    if (!game) {
      throw new StatusError(404, 'Game not found')
    }

    return res.json({
      data: game,
    })
  } catch (err) {
    return errorHandler(res, err, 'There was an error getting a game')
  }
}
