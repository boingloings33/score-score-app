import { createContext, ReactNode, useContext } from 'react'
import { Game } from 'shared/types/models'

type IGameContext = Game

const GameContext = createContext<IGameContext>({} as IGameContext)

interface GameProviderProps {
  children: ReactNode
  game: Game
}

function GameProvider({ game, children }: GameProviderProps) {
  return <GameContext.Provider value={game}>{children}</GameContext.Provider>
}

function useGameContext(): IGameContext {
  const gameContext = useContext(GameContext)
  if (gameContext === undefined) {
    throw new Error('useGameContext must be used within a GameProvider')
  }
  return gameContext
}

export { GameProvider, useGameContext }
