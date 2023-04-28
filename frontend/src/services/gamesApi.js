import axios from 'axios'

const getHomeGames = async () => {
  try {
    const { data } = await axios.get('http://localhost:7077/home')

    return data
  } catch (error) {
    console.log('Error occured!', error)
  }
}

const getGameDetail = async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:7077/game/${id}`)

    return data
  } catch (error) {
    console.log('Error occured!', error)
  }
}

const searchGames = async () => {
  try {
    const { data } = await axios.get('http://localhost:7077/search')

    return data
  } catch (error) {
    console.log('Error occured!', error)
  }
}

export { getHomeGames, getGameDetail, searchGames }
