import { Response } from 'express'

import errorHandler, { StatusError } from '@/utils/errorHandler'
import {
  GetCurrentGameByUserRequest,
  GetCurrentGameByUserResponse,
} from 'shared/types/api'
import { prisma } from '@/prismaConnection'
import { assertUserExists } from '@/utils/assertions'

async function getCurrentGame(
  req: GetCurrentGameByUserRequest,
  res: Response<GetCurrentGameByUserResponse>
) {
  try {
    const { userId } = req.params

    await assertUserExists(userId)

    const game = await prisma.game.findFirst({
      where: {
        completed: null,
        players: {
          some: {
            userId: Number(userId),
          },
        },
      },
      orderBy: {
        created: 'desc',
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

export default getCurrentGame
