import { useEffect } from "react";
import { OPTIONS } from "./constants";
import {useDispatch} from "react-redux";
import {addTrailerVideo} from "./movieSlice"


const useGetTrailer = (movieId) =>{
  const dispatch = useDispatch();
    
    const gettrailer = async() =>{
        const trailer = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",OPTIONS)
        const json = await trailer.json()
        const filteredData = json.results.filter((v)=> {return  v.type ==='Trailer'})
        const actualBgVideo = filteredData && filteredData[0]
        dispatch(addTrailerVideo(actualBgVideo))
   
     }
     
     useEffect(() => {
       
       gettrailer ()
         
   
     }, []);
}
export default useGetTrailer;