import { zodResolver } from '@hookform/resolvers/zod'
import { LoadingButton } from '@mui/lab'
import { Box, Stack } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import ControlledPassword from '@/components/inputs/ControlledPassword'
import ControlledTextField from '@/components/inputs/ControlledTextField'
import useAuth from '@/hooks/api/users/useAuth'

const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
})

export interface LoginFields {
  username: string
  password: string
}

const LoginForm = () => {
  const { mutateAsync: login, isLoading } = useAuth()
  const navigate = useNavigate()

  const { control, handleSubmit } = useForm<LoginFields>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (loginValues: LoginFields) => {
    login(loginValues).then(() => {
      navigate('/')
      window.location.reload()
    })
  }

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)} spacing={4}>
      <Stack spacing={2}>
        <ControlledTextField<LoginFields>
          control={control}
          name="username"
          label="Username"
        />
        <ControlledPassword<LoginFields>
          control={control}
          name="password"
          label="Password"
        />
      </Stack>

      <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
        <LoadingButton
          variant="contained"
          fullWidth
          size="large"
          type="submit"
          loading={isLoading}
        >
          Log In
        </LoadingButton>
      </Box>
    </Stack>
  )
}

export default LoginForm
