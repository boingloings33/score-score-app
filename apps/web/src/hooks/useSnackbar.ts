import { useDeepCompareMemo } from 'use-deep-compare'

import { ISnackbarContext, useSnackbarContext } from '@/contexts/Snackbar'

function useSnackbar(): ISnackbarContext {
  const { snackbar, openSnackbar } = useSnackbarContext()
  return useDeepCompareMemo(() => {
    return {
      snackbar,
      openSnackbar,
    }
  }, [snackbar])
}

export default useSnackbar
