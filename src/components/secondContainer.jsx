import React from 'react'
import { MovieList } from './MovieList'
import { useSelector } from 'react-redux'

export const SecondContainer = () => {
  const movies = useSelector((store)=> store.movie)
  return (
    <>
      {movies && (
    <div className='z-50 relative mt-[666px] bg-black text-white'>
     
     <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
     <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
    
     
    
      
    </div>
    )}
    </>
  
    
  )
}

