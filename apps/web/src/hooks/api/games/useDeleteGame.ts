import { deleteGame } from '@/api/GameService'
import useSnackbar from '@/hooks/useSnackbar'
import { useMutation, useQueryClient } from 'react-query'

function useDeleteGame() {
  const { openSnackbar } = useSnackbar()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteGame,
    onSuccess: () => {
      // update cache
      queryClient.invalidateQueries(['games'])
    },
    onError: () => {
      openSnackbar({
        type: 'error',
        message: 'There was a problem deleting your game. Please try again.',
      })
    },
  })
}

export default useDeleteGame
