
import {createSlice} from "@reduxjs/toolkit"

const movieSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies :{},
        trailerVideo : null
    },
    reducers:{
        addNowPlaying : (state, action) =>{
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo = action.payload
        }
    }
    
    
})
export const {addNowPlaying,addTrailerVideo} = movieSlice.actions
export default movieSlice.reducer;
