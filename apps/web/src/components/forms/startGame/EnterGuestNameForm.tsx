import { StartGameFormFields } from '@/components/forms/startGame/StartGameForm'
import ControlledTextField from '@/components/inputs/ControlledTextField'
import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Button } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

interface EnterGuestNameFormFields {
  guestName: string
}

const guestNameFormSchema = z.object({
  guestName: z.string().min(1, 'Please enter a guest name'),
})

interface EnterGuestNameFormProps {
  onGuestNameSelected: (guestName: string) => void
}

function EnterGuestNameForm({ onGuestNameSelected }: EnterGuestNameFormProps) {
  const { control, handleSubmit } = useForm<EnterGuestNameFormFields>({
    mode: 'onChange',
    defaultValues: {
      guestName: '',
    },
    resolver: zodResolver(guestNameFormSchema),
  })

  function onSubmit({ guestName }: EnterGuestNameFormFields) {
    onGuestNameSelected(guestName)
  }

  return (
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        handleSubmit(onSubmit)(e)
      }}
    >
      <ControlledTextField<EnterGuestNameFormFields>
        control={control}
        name="guestName"
      />

      <Button
        variant="contained"
        fullWidth
        type="submit"
        sx={{
          mt: 2,
        }}
      >
        Create Guest
      </Button>
    </Box>
  )
}

export default EnterGuestNameForm
