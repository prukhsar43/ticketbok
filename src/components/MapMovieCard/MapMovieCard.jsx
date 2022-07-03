import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../MovieCard/MovieCard'

const MapMovieCard = () => {

  const movie = useSelector(ele => ele.movie.movie)

  return (
    <>
      {movie.map((ele, i) => {
        return (
          <MovieCard ele={ele} key={i} />
        )
      })}
    </>
  )
}

export default MapMovieCard
