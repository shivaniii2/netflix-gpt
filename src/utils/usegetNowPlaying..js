
import { OPTIONS } from "./constants";
import {  useDispatch } from "react-redux";
import { addNowPlaying } from "./movieSlice";
import { useEffect } from "react";

const UseGetNowPlaying = () => {
    const dispatch = useDispatch()
    
    const getMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',OPTIONS)
        const json = await data.json();
        dispatch(addNowPlaying(json.results))

   
        
        
    }
    
    useEffect(()=>{
        getMovies()
    },[])
   
        
      
      
    
}
export default UseGetNowPlaying ;