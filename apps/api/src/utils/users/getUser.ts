import { User } from 'shared/types/models'
import { assertUserExists } from '@/utils/assertions'

async function getUser(userId: number): Promise<User> {
  const user = await assertUserExists(userId)

  return user
}

export default getUser
