import { zodResolver } from '@hookform/resolvers/zod'
import { LoadingButton } from '@mui/lab'
import { Box, Stack } from '@mui/material'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { User, passwordSchema } from 'shared/types/models'
import { z } from 'zod'

import ControlledPassword, {
  VisibilityChanger,
} from '@/components/inputs/ControlledPassword'
import ControlledTextField from '@/components/inputs/ControlledTextField'
import useCreateUser from '@/hooks/api/users/useCreateUser'

const newUserSchema = z
  .object({
    username: z.string(),
    password: passwordSchema,
    confirmPassword: z.string(),
    firstName: z.string(),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (confirmPassword && password !== confirmPassword) {
      ctx.addIssue({
        code: 'custom',
        message: 'Your passwords do not match',
        path: ['confirmPassword'],
      })
    }
  })

export interface NewUserFields extends Pick<User, 'username' | 'firstName'> {
  password: string
  confirmPassword: string
}

const NewUserForm = () => {
  const { mutateAsync: createUser, isLoading } = useCreateUser()
  const navigate = useNavigate()

  const passwordRef = useRef<VisibilityChanger>()
  const confirmPasswordRef = useRef<VisibilityChanger>()

  const { control, handleSubmit } = useForm<NewUserFields>({
    mode: 'onChange',
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
      firstName: '',
    },
    resolver: zodResolver(newUserSchema),
  })

  const onSubmit = (newUser: NewUserFields) => {
    createUser(newUser).then(() => {
      navigate('/')
      window.location.reload()
    })
  }

  function handlePasswordVisibilityChange(visibility: boolean) {
    confirmPasswordRef.current?.toggleVisibility(visibility)
    passwordRef.current?.toggleVisibility(visibility)
  }

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)} spacing={4}>
      <Stack spacing={2}>
        <ControlledTextField<NewUserFields>
          control={control}
          name="username"
          label="Create Username"
        />
        <ControlledPassword<NewUserFields>
          control={control}
          name="password"
          label="Create Password"
          onVisibilityChanged={handlePasswordVisibilityChange}
        />
        <ControlledPassword<NewUserFields>
          control={control}
          name="confirmPassword"
          label="Confirm Password"
          ref={confirmPasswordRef}
          onVisibilityChanged={handlePasswordVisibilityChange}
        />
      </Stack>

      <LoadingButton
        variant="contained"
        fullWidth
        size="large"
        type="submit"
        loading={isLoading}
      >
        Create Account
      </LoadingButton>
    </Stack>
  )
}

export default NewUserForm
