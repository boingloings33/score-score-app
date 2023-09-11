import SelectPlayerCard from '@/components/forms/startGame/SelectPlayerCard'
import useStartNewGame from '@/hooks/api/games/useStartNewGame'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoadingButton } from '@mui/lab'
import { Box, Stack } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import ControlledGameSelect from '@/components/inputs/ControlledGameSelect'
import { useLocation } from 'react-router-dom'
import useSnackbar from '@/hooks/useSnackbar'

export interface StartGameFormFields {
  gamePlayedId: number // it represents the id of the game we picked
  player1: {
    id: number
    guestName?: string
  }
  player2: {
    id: number
    guestName?: string
  }
}

const startGameSchema = z.object({
  gamePlayedId: z.number().int().positive(),
  player1: z
    .object({
      id: z.number().int().positive(),
      guestName: z.string().optional(),
    })
    .superRefine(({ id, guestName }, ctx) => {
      if (guestName && id !== 1) {
        ctx.addIssue({
          code: 'custom',
          message: 'Guest users must use the guest user id.',
        })
      }
    }),
  player2: z
    .object({
      id: z.number().int().positive(),
      guestName: z.string().optional(),
    })
    .superRefine(({ id, guestName }, ctx) => {
      if (guestName && id !== 1) {
        ctx.addIssue({
          code: 'custom',
          message: 'Guest users must use the guest user id.',
        })
      }
    }),
})

interface StartGameFormProps {}

function StartGameForm({}: StartGameFormProps) {
  const { state } = useLocation()
  const selectedGameId = state?.selectedGameId || 1

  const { mutateAsync: startNewGame, isLoading } = useStartNewGame()

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { isDirty, isValid, errors, ...restOfFormState },
    ...otherFormData
  } = useForm<StartGameFormFields>({
    mode: 'onSubmit',

    defaultValues: {
      gamePlayedId: selectedGameId,
      player1: {
        id: 1,
      },
      player2: {
        id: 1,
      },
    },
    resolver: zodResolver(startGameSchema),
  })

  function onSubmit(gameData: StartGameFormFields) {
    startNewGame(gameData)
  }

  function isPlayerSelcted({
    id,
    guestName,
  }: {
    id: number
    guestName?: string
  }): boolean {
    return !(id === 1 && !guestName)
  }
  const { openSnackbar } = useSnackbar()
  const [watchedPlayer1, watchedPlayer2] = watch(['player1', 'player2'])

  const isPlayer1Selected = isPlayerSelcted(watchedPlayer1)
  const isPlayer2Selected = isPlayerSelcted(watchedPlayer2)

  // validation logic is too complicated to lean on react hook form and zod
  const bothPlayersSelected = isPlayer1Selected && isPlayer2Selected
  const duplicatUsers =
    watchedPlayer1.id !== 1 &&
    watchedPlayer2.id !== 1 &&
    watchedPlayer1.id === watchedPlayer2.id

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <FormProvider<StartGameFormFields>
        control={control}
        handleSubmit={handleSubmit}
        setValue={setValue}
        watch={watch}
        formState={{ isDirty, isValid, errors, ...restOfFormState }}
        {...otherFormData}
      >
        <Stack spacing={4}>
          <ControlledGameSelect<StartGameFormFields>
            control={control}
            name="gamePlayedId"
          />
          <SelectPlayerCard />
          <LoadingButton
            variant="contained"
            type="submit"
            fullWidth
            loading={isLoading}
            disabled={!bothPlayersSelected || duplicatUsers}
          >
            Start Game!
          </LoadingButton>
        </Stack>
      </FormProvider>
    </Box>
  )
}

export default StartGameForm
