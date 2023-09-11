import { StartNewGameRequest, StartNewGameResponse } from 'shared/types/api'
import { Response } from 'express'
import errorHandler, { StatusError } from '@/utils/errorHandler'
import { prisma } from '@/prismaConnection'
import { assertUserExists, assertPlayableGameExists } from '@/utils/assertions'

export async function startNewGame(
  req: StartNewGameRequest,
  res: Response<StartNewGameResponse>
) {
  try {
    const { gamePlayedId, player1, player2 } = req.body

    await assertPlayableGameExists(gamePlayedId)

    await assertUserExists(player1.id)
    if (player1.id === 1 && !player1.guestName) {
      throw new StatusError(
        400,
        'You must provide a valid user id or guest name to start a new game.'
      )
    }

    await assertUserExists(player2.id)
    if (player2.id === 1 && !player2.guestName) {
      throw new StatusError(
        400,
        'You must provide a valid user id or guest name to start a new game.'
      )
    }

    const newGame = await prisma.game.create({
      data: {
        gamePlayedId: gamePlayedId,
        players: {
          createMany: {
            data: [
              {
                userId: player1.id,
                guestName: player1.guestName,
              },
              {
                userId: player2.id,
                guestName: player2.guestName,
              },
            ],
          },
        },
      },
    })

    return res.json({
      message: 'Your game was started successfully',
      data: {
        gameId: newGame.id,
      },
    })
  } catch (err) {
    return errorHandler(res, err, 'There was an error getting a game')
  }
}
