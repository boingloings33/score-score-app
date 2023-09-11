import { updateUser } from '@/api/UserService'
import useSnackbar from '@/hooks/useSnackbar'
import { useMutation, useQueryClient } from 'react-query'

function useUpdateUser() {
  const { openSnackbar } = useSnackbar()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateUser,

    onSuccess: (_data, { userId }) => {
      queryClient.invalidateQueries(['getMe'])
      queryClient.invalidateQueries(['users', userId])
      queryClient.invalidateQueries(['users', 'search'])
      queryClient.invalidateQueries(['games'])

      openSnackbar({
        type: 'success',
        message: 'Your profile was updated.',
      })
    },
    onError: () => {
      openSnackbar({
        type: 'error',
        message: 'There was a problem updating your profile',
      })
    },
  })
}

export default useUpdateUser
