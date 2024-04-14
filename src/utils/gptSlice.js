import { createSlice } from  "@reduxjs/toolkit"

const gptSlice = createSlice({
    name : "gpt",
    initialState:{
        showComponent : false
    },
    reducers: {
        ToggleGpt : (state) => {
            state.showComponent = !state.showComponent
        }
    }
})

export const {ToggleGpt} = gptSlice.actions
export default gptSlice.reducer