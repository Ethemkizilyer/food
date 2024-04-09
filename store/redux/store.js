import { configureStore } from '@reduxjs/toolkit'
import favorReducer from "./favorites"
export const store= configureStore({
    reducer:{
        favorFoods:favorReducer
    }
})