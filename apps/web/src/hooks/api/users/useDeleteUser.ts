import { deleteUser } from '@/api/UserService'
import useSnackbar from '@/hooks/useSnackbar'
import { useMutation, useQueryClient } from 'react-query'

function useDeleteUser() {
  const { openSnackbar } = useSnackbar()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteUser,

    onSuccess: (_data, userId) => {
      queryClient.invalidateQueries(['getMe'])
      queryClient.invalidateQueries(['users', userId])
      queryClient.invalidateQueries(['users', 'search'])
      queryClient.invalidateQueries(['games'])

      openSnackbar({
        type: 'success',
        message: 'Your profile was deleted.',
      })
    },
    onError: () => {
      openSnackbar({
        type: 'error',
        message: 'There was a problem deleting your profile',
      })
    },
  })
}

export default useDeleteUser
