import { PrismaClient } from '@prisma/client'
import { hashSync } from 'bcrypt'

const createUsers = async (prisma: PrismaClient) => {
  try {
    const usersResult = await prisma.user.createMany({
      data: [
        {
          id: 1,
          username: 'guest',
          firstName: 'John',
          lastName: 'Doe',
          password: hashSync('Password123!', 10),
        },
        {
          id: 2,
          username: 'blake',
          firstName: 'Blake',
          lastName: 'Ingle',
          password: hashSync('Password123!', 10),
        },
        {
          id: 3,
          username: 'tyler',
          firstName: 'Tyler',
          lastName: 'Wagner',
          password: hashSync('Password123!', 10),
        },
        {
          id: 4,
          username: 'preston',
          firstName: 'Preston',
          lastName: 'Santiago',
          password: hashSync('Password123!', 10),
        },
        {
          id: 5,
          username: 'jakob',
          firstName: 'Jakob',
          lastName: 'Susol',
          password: hashSync('Password123!', 10),
        },
        {
          id: 6,
          username: 'adrien',
          firstName: 'Adrien',
          lastName: 'Lemmel',
          password: hashSync('Password123!', 10),
        },
        {
          id: 7,
          username: 'brenden',
          firstName: 'Brenden',
          lastName: 'Baio',
          password: hashSync('Password123!', 10),
        },
        {
          id: 8,
          username: 'zachary',
          firstName: 'Zachary',
          lastName: 'Butler',
          password: hashSync('Password123!', 10),
        },
        {
          id: 9,
          username: 'melissa',
          firstName: 'Melissa',
          lastName: 'Christiana',
          password: hashSync('Password123!', 10),
        },
      ],
    })

    return Promise.resolve<{ name: string; data: string }>({
      name: 'users',
      data: `${usersResult.count} users created`,
    })
  } catch (error) {
    return Promise.reject(error)
  }
}

export default createUsers
