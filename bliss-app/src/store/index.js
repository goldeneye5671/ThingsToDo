import { configureStore } from "@reduxjs/toolkit";
import businessSlice from "./businessSlice";
import blissSlice from "./blissSlice";
import listSlice from "./listSlice";
import userSlice from "./userSlice";
import process from "process";
import sessionSlice from "./sessionSlice";
import { apiSlice } from "../features/api/apiSlice";
//reducer imports

export const store = configureStore({
	reducer: {
		businesses: businessSlice,
		bliss: blissSlice,
		list: listSlice,
		user: userSlice,
		session: sessionSlice,
		[apiSlice.reducerPath]: apiSlice.reducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
	devTools: process.env.NODE_ENV !== 'production',
});