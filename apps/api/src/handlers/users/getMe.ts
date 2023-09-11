import { Request, Response } from 'express'
import { GetMeResponse } from 'shared/types/api'
import { User } from 'shared/types/models'

import errorHandler from '@/utils/errorHandler'
import { assertUserExists } from '@/utils/assertions'
import { AuthLocals } from '@/utils/validateAuthToken'

const getMe = async (
  req: Request,
  res: Response<GetMeResponse, AuthLocals>
) => {
  try {
    const userId = res.locals?.user?.id

    const me = await assertUserExists(userId)

    return res.status(200).json({
      message: 'success',
      data: me,
    })
  } catch (err) {
    return errorHandler(res, err, 'Error getting user')
  }
}

export default getMe
