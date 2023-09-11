import { getCurrentGameByUser } from '@/api/GameService'
import { useQuery } from 'react-query'

function useCurrentGameByUser(userId: number) {
  return useQuery({
    queryKey: ['games', 'user', userId],
    queryFn: () => getCurrentGameByUser(userId),
    enabled: !!userId,
    refetchOnMount: true,
  })
}

export default useCurrentGameByUser
