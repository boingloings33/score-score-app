import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
} from 'react'
import { useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from 'react-use'

interface AuthContextInterface {
  authenticated: boolean
  setAuthenticated: Dispatch<SetStateAction<boolean | undefined>>
  logout: () => void
}

const AuthContext = createContext({} as AuthContextInterface)
export default AuthContext

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const [authenticated, setAuthenticated, removeAuthenticated] =
    useLocalStorage<boolean | undefined>('authenticated', false, { raw: true })

  const logout = async () => {
    removeAuthenticated()
    queryClient.clear()
    navigate('/login')
  }

  return (
    <AuthContext.Provider
      value={{
        authenticated: authenticated || false,
        setAuthenticated,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuthContext() {
  const appContext = useContext(AuthContext)
  if (appContext === undefined) {
    throw new Error('useAppContext must be used within an AuthProvider')
  }
  return appContext
}

export { AuthProvider, useAuthContext }
