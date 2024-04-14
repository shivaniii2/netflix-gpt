import { useEffect } from "react"
import { OPTIONS } from "./constants"
import { useDispatch } from "react-redux"
import { addPopularMovies } from "./movieSlice"

const useGetPopularMovies = () =>{
    const dispatch = useDispatch()
    const getPopular = async() => {
        const data = await fetch ('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',OPTIONS)
        const json = await data.json();
        dispatch(addPopularMovies(json.results))
    
    }
    
    useEffect(()=>{
        getPopular()
    },[])
}
export default useGetPopularMovies;