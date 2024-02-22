
// Context Api--> To transfer the Data from one state to anothetr help to eliminate the unnecessary 
// sending the data it directly send data to desired element

// Redux also same as Context Api but Superior to it 

import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";

export const store = configureStore({
    reducer:{
        cart: CartSlice.reducer,
    }
});