import React from 'react'
import {Header} from "./Header";
import FirstContainer from './FirstContainer';
import { SecondContainer } from './secondContainer';
import UseGetNowPlaying from '../utils/usegetNowPlaying.';
import useGetPopularMovies from '../utils/useGetPopular';
import useGetUpcomingMovies from '../utils/useGetUpcoming';
import { GptSearch } from './GptSearch';
import { useSelector } from 'react-redux';


export const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showComponent)
  UseGetNowPlaying()
  useGetPopularMovies()
  useGetUpcomingMovies()
  
  //const navigate = useNavigate()
 
  
  return (
    <div className='flex '>
   
      <Header/>
      {showGptSearch?<GptSearch/> :<>
      <FirstContainer/>
      <SecondContainer/>
      </>}
      
     
     
      
   
    </div>
  )
}
