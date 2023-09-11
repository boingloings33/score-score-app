import {
  Box,
  MenuItem,
  styled,
  Select,
  Typography,
  CircularProgress,
} from '@mui/material'

import InputBase from '@mui/material/InputBase'
import useListPlayableGames from '@/hooks/api/playableGames/useListPlayableGames'
import {
  Control,
  Controller,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form'
import { Option } from '.'
import { isEmpty } from 'lodash'
import PlayableGameIcon from '@/components/PlayableGameIcon'
import { Icon } from 'shared/types/models'

const StyledInput = styled(InputBase)(({ theme }) => ({
  '&': {
    width: '100%',
  },
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiSelect-select': {
    paddingRight: theme.spacing(3),
    '&:focus': {
      backgroundColor: theme.palette.secondary.dark,
      borderRadius: '4px',
    },
  },
  '& .MuiSelect-icon': {
    color: theme.palette.background.paper,
  },
  '& .MuiInputBase-input': {
    width: '100%',
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.secondary.dark,
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(1),
  },
  '& .MuiTypography-root': {
    ...theme.typography.h5,
  },
}))

interface CustomizedSelectsProps<FieldValueProps extends FieldValues>
  extends UseControllerProps<FieldValueProps> {
  control: Control<FieldValueProps>
  label?: string
  fullWidth?: boolean
  disabled?: boolean
}

function ControlledGameSelect<FieldValueProps extends FieldValues>({
  control,
  name,
  fullWidth,
  disabled,
}: CustomizedSelectsProps<FieldValueProps>) {
  const { data: playableGames, isLoading } = useListPlayableGames()

  const options: (Option & { icon: Icon })[] =
    playableGames?.map((game) => ({
      label: game.name,
      value: game.id,
      icon: game.icon,
    })) || []

  if (isLoading) {
    return <CircularProgress />
  } else if (playableGames) {
    return (
      <Controller<FieldValueProps>
        control={control}
        name={name}
        render={({
          fieldState: { error },
          field, // { onChange, onBlur, value, ref },
        }) => (
          <Select
            {...field}
            error={!isEmpty(error)}
            disabled={disabled}
            fullWidth={fullWidth}
            input={<StyledInput />}
          >
            {options.map(({ label, value, icon }) => (
              <MenuItem key={value} value={value}>
                <PlayableGameIcon icon={icon} size="small" />

                <Typography
                  variant="body1"
                  textTransform="capitalize"
                  sx={{ ml: 2 }}
                >
                  {label}
                </Typography>
              </MenuItem>
            ))}
          </Select>
        )}
      />
    )
  } else {
    return (
      <Typography>
        There was a problem loading the games. Please refresh the page.
      </Typography>
    )
  }
}

export default ControlledGameSelect
