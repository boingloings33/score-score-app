import { useContext, useState } from 'react'
import { Box, Button, Typography, TextField, IconButton } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { useWizardContext } from '@/components/wizard/Wizard'
import { usePlayerSelectContext } from '@/contexts/PlayerSelect'
import { useForm, useFormContext } from 'react-hook-form'
import { StartGameFormFields } from '@/components/forms/startGame/StartGameForm'
import ControlledTextField from '@/components/inputs/ControlledTextField'
import EnterGuestNameForm from '@/components/forms/startGame/EnterGuestNameForm'

interface CreateGuestSlideProps {
  handleClose: () => void
  onGuestNameSelected: (guestName: string) => void
}

export default function CreateGuestSlide({
  handleClose,
  onGuestNameSelected,
}: CreateGuestSlideProps) {
  const { stepBack } = useWizardContext()

  function handleBackClick() {
    stepBack && stepBack()
  }

  function handleGuestNameSelected(guestName: string) {
    onGuestNameSelected(guestName)
    handleClose()
  }

  return (
    <Box>
      <Box sx={{ position: 'relative', mb: 4, px: 4, pt: '4px' }}>
        <IconButton
          onClick={handleBackClick}
          sx={{
            position: 'absolute',
            p: 0,
            top: '0',
            left: '0',
          }}
        >
          <ChevronLeftIcon
            sx={{
              fontSize: 48,
              color: 'secondary.main',
              '&:hover': {
                cursor: 'pointer',
              },
            }}
          />
        </IconButton>

        <Typography variant="h3" textAlign="center">
          Create a Guest User
        </Typography>
      </Box>

      <EnterGuestNameForm onGuestNameSelected={handleGuestNameSelected} />
    </Box>
  )
}
