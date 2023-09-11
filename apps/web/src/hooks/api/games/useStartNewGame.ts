import { startNewGame } from '@/api/GameService'
import useSnackbar from '@/hooks/useSnackbar'
import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'

function useStartNewGame() {
  const { openSnackbar } = useSnackbar()
  const queryClient = useQueryClient()

  const navigate = useNavigate()

  return useMutation({
    mutationFn: startNewGame,

    onSuccess: (res) => {
      queryClient.invalidateQueries(['games'])
      res?.gameId && navigate(`/game/${res.gameId}`)
    },
    onError: () => {
      openSnackbar({
        type: 'error',
        message: 'There was a problem starting your game',
      })
    },
  })
}

export default useStartNewGame
