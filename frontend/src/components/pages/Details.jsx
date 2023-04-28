import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import ScoreSharpIcon from '@mui/icons-material/ScoreSharp'
import '../../Dash.css'
import DetailChart from '../../charts/column'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getGameDetail } from '../../services/gamesApi'

export default function Details() {
  const { id } = useParams()
  const [gameDetail, setGameDetail] = React.useState([])

  useEffect(() => {
    fetchData(id)
  }, [])

  const fetchData = async (id) => {
    const data = await getGameDetail(id)

    setGameDetail(data)
  }

  //   console.log(data)
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h2" className="text-center" sx={{ mb: 8 }}>
        {gameDetail.Name}
      </Typography>
      {gameDetail.length !== 0 ? (
        <Grid container spacing={2}>
          <Grid
            item
            xs={8}
            sx={{
              backgroundImage: `url(${
                gameDetail?.imageLink === 'No Image Available!'
                  ? 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
                  : gameDetail.imageLink
              })`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={4}>
            <Stack spacing={2}>
              <Card sx={{ height: '9vh' }} className="gradinet">
                <Stack spacing={2} direction="row">
                  <div className="iconstyle">
                    <SportsEsportsIcon />
                  </div>
                  <div className="paddingall">
                    <span className="pricesubtitle">Publisher</span>
                    <br />
                    <span className="pricetitle">{gameDetail.Publisher}</span>
                  </div>
                </Stack>
              </Card>
              <Card sx={{ height: '9vh' }} className="gradinetlight">
                <Stack spacing={2} direction="row">
                  <div className="iconstyle">
                    <SportsEsportsIcon />
                  </div>
                  <div className="paddingall">
                    <span className="pricesubtitle">Platform</span>
                    <br />
                    <span className="pricetitle">{gameDetail.Platform}</span>
                  </div>
                </Stack>
              </Card>
              <Card sx={{ height: '9vh' }} className="gradinetdark">
                <Stack spacing={2} direction="row">
                  <div className="iconstyle">
                    <SportsEsportsIcon />
                  </div>
                  <div className="paddingall">
                    <span className="pricesubtitle">Year of Release</span>
                    <br />
                    <span className="pricetitle">
                      {gameDetail.Year_of_Release}
                    </span>
                  </div>
                </Stack>
              </Card>
              <Stack spacing={2} direction="row">
                <Card sx={{ minWidth: '49%' }} className="gradinet">
                  <CardContent>
                    <div className="iconstyle1">
                      <ScoreSharpIcon />
                    </div>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: '#ffffff' }}
                    >
                      {gameDetail.User_Score}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ color: '#ccd1d1' }}
                    >
                      User Rating
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: '49%' }} className="gradinetlight">
                  <CardContent>
                    <div className="iconstyle1">
                      {' '}
                      <ScoreSharpIcon />
                    </div>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: '#ffffff' }}
                    >
                      {gameDetail.Critic_Score}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ color: '#ccd1d1' }}
                    >
                      Critic Rating
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
              <Card sx={{ height: '9vh' }} className="gradinetbottom">
                <Stack spacing={2} direction="row">
                  <div className="iconstyle">
                    <SportsEsportsIcon />
                  </div>
                  <div className="paddingall">
                    <span className="pricesubtitle">Genre</span>
                    <br />
                    <span className="pricetitle">{gameDetail.Genre}</span>
                  </div>
                </Stack>
              </Card>
            </Stack>
          </Grid>
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: '60vh' }}>
                <CardContent>
                  <DetailChart chartData={gameDetail} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={3}>
          {Array.from(Array(10)).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Skeleton variant="rectangular" height={250} />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  )
}
