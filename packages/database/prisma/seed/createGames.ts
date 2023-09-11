import { PrismaClient } from '@prisma/client'

const createGames = async (prisma: PrismaClient) => {
  try {
    const gamesResult = await prisma.game.createMany({
      data: [
        {
          id: 1,
          gamePlayedId: 1,
          completed: new Date('2022-09-20'),
        },
        {
          id: 2, //Blake
          gamePlayedId: 1,
          completed: new Date('2019-05-03'),
        },
        {
          id: 3,
          gamePlayedId: 2,
        },
        {
          id: 4,
          gamePlayedId: 2,
        },
        {
          id: 5,
          gamePlayedId: 4,
        },
        {
          id: 6,
          gamePlayedId: 4,
        },
        {
          id: 7,
          gamePlayedId: 5,
        },
        {
          id: 8,
          gamePlayedId: 5,
        },
        {
          id: 9,
          gamePlayedId: 3,
        },
        {
          id: 10,
          gamePlayedId: 3,
        },
        {
          id: 11,
          gamePlayedId: 6,
        },
        {
          id: 12,
          gamePlayedId: 6,
        },
        {
          id: 13,
          gamePlayedId: 2,
          completed: new Date('2022-09-21'),
        },
        {
          id: 14,
          gamePlayedId: 3,
          completed: new Date('2022-09-22'),
        },
        {
          id: 15,
          gamePlayedId: 4,
          completed: new Date('2022-09-23'),
        },
        {
          id: 16,
          gamePlayedId: 5,
          completed: new Date('2022-09-24'),
        },
        {
          id: 17,
          gamePlayedId: 1,
          completed: new Date('2022-09-25'),
        },
        {
          id: 18,
          gamePlayedId: 2,
          completed: new Date('2022-09-26'),
        },
        {
          id: 19,
          gamePlayedId: 3,
          completed: new Date('2022-09-27'),
        },
        {
          id: 20,
          gamePlayedId: 4,
          completed: new Date('2022-09-28'),
        },
        {
          id: 21,
          gamePlayedId: 5,
          completed: new Date('2022-09-29'),
        },
        {
          id: 22,
          gamePlayedId: 1,
          completed: new Date('2022-09-30'),
        },
        {
          id: 23,
          gamePlayedId: 2,
          completed: new Date('2022-10-01'),
        },
        {
          id: 24,
          gamePlayedId: 3,
          completed: new Date('2022-10-02'),
        },
        {
          id: 25,
          gamePlayedId: 4,
          completed: new Date('2022-10-03'),
        },
        {
          id: 26,
          gamePlayedId: 5,
          completed: new Date('2022-10-04'),
        },
        {
          id: 27,
          gamePlayedId: 2,
          completed: new Date('2022-10-05'),
        },
        {
          id: 28,
          gamePlayedId: 3,
          completed: new Date('2022-10-06'),
        },
        {
          id: 29,
          gamePlayedId: 4,
          completed: new Date('2022-10-07'),
        },
        {
          id: 30,
          gamePlayedId: 5,
          completed: new Date('2022-10-08'),
        },
      ],
    })

    return Promise.resolve<{ name: string; data: string }>({
      name: 'games',
      data: `${gamesResult.count} games created`,
    })
  } catch (error) {
    return Promise.reject(error)
  }
}

export default createGames
