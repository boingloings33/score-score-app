import { AsyncDialogProps } from '@/components/dialogs'
import { useState } from 'react'

function useDialogStateAsync<TResolveType, TDialogProps>(
  initialState: TDialogProps
) {
  const [dialogState, setDialogState] = useState<
    AsyncDialogProps<TResolveType> & TDialogProps
  >({
    ...initialState,
    open: false,
    isResolving: false,
    resolve: null,
    reject: null,
  })

  function openDialog() {
    const promise = new Promise<TResolveType>((resolve, reject) => {
      setDialogState((currentState) => ({
        ...currentState,
        open: true,
        isResolving: false,
        resolve,
        reject,
      }))
    })

    return promise.then<{
      setDialogState: typeof setDialogState
      closeDialog: () => void
      payload: TResolveType
    }>(
      // resolve function
      (payload: TResolveType) => {
        // update dialog state to loading
        setDialogState((currentState) => ({
          ...currentState,
          isResolving: true,
        }))

        // return a function to close the dialog after async action is done
        return {
          setDialogState,
          payload,
          closeDialog: () => {
            setDialogState((currentState) => ({
              ...currentState,
              open: false,
              isResolving: false,
            }))
          },
        }
      },
      // reject function
      () => {
        setDialogState((currentState) => ({ ...currentState, open: false }))
        throw new Error('Promise was rejected')
      }
    )
  }

  return { dialogState, openDialog }
}

export default useDialogStateAsync
