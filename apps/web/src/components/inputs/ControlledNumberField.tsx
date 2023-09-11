import theme from '@/theme'
import { Stack, TextField, TextFieldProps, Typography } from '@mui/material'
import { isEmpty } from 'lodash'
import {
  Control,
  Controller,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form'

// Requirements
// 1) the input has to control a number not a string
// 2) the text input should not display the up/down arrows (use type=text)
// 3) the text input should open up the number pad
// 4) as the developer, should have the ability to allow decimals or not

/**
 * This is not reusing the Controlled Text Field component
 * and passing the differing values as TextFieldProps
 * because the onChange value must be defined in the context
 * of th Controller component.
 * */

export interface ControlledNumberFieldProps<FieldValueProps extends FieldValues>
  extends UseControllerProps<FieldValueProps> {
  control: Control<FieldValueProps>
  label?: string
  placeholder?: string
  required?: boolean
  autoFocus?: boolean
  allowDecimals?: boolean
  maxCharCount?: number
  fullWidth?: boolean
  TextFieldProps?: Omit<TextFieldProps, 'placeholder' | 'label'>
}

function ControlledNumberField<FieldValueProps extends FieldValues>({
  control,
  name,
  label,
  placeholder = '',
  required = false,
  autoFocus = false,
  allowDecimals = false,
  fullWidth = false,
  maxCharCount,
  TextFieldProps = {},
}: ControlledNumberFieldProps<FieldValueProps>) {
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
          required={required}
          autoFocus={autoFocus}
          placeholder={placeholder}
          label={label}
          {...field}
          value={field.value === null ? '' : String(field.value)}
          fullWidth={fullWidth}
          type={allowDecimals ? 'number' : 'text'}
          // InputLabelProps={{
          //   color: 'secondary',
          // }}
          helperText={
            <Stack direction="row" justifyContent="space-between" spacing={1}>
              {(error?.type !== 'max' || !maxCharCount) && (
                <Typography variant="caption">
                  {error?.message ?? ''}
                </Typography>
              )}

              {/* {maxCharCount && (
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
              )} */}
            </Stack>
          }
          sx={{
            '& input::-webkit-inner-spin-button, & input::-webkit-outer-spin-button':
              {
                '-webkit-appearance': 'none',
                margin: 0,
              },
            '& input[type="number"]': {
              '-moz-appearance': 'textfield',
            },
            '& .MuiInputLabel-root': {
              color: `${theme.palette.secondary.dark} !important`,
            },
          }}
          onKeyDown={(e) => {
            const invalidCharacters = ['e', 'E', '+', '-']
            invalidCharacters.includes(e.key) && e.preventDefault()
          }}
          onChange={(e) => {
            const numericValue = e.target.value.replace(
              allowDecimals ? /[^0-9.]/g : /[^0-9]/g,
              ''
            )
            if (numericValue === '') {
              field.onChange(null)
            } else {
              field.onChange(Number(numericValue))
            }
          }}
          onWheel={(e) => {
            const input = e.target as HTMLInputElement
            if (input) {
              input.blur()
              e.stopPropagation()
              setTimeout(() => {
                input.focus()
              }, 0)
            }
          }}
          inputProps={{
            inputMode: allowDecimals ? 'decimal' : 'numeric',
          }}
          {...TextFieldProps}
        />
      )}
    />
  )
}

export default ControlledNumberField
