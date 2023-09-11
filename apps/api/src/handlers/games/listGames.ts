import { prisma } from '@/prismaConnection'
import {
  assertGameExists,
  assertPlayableGameExists,
  assertUserExists,
} from '@/utils/assertions'
import { assertSquadExists } from '@/utils/assertions/assertSquadExists'
import { assertUserIsInSquad } from '@/utils/assertions/assertUserIsInSquad'
import errorHandler, { StatusError } from '@/utils/errorHandler'
import { Prisma } from 'database'
import { Response } from 'express'
import {
  ListGamesRequest,
  ListGamesResponse,
} from 'shared/types/api/games/listGames'

async function listGames(
  req: ListGamesRequest,
  res: Response<ListGamesResponse>
) {
  try {
    const { gameId, playableGameId, squadId, userId } = req.query

    const gameFilters: Prisma.Enumerable<Prisma.GameWhereInput> = []

    const PAGE_SIZE = 5

    // gameId does not give the exact gameId
    /**
     * The gameId queryParam defines an id of a game the user has already
     * recieved in their client app. The id is used to filter out any
     * games that are newer than that game. That way, we can do
     * infinite scrolling.
     */
    if (gameId) {
      const latestGame = await assertGameExists(gameId)
      if (!latestGame.completed) {
        throw new StatusError(
          400,
          'The game you are filtering with is not complete'
        )
      }
      gameFilters.push({
        completed: {
          lt: latestGame.completed.toISOString(),
        },
      })
    }

    if (playableGameId) {
      await assertPlayableGameExists(playableGameId)

      gameFilters.push({
        gamePlayedId: Number(playableGameId),
      })
    }

    if (squadId) {
      await assertSquadExists(squadId)

      /**
       * If a userid is provided, we do not need to filter by both userid and squad id.
       * If the user is a member of the squad, and we are only getting this user,
       * then the squad id becomes irrelevant
       */
      if (!userId) {
        gameFilters.push({
          players: {
            some: {
              user: {
                squadId: Number(squadId),
              },
            },
          },
        })
      }
    }

    if (userId) {
      await assertUserExists(userId)

      gameFilters.push({
        players: {
          some: {
            userId: Number(userId),
          },
        },
      })
    }

    if (squadId && userId) {
      await assertUserIsInSquad({
        userId: Number(userId),
        squadId: Number(squadId),
      })
    }

    const games = await prisma.game.findMany({
      where: {
        completed: {
          not: null,
        },
        AND: [...gameFilters],
      },
      take: PAGE_SIZE,
      orderBy: {
        completed: 'desc',
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
            guestName: true,
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

    const totalGames = await prisma.game.count({
      where: {
        completed: {
          not: null,
        },
        AND: [...gameFilters],
      },
    })

    return res.json({
      data: games,
      totalRemaining: totalGames <= PAGE_SIZE ? 0 : totalGames - PAGE_SIZE,
    })
  } catch (err) {
    return errorHandler(res, err, 'There was an error getting games')
  }
}

export default listGames
