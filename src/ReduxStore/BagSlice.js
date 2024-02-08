import { createSlice } from "@reduxjs/toolkit";

const BagSlice = createSlice({
    name : 'Bag',
    initialState: [],
    reducers: {
        addToBag: (state, action)=>{
            state.push(action.payload)
        },
        removeToBag: (state, action)=>{
        return   state.filter( (item)=> item !== action.payload )
        }

    }

})

export const BagAction = BagSlice.actions

export default BagSlice