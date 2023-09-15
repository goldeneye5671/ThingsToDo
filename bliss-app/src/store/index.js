import { configureStore } from "@reduxjs/toolkit";
import businessSlice from "./businessSlice";
import blissSlice from "./blissSlice";
import listSlice from "./listSlice";
import userSlice from "./userSlice";
import process from "process";
//reducer imports

export const store = configureStore({
	reducer: {
		businesses: businessSlice,
		bliss: blissSlice,
		list: listSlice,
		user: userSlice
	},
	devTools: process.env.NODE_ENV !== 'production',
});

export const devURI = process.env.NODE_ENV === "development" ? `http://localhost:5000`:`` 