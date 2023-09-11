import {
  UpdatePlayerScoreRequest,
  UpdatePlayerScoreResponse,
} from 'shared/types/api'
import { prisma } from '@/prismaConnection'
import { assertPlayerExists } from '@/utils/assertions/assertPlayerExists'
import errorHandler, { StatusError } from '@/utils/errorHandler'
import { Response } from 'express'
import { AuthLocals } from '@/utils/validateAuthToken'

async function updatePlayerScore(
  req: UpdatePlayerScoreRequest,
  res: Response<UpdatePlayerScoreResponse, AuthLocals>
) {
  try {
    const { playerId } = req.params
    const { scoreScalar } = req.body
    const { user } = res.locals

    await assertPlayerExists(playerId)

    const game = await prisma.game.findFirst({
      where: {
        players: {
          some: {
            id: Number(playerId), // find the game with the player you are updating
          },
        },
      },
      select: {
        players: {
          select: {
            userId: true,
          },
        },
      },
    })

    if (!game) {
      throw new StatusError(404, 'No game exists with this player.')
    }
    if (game.players.find((player) => player.userId !== 1)) {
      // one of the players is not a guest
      if (!game.players.find((player) => player.userId === user.id)) {
        // neither of the players userId is the userId of the requester
        throw new StatusError(
          403,
          'You cannot update the score of a game if you are not a player'
        )
      }
      // else the requester is a player in the game
    }

    // here: the requester is either a player in the game, or the game is two guests

    await prisma.player.update({
      where: {
        id: Number(playerId),
      },
      data: {
        score: {
          increment: scoreScalar,
        },
      },
    })

    return res.json({
      message: 'The score was updated successfully',
    })
  } catch (err) {
    return errorHandler(res, err, 'There was an error updating the score')
  }
}

export default updatePlayerScore
