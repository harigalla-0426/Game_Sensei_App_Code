import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import batman from '../images/batman.jpg'
import dbd from '../images/dbd.jpg'
import poster from '../images/games1.avif'
import gta5 from '../images/gta5.jpg'
import nfs from '../images/nfs.webp'
import rocket_league from '../images/rocket_league.jpeg'

function GameCarousel2() {
  return (
    <Carousel
      showIndicators={true}
      autoPlay={true}
      interval={2000}
      infiniteLoop={true}
      showThumbs={true}
      dynamicHeight={true}
      emulateTouch={true}
    >
      <div>
        <img src={gta5} alt="Grand Theft Auto V" />
      </div>
      <div>
        <img src={batman} alt="Batman" />
      </div>
      <div>
        <img src={poster} alt="Games poster" />
      </div>
      <div>
        <img src={dbd} alt="Dead by Daylight" />
      </div>
      <div>
        <img src={nfs} alt="Need for Speed" />
      </div>
      <div>
        <img src={rocket_league} alt="Rocket League" />
      </div>
    </Carousel>
  )
}

export default GameCarousel2
