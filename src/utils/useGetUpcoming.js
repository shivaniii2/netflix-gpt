import { useEffect } from "react"
import { OPTIONS } from "./constants"
import { useDispatch } from "react-redux"
import { addUpcomingMovies } from "./movieSlice"

const useGetUpcomingMovies = () =>{
    const dispatch = useDispatch()
    
    const getUpcoming = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',OPTIONS)
        const json = await data.json()
        dispatch(addUpcomingMovies(json.results))
        
    }  
    
    useEffect(()=>{
        getUpcoming()
    },[])
}

export default useGetUpcomingMovies;