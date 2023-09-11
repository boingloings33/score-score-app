import { createContext, ReactNode, useContext, useState } from 'react'

import EndGameDialog from '@/components/dialogs/EndGameDialog'
import ExitGameDialog from '@/components/dialogs/ExitGameDialog'
import SearchDialog, {
  SearchDialogProps,
} from '@/components/dialogs/SearchDialog'
import useDialogState from '@/hooks/useDialogState'
import EditUserDialog from '@/components/dialogs/EditUserDialog'

export interface IDialogsContext {
  openEndGameDialog: (gameId: number) => void
  openExitGameDialog: () => void
  openEditUserDialog: () => void
  openSearchDialog: (newDialogState: SearchDialogProps) => void
}

const DialogsContext = createContext({} as IDialogsContext)

function DialogsContextProvider({ children }: { children: ReactNode }) {
  // End Game
  const [gameIdToEnd, setGameIdToEnd] = useState<number | null>(null)
  const isEndGameDialogOpen = Boolean(gameIdToEnd)
  function openEndGameDialog(gameId: number) {
    setGameIdToEnd(gameId)
  }
  function closeEndGameDialog() {
    setGameIdToEnd(null)
  }

  // Exit Game (leave early)
  const [isExitGameDialogOpen, setIsExitGameDialogOpen] =
    useState<boolean>(false)
  function openExitGameDialog() {
    setIsExitGameDialogOpen(true)
  }
  function closeExitGameDialog() {
    setIsExitGameDialogOpen(false)
  }

  // Edit user
  const [isEditUserDialogOpen, setIsEditUserDialogOpen] =
    useState<boolean>(false)
  function openEditUserDialog() {
    setIsEditUserDialogOpen(true)
  }
  function closeEditUserDialog() {
    setIsEditUserDialogOpen(false)
  }

  const {
    openDialog: openSearchDialog,
    closeDialog: closeSearchDialog,
    open: isSearchDialogOpen,
    onUserClicked,
  } = useDialogState<SearchDialogProps>({
    open: false,
    onClose: () => {},
    onUserClicked: () => {},
  })

  return (
    <DialogsContext.Provider
      value={{
        openEndGameDialog,
        openExitGameDialog,
        openEditUserDialog,
        openSearchDialog,
      }}
    >
      {children}

      {gameIdToEnd && (
        <EndGameDialog
          open={isEndGameDialogOpen}
          onClose={closeEndGameDialog}
          gameId={gameIdToEnd}
        />
      )}

      {isExitGameDialogOpen && (
        <ExitGameDialog
          open={isExitGameDialogOpen}
          onClose={closeExitGameDialog}
        />
      )}

      {isEditUserDialogOpen && (
        <EditUserDialog
          open={isEditUserDialogOpen}
          onClose={closeEditUserDialog}
        />
      )}

      {isSearchDialogOpen && (
        <SearchDialog
          open={isSearchDialogOpen}
          onClose={closeSearchDialog}
          onUserClicked={onUserClicked}
        />
      )}
    </DialogsContext.Provider>
  )
}

function useDialogsContext() {
  const dialogContext = useContext(DialogsContext)
  if (dialogContext === undefined) {
    throw new Error('useDialogContext must be used within a DialogProvider')
  }
  return dialogContext
}

export { DialogsContextProvider, useDialogsContext }
