import { updatePlayerScore } from '@/api/PlayerService'
import useSnackbar from '@/hooks/useSnackbar'
import { useMutation, useQueryClient } from 'react-query'

function useUpdatePlayerScore() {
  const { openSnackbar } = useSnackbar()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updatePlayerScore,

    onSuccess: async (_data, { playerId }) => {
      queryClient.invalidateQueries(['players', playerId])
      await queryClient.invalidateQueries(['games'])
    },

    onError: () => {
      openSnackbar({
        type: 'error',
      })
    },
  })
}

export default useUpdatePlayerScore
