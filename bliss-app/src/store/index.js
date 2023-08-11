import {configureStore} from "@reduxjs/toolkit";
import businessSlice from "./businessSlice";

//reducer imports


export const store = configureStore({
    reducer: {
        businesses:businessSlice,
    }
})
