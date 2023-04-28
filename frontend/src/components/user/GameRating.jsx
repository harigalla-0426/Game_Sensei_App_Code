import React from 'react'
import { Rating, Typography } from '@mui/material'

function GameRating({ rating }) {
  return (
    <>
      <Rating
        name="half-rating"
        defaultValue={rating / 10}
        precision={0.2}
        max={10}
        readOnly
        size="small"
      />
      <Typography>{rating / 10}</Typography>
    </>
  )
}

export default GameRating
