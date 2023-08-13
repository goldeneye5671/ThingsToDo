import { configureStore } from "@reduxjs/toolkit";
import businessSlice from "./businessSlice";
import blissSlice from "./blissSlice";

//reducer imports

export const store = configureStore({
	reducer: {
		businesses: businessSlice,
		bliss: blissSlice,
	},
});
