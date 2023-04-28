import { createContext, useState } from 'react'
import game1 from '../images/game1.webp'
import game2 from '../images/rocket_league.jpeg'

const GameContext = createContext()

export const GameProvider = ({ children }) => {
  const [login, setLogin] = useState(true)
  const [landing, setLanding] = useState(false)
  const [search, setSearch] = useState(false)
  const [sampleData, setSampleData] = useState([])

  return (
    <GameContext.Provider
      value={{
        sampleData,
        setSampleData,
        setLogin,
        setLanding,
        search,
        setSearch,
        login,
        landing,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export default GameContext
