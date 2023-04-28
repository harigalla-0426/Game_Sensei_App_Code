import React from 'react'
import { useState, useEffect } from 'react'
import { Autocomplete, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { searchGames } from '../../services/gamesApi'

function UserSearch() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/game/${selectedGame?._id}`)
  }

  const [selectedGame, setSelectedGame] = useState(null)
  const [gameList, setGameList] = useState([])

  useEffect(() => {
    async function fetchGames() {
      const data = await searchGames()
      setGameList(data)
    }

    fetchGames()
  }, [])

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 mb-20">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <Autocomplete
                freeSolo
                options={gameList}
                getOptionLabel={(option) => option.Name}
                value={selectedGame}
                sx={{
                  backgroundColor: '#d8e4e6',
                }}
                onChange={(event, newValue) => {
                  setSelectedGame(newValue)
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search Games"
                    variant="outlined"
                    fullWidth
                  />
                )}
              />
              <button
                type="submit"
                className="absolute top-1 right-0 rounded-l-none w-36 btn btn-md"
              >
                GO
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserSearch
