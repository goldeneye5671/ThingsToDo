import { configureStore } from "@reduxjs/toolkit";
import businessSlice from "./businessSlice";
import blissSlice from "./blissSlice";
import listSlice from "./listSlice";

//reducer imports

export const store = configureStore({
	reducer: {
		businesses: businessSlice,
		bliss: blissSlice,
		list: listSlice
	},
});
