import React from 'react'
import { MovieCard } from './MovieCard'

export const MovieList = ({title,movies}) => {
  return (
    <>
    {movies && (
        <div>
        <h1 className='text-2xl pb-2 px-4'>{title}</h1>
        <div className='flex w-screen overflow-x-scroll'>
            {movies && movies.map((movie)=> <MovieCard posterPath={movie.poster_path}/> )}
       
        </div>
       
    </div>
    )}
    </>
    
   
  )
}
