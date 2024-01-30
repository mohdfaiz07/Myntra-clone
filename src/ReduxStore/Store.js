import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./ItemSlice";



 const store = configureStore( {
    reducer : {
        item : itemsSlice.reducer

    }

} )

export default store