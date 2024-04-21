import { createSlice } from  "@reduxjs/toolkit"

const gptSlice = createSlice({
    name : "gpt",
    initialState:{
        showComponent : false,
        gptDerivedMovies : null,
        TmdbSearchMovies : null
    },
    reducers: {
        ToggleGpt : (state) => {
            state.showComponent = !state.showComponent
        },
        addGptAndTmdbMovies: (state,action) =>{
            const{gptmovies,tmdbmovies} = action.payload;
            state.gptDerivedMovies = gptmovies
            state.TmdbSearchMovies = tmdbmovies
            
        }
    }
})

export const {ToggleGpt,addGptAndTmdbMovies} = gptSlice.actions
export default gptSlice.reducer