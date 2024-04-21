import React from 'react'
import { useSelector } from 'react-redux'
import { MovieList } from './MovieList'

export const GptMovieSuggestion = () => {
  const {gptDerivedMovies,TmdbSearchMovies} = useSelector((store) => store.gpt)
  return (
    
    <div className='bg-black opacity-[90%] text-white absolute z-40 mt-[13%]'> 
    {gptDerivedMovies && gptDerivedMovies.map((gptMovie,index)=> <MovieList title={gptMovie} movies={TmdbSearchMovies[index]} />)}
      
    </div>
  )
}
