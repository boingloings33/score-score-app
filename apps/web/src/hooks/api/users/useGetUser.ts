import { getUser } from '@/api/UserService'
import { useQuery } from 'react-query'

function useGetUser(userId: number) {
  return useQuery({
    queryKey: ['users', userId],
    queryFn: () => getUser(userId),
  })
}

export default useGetUser
