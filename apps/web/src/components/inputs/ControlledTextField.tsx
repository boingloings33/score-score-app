import { Stack, TextField, Typography } from '@mui/material'
import { TextFieldProps } from '@mui/material/TextField'
import { isEmpty } from 'lodash'
import { ReactElement } from 'react'
import {
  Controller,
  UseControllerProps,
  FieldValues,
  Control,
} from 'react-hook-form'

export interface ControlledTextFieldProps<FieldValueProps extends FieldValues>
  extends UseControllerProps<FieldValueProps> {
  control: Control<FieldValueProps>
  label?: string
  required?: boolean
  autoFocus?: boolean
  maxCharCount?: number
  placeholder?: string
  TextFieldProps?: Omit<TextFieldProps, 'required' | 'placeholder' | 'label'>
}

function ControlledTextField<FieldValueProps extends FieldValues>({
  control,
  name,
  label,
  required = false,
  autoFocus = false,
  maxCharCount,
  placeholder = '',
  TextFieldProps = {},
}: ControlledTextFieldProps<FieldValueProps>) {
  return (
    <Controller<FieldValueProps>
      control={control}
      name={name}
      render={({
        fieldState: { error },
        field, // { onChange, onBlur, value, ref },
      }) => (
        <TextField
          error={!isEmpty(error)}
          id={name}
          required={required}
          autoFocus={autoFocus}
          placeholder={placeholder}
          label={label}
          {...field} // { onChange, onBlur, value, ref }
          helperText={
            <Stack direction="row" justifyContent="space-between" spacing={1}>
              {(error?.type !== 'max' || !maxCharCount) && (
                <Typography variant="caption">
                  {error?.message ?? ''}
                </Typography>
              )}

              {maxCharCount && (
                <Typography
                  variant="caption"
                  sx={{
                    flexGrow: 1,
                    whiteSpace: 'nowrap',
                    textAlign: 'right',
                  }}
                >
                  {`Character Count: ${field.value.length} / ${maxCharCount}`}
                </Typography>
              )}
            </Stack>
          }
          {...TextFieldProps}
          InputProps={{ ...TextFieldProps.InputProps }}
          FormHelperTextProps={{
            ...TextFieldProps.FormHelperTextProps,

            sx: {
              mx: 0,
              ...TextFieldProps.FormHelperTextProps?.sx,
            },
          }}
        />
      )}
    />
  )
}

export default ControlledTextField
