import { auth } from '@/api/UserService'
import { LoginFields } from '@/components/forms/LoginForm'
import { useAuthContext } from '@/contexts/Auth'
import useSnackbar from '@/hooks/useSnackbar'
import { useMutation } from 'react-query'

function useAuth() {
  const { openSnackbar } = useSnackbar()
  const { setAuthenticated } = useAuthContext()

  return useMutation({
    mutationFn: ({ username, password }: LoginFields) =>
      auth(username, password),
    onSuccess: () => {
      setAuthenticated(true)
    },
    onError: () => {
      openSnackbar({
        type: 'error',
      })
    },
  })
}

export default useAuth
