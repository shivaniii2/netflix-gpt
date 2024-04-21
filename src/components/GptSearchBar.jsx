import React, { useRef } from 'react'
import lang from '../utils/language'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai'
import { OPTIONS } from '../utils/constants'
import { addGptAndTmdbMovies } from '../utils/gptSlice'

export const GptSearchBar = () => {
  const searchbox = useRef(null)
  const dispatch = useDispatch()
  
  const searchForMovieTmdb = async(movie) =>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',OPTIONS)
    const json = await data.json();
    const result = json.results
    return result
  }
  
  
  
  
  const gptApiCall = async() =>{
    // const gptQuery = "Act as a movie recommendation system and suggest some movies for the query :" + searchbox.current.value + ". Only give me names of 5 movies, comma seperated like the example given ahead. Example : jab harry met sejal , band baja barat , vivah , chamkila ,Love aajkal "
    // const completion = await openai.chat.completions.create({
    //   messages: [{ role: 'user', content: gptQuery }],
    //   model: 'gpt-3.5-turbo',
    // });
  
    // console.log(completion.choices?.[0]?.message.content);
   // "Dil Chahta Hai, Gully Boy, Queen, Dangal, Andhadhun"
    //const gptMovies = completion.choices?.[0]?.message.content.split(",")
    const  gptMovies = ['Dil Chahta Hai', ' Gully Boy', ' Queen', ' Dangal', ' Andhadhun']
    // now i will search for each of the above movies in tmdb api - the documentation you can refer to : https://developer.themoviedb.org/reference/search-movie
    
    // I have to make an API call for that so let us write a separate function for that
    // Let us call that function for every movie that we have got as a result from open AI API call and to do that let us use map method on the list of 5 movies that we have got from open AI
    
    // don't forget that map method will synchronously call searchForMovieTmdb function for five times and it will take some time for those 5 promises to be resolved as every API is going to take some time
    
    const PromiseArray = gptMovies.map((movie) => searchForMovieTmdb(movie))
    // searchForMovieTmdb returns a promise because it uses async and await to handle the asynchronous fetch operation. Since map doesn't wait for asynchronous operations to complete, it immediately proceeds to the next iteration after calling searchForMovieTmdb for each element in gptMovies. Therefore, it collects the promises returned by each call to searchForMovieTmdb and returns an array of promises.
    const tmdbResults = await Promise.all(PromiseArray);
    console.log(tmdbResults,"tmdb search");
    // Let us keep all the tmdb results and gpt results in the gpt slice of redux store
    dispatch(addGptAndTmdbMovies({gptmovies: gptMovies , tmdbmovies : tmdbResults}))
    
    
  }
  
const langKey = useSelector((store) => store.appConfig.preferedLanguage)
  return (
        <div className='bg-black mt-[15%]'>
              <form className='flex justify-between p-2 pl-4 w-[50vw] border-black border' onSubmit={(e) => e.preventDefault()}>
            <input ref={searchbox} className='w-[80%] px-2  rounded-lg' type="text" placeholder={lang[langKey].gptSearchPlaceHolder} />
            <button className='px-14 py-3 ml-2 bg-red-500 rounded-lg' onClick={gptApiCall} >{lang[langKey].search}</button>
        </form>
        </div>
      
  
  )
}
