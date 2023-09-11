import { ReactNode, createContext, useContext, useState } from 'react'

interface PlayerSelectContextType {
  player1: {
    id: number
    guestName?: string
  }
  player2: {
    id: number
    guestName?: string
  }
}

const PlayerSelectContext = createContext<PlayerSelectContextType>({
  player1: {
    id: 1,
    guestName: undefined,
  },
  player2: {
    id: 1,
    guestName: undefined,
  },
})

function PlayerSelectProvider({ children }: { children: ReactNode }) {
  return <>adsf</>
  // return (
  //   <PlayerSelectContext.Provider
  //     value={{
  //     }}
  //   >
  //     {children}
  //   </PlayerSelectContext.Provider>
  // )
}

function usePlayerSelectContext() {
  const playerSelectContext = useContext(PlayerSelectContext)
  return playerSelectContext
}
export { PlayerSelectProvider, usePlayerSelectContext }
