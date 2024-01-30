import { createSlice } from "@reduxjs/toolkit";
import itemsData from "./ItemsData";

export  const itemsSlice = createSlice( {
    name: 'items',
    initialState: itemsData,
    reducers : {
        addItems : (store, action)=>{
            return store
        }
    }
} )

export const itemsAction = itemsSlice.actions

export default itemsSlice