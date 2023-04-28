import axios from 'axios'

const baseURI =
  import.meta.env.VITE_APP_ENVIROMENT === 'DEV'
    ? import.meta.env.VITE_LOCAL_URL
    : import.meta.env.VITE_PUBLIC_URL

const getHomeGames = async () => {
  try {
    const { data } = await axios.get(`${baseURI}home`)

    return data
  } catch (error) {
    console.log('Error occured!', error)
  }
}

const getGameDetail = async (id) => {
  try {
    const { data } = await axios.get(`${baseURI}game/${id}`)

    return data
  } catch (error) {
    console.log('Error occured!', error)
  }
}

const searchGames = async () => {
  try {
    const { data } = await axios.get(`${baseURI}search`)

    return data
  } catch (error) {
    console.log('Error occured!', error)
  }
}

export { getHomeGames, getGameDetail, searchGames }
