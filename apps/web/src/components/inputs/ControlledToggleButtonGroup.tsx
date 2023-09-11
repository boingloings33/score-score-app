import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { ToggleButton } from '@mui/material'
import {
  Control,
  Controller,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form'
import { Option } from '.'

export interface ControlledToggleButtonGroupProps<
  FieldValueProps extends FieldValues
> extends UseControllerProps<FieldValueProps> {
  control: Control<FieldValueProps>
  options: Option[]
  fullWidth?: boolean
}

function ControlledToggleButtonGroup<FieldValueProps extends FieldValues>({
  control,
  options,
  name,
  fullWidth,
}: ControlledToggleButtonGroupProps<FieldValueProps>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field, // { onChange, onBlur, value, ref },
      }) => (
        <ToggleButtonGroup
          exclusive
          fullWidth={fullWidth}
          {...field}
          onChange={(_event, newValue) => {
            newValue && field.onChange(newValue)
          }}
        >
          {options.map((option) => (
            <ToggleButton
              key={String(option.value)}
              value={option.value}
              disableRipple
              aria-label="left aligned"
            >
              {option.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      )}
    />
  )
}

export default ControlledToggleButtonGroup
