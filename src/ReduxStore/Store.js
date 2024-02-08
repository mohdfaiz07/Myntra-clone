import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./ItemSlice";
import BagSlice from "./BagSlice";



 const store = configureStore( {
    reducer : {
        item : itemsSlice.reducer,
        bag : BagSlice.reducer,
        

    }

} )

export default store