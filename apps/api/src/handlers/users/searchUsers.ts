import { SearchUsersRequest, SearchUsersResponse } from 'shared/types/api'
import errorHandler, { StatusError } from '@/utils/errorHandler'
import { Response } from 'express'

import { prisma } from '@/prismaConnection'

async function searchUsers(
  req: SearchUsersRequest,
  res: Response<SearchUsersResponse>
) {
  try {
    const { searchTerm } = req.query

    const users = await prisma.user.findMany({
      where: {
        OR: [
          {
            username: {
              contains: searchTerm,
            },
          },
          {
            firstName: {
              contains: searchTerm,
            },
          },
          {
            lastName: {
              contains: searchTerm,
            },
          },
        ],
      },
      select: {
        id: true,
        username: true,
        firstName: true,
        lastName: true,
        profilePic: true,
      },
    })

    if (!users || users.length === 0) {
      throw new StatusError(404, 'No users found.')
    }

    return res.json({
      data: users,
    })
  } catch (err) {
    return errorHandler(res, err, 'There was an error searching users.')
  }
}

export default searchUsers
