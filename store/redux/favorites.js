import { createSlice } from '@reduxjs/toolkit'

const favorSlice=createSlice({
    name:"favorites",
    initialState:{
        ids:[],

    },
    reducers:{
        addFavor:(state,action)=>{
            state.ids.push(action.payload.id)
        },
        removeFavor:(state,action)=>{
            state.ids.splice(state.ids.indexOf(action.payload.id))
        },
    }
})

export const addFavor=favorSlice.actions.addFavor
export const removeFavor=favorSlice.actions.removeFavor
export default favorSlice.reducer