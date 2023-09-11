import { DialogProps } from '@/components/dialogs'
import { useState } from 'react'

function useDialogState<TDialogProps extends DialogProps = DialogProps>(
  initialState: TDialogProps
) {
  if (initialState.open === undefined) {
    initialState.open = false
  }
  if (!initialState.onClose) {
    initialState.onClose = () => {}
  }

  const [dialogState, setDialogState] = useState<TDialogProps>(initialState)

  function openDialog(newDialogState: TDialogProps) {
    setDialogState({ ...newDialogState, open: true })
  }

  function closeDialog() {
    setDialogState((currentState) => ({ ...currentState, open: false }))
  }

  return { ...dialogState, openDialog, closeDialog }
}

export default useDialogState
