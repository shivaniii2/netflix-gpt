import { createSlice } from "@reduxjs/toolkit";

const appConfig = createSlice({
    name:"lang",
    initialState:{
        preferedLanguage : "en"
    },
    reducers:{
        changeLanguage : (state,action) =>{
        state.preferedLanguage = action.payload
        }
    }
})
export const {changeLanguage} = appConfig.actions

export default appConfig.reducer;