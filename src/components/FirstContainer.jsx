import { VideoTitle } from "./VideoTitle"
import { VideoBg } from "./videoBg"
import {useSelector} from "react-redux"

const FirstContainer = () =>{
   const movies = useSelector(store => store.movie?.nowPlayingMovies)
   let mainMovie = movies && movies.length && movies[1]
   if(mainMovie===undefined)return



   
   
    return(
     <>
    <div className="">
    <VideoTitle title={mainMovie.title}  overview={mainMovie.overview}/>
     <VideoBg movieId={mainMovie.id}/>
      
    </div>
  
    
    </>
    )
}
export default FirstContainer