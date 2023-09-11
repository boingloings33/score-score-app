import { endGame } from '@/api/GameService'
import useSnackbar from '@/hooks/useSnackbar'
import { useMutation, useQueryClient } from 'react-query'

function useEndGame() {
  const { openSnackbar } = useSnackbar()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: endGame,

    onSuccess: () => {
      queryClient.invalidateQueries(['games'])
    },
    onError: () => {
      openSnackbar({
        type: 'error',
        message: 'There was a problem ending your game',
      })
    },
  })
}

export default useEndGame
