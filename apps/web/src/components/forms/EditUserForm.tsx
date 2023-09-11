import ControlledTextField from '@/components/inputs/ControlledTextField'
import useUpdateUser from '@/hooks/api/users/useUpdateUser'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoadingButton } from '@mui/lab'
import { Stack, Box, IconButton, useTheme, Avatar } from '@mui/material'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import EditIcon from '@mui/icons-material/Edit'

const editUserFormSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  profilePic: z.string().optional(),
})

interface EditUserFormFields {
  firstName: string
  lastName: string
  profilePic?: string
}

interface EditUserFormProps {
  userId: number
  firstName?: string | null
  lastName?: string | null
  profilePic?: string | null

  onUserUpdated: () => void
}

function EditUserForm({
  userId,
  firstName,
  lastName,
  profilePic,
  onUserUpdated,
}: EditUserFormProps) {
  const theme = useTheme()

  const { mutateAsync: updateUser, isLoading } = useUpdateUser()

  const defaultValues: EditUserFormFields = {
    firstName: firstName || '',
    lastName: lastName || '',
    profilePic: '',
  }

  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty, isValid },
  } = useForm<EditUserFormFields>({
    mode: 'onChange',
    defaultValues: defaultValues,
    resolver: zodResolver(editUserFormSchema),
  })

  const onSubmit = (data: EditUserFormFields) => {
    updateUser({ userId, ...data }).finally(onUserUpdated)
  }

  useEffect(() => {
    reset(defaultValues)
  }, [firstName, lastName, profilePic])

  return (
    <Stack sx={{ mt: 8 }} component="form" onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          margin: 'auto',
          mb: 4,
        }}
      >
        <Avatar
          sx={{
            width: '120px',
            height: '120px',
            backgroundColor: theme.palette.secondary.main,
          }}
          alt=""
          src={profilePic || ''}
        />
        <IconButton
          sx={{
            position: 'absolute',
            bottom: -7,
            right: -7,
            backgroundColor: 'primary.light',
            color: 'primary.contrastText',
          }}
          aria-label="Edit"
        >
          <EditIcon />
        </IconButton>
      </Box>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <ControlledTextField<EditUserFormFields>
          control={control}
          name="firstName"
          label="First Name"
          TextFieldProps={{
            InputLabelProps: {
              sx: {
                color: theme.palette.text.primary,
              },
            },
          }}
        />
        <ControlledTextField<EditUserFormFields>
          control={control}
          name="lastName"
          label="Last Name"
          TextFieldProps={{
            InputLabelProps: {
              sx: {
                color: theme.palette.text.primary,
              },
            },
          }}
        />
      </Box>

      <LoadingButton
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        loading={isLoading}
        disabled={!isDirty || !isValid}
        sx={{ textTransform: 'none', mt: 5 }}
      >
        Save Changes
      </LoadingButton>
    </Stack>
  )
}

export default EditUserForm
