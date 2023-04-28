import React, { useEffect } from 'react'
import { useContext } from 'react'
import GameContext from '../context/GameContext'
import GameRating from './GameRating'
import GameCarousel2 from './GameCarousel2'
import { useNavigate } from 'react-router-dom'
import { Typography, Rating } from '@mui/material'
import { getHomeGames } from '../../services/gamesApi'
import noimg from '../images/noimg.png'

function GameResults() {
  const { sampleData, setSampleData, login, landing } = useContext(GameContext)

  useEffect(() => {
    fetchData()
  }, [landing])

  const fetchData = async () => {
    const data = await getHomeGames()
    setSampleData(data)
  }

  const navigate = useNavigate()
  const handleClick = (id) => {
    console.log('clicked', id)
    navigate(`/game/${id}`)
  }

  return (
    <>
      <Typography variant="h2" className="text-center" sx={{ my: 2 }}>
        Top Rated Games
      </Typography>
      {login && <GameCarousel2 />}
      {landing && (
        <div className="grid grid-cols-1 gap-20 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {sampleData.map((i) => (
            <div
              className="transform  transition duration-500 hover:scale-125 hover: flex justify-center items-center"
              key={i._id}
              onClick={() => handleClick(i._id)}
            >
              <div className="card-body bg-neutral rounded p-4 justify-center">
                <div className="card-title font-bold justify-center">
                  {i.Name}
                </div>
                <div className="flex flex-col items-center ">
                  {/* <div className="bg-no-repeat bg-center" style={{'backgroundImage':`url(${i.imageLink})`}}>
            </div> */}
                  <div className="bg-auto md-4 flex-grow ">
                    {i.imageLink === 'No Image Available!' ? (
                      <img src={noimg} alt="game" className="bg-auto" />
                    ) : (
                      <img src={i.imageLink} alt="game" className="bg-auto" />
                    )}
                  </div>
                  <div className="flex flex-col justify-between m-2 ">
                    <div className="platform">
                      <div className="font-bold">Platform:{i.Platform}</div>
                    </div>
                    <div className="year">
                      <div className="font-bold">
                        Year of Release : {i.Year_of_Release}
                      </div>
                    </div>
                  </div>
                  <div className="rating mt-1">
                    <GameRating rating={i.Critic_Score} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default GameResults
