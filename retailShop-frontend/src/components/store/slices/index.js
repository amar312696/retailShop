import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "./userSlices";
import { topBarSlice } from "./userSlices";

const rootReducer={
    cart:dataSlice.reducer,
    topBar:topBarSlice.reducer,
};
const store=configureStore({
    reducer:rootReducer
});


export default store;