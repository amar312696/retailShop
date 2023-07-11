import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "./userSlices";

const store=configureStore({
    reducer:{
        users:dataSlice.reducer,
    },
});



export default store;