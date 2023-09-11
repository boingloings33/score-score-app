import { searchUsers } from '@/api/UserService'
import { useQuery } from 'react-query'

function useSearchUsers(searchTerm: string) {
  return useQuery({
    queryKey: ['users', 'search', searchTerm],
    queryFn: () => searchUsers(searchTerm),
  })
}

export default useSearchUsers
