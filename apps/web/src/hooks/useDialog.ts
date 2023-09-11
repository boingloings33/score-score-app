import { useDeepCompareMemo } from 'use-deep-compare'

import { IDialogsContext, useDialogsContext } from '@/contexts/Dialogs'

function useDialog(): IDialogsContext {
  const dialogContext = useDialogsContext()
  return useDeepCompareMemo(() => {
    return dialogContext
  }, [dialogContext])
}

export default useDialog
