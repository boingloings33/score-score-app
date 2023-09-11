import { createUser } from '@/api/UserService'
import { NewUserFields } from '@/components/forms/NewUserForm'
import { useAuthContext } from '@/contexts/Auth'
import useSnackbar from '@/hooks/useSnackbar'
import { useMutation, useQueryClient } from 'react-query'

function useCreateUser() {
  const { openSnackbar } = useSnackbar()
  const { setAuthenticated } = useAuthContext()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (newUser: NewUserFields) => createUser(newUser),
    onSuccess: () => {
      setAuthenticated(true)
      queryClient.invalidateQueries(['users', 'search'])

      openSnackbar({
        type: 'success',
        message: 'Your account was created successfully!',
      })
    },
    onError: () => {
      openSnackbar({
        type: 'error',
      })
    },
  })
}

export default useCreateUser
