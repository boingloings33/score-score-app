import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { IconButton, InputAdornment } from '@mui/material'
import {
  ForwardedRef,
  forwardRef,
  MutableRefObject,
  useImperativeHandle,
  useState,
} from 'react'
import { FieldValues } from 'react-hook-form'

import ControlledTextField, {
  ControlledTextFieldProps,
} from '@/components/inputs/ControlledTextField'

export interface VisibilityChanger {
  toggleVisibility: (visibility?: boolean) => void
}

export type ControlledPasswordProps<FieldValueProps extends FieldValues> = Pick<
  ControlledTextFieldProps<FieldValueProps>,
  'control' | 'name' | 'label' | 'TextFieldProps'
> & {
  onVisibilityChanged?: (visibility: boolean) => void
}

const ControlledPassword = forwardRef(function ControlledPassword<
  FieldValueProps extends FieldValues
>(
  {
    control,
    name,
    label,
    TextFieldProps = {},
    onVisibilityChanged,
  }: ControlledPasswordProps<FieldValueProps>,
  ref?: ForwardedRef<VisibilityChanger | undefined>
) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  function toggleVisibility(visibility?: boolean) {
    if (visibility === undefined) {
      setIsPasswordVisible((currentValue) => !currentValue)
    } else {
      setIsPasswordVisible(visibility)
    }
  }

  useImperativeHandle(
    ref,
    () => ({
      toggleVisibility,
    }),
    []
  )

  function handleEyeIconClicked() {
    setIsPasswordVisible(!isPasswordVisible)

    onVisibilityChanged && onVisibilityChanged(!isPasswordVisible)
  }

  return (
    <ControlledTextField<FieldValueProps>
      name={name}
      control={control}
      label={label}
      placeholder="Password"
      TextFieldProps={{
        ...TextFieldProps,
        InputProps: {
          type: isPasswordVisible ? 'text' : 'password',
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleEyeIconClicked}
                edge="end"
              >
                {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
          ...TextFieldProps.InputProps,
        },
      }}
    />
  )
})

// this export ts tells a parent component when it is used, that the ref property should be a ref object
// but when the function above is defined, we use forwardRef and the ref param is a ForwardedRef object
// idk why the ts sucks, it just does
export default ControlledPassword as <FieldValueProps extends FieldValues>(
  props: ControlledPasswordProps<FieldValueProps> & {
    ref?: MutableRefObject<VisibilityChanger | undefined>
  }
) => JSX.Element
