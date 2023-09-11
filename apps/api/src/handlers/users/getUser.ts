import { GetUserRequest, GetUserResponse } from 'shared/types/api'
import { Response } from 'express'
import errorHandler from '@/utils/errorHandler'
import { assertUserExists } from '@/utils/assertions'

async function getUser(req: GetUserRequest, res: Response<GetUserResponse>) {
  try {
    const { userId } = req.params

    const user = await assertUserExists(userId)

    return res.json({
      data: user,
    })
  } catch (err) {
    return errorHandler(res, err, 'There was an error getting a user')
  }
}

export default getUser
