import { ReactNode } from 'react'

interface DialogProps {
  open: boolean
  onClose: (...args: any) => unknown
  children?: ReactNode
}

interface AsyncDialogProps<TResolveType> extends Omit<DialogProps, 'onClose'> {
  resolve: ((payload: TResolveType) => void) | null
  reject: (() => void) | null
  isResolving: boolean
}

export type { DialogProps, AsyncDialogProps }
