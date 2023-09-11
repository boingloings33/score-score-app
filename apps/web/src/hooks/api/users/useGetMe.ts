import { useQuery } from 'react-query'

import { getMe } from '@/api/UserService'
import { useAuthContext } from '@/contexts/Auth'

function useGetMe() {
  const { authenticated } = useAuthContext()
  return useQuery({
    queryKey: ['getMe'],
    queryFn: getMe,
    enabled: !!authenticated,
  })
}

export default useGetMe
