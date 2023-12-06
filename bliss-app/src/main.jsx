import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./home.css"

import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./features/api/apiSlice.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	// <React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				{/* <ApiProvider api={apiSlice}> */}
					<App />
				{/* </ApiProvider> */}
			</Provider>
		</BrowserRouter>
	// </React.StrictMode>
);
