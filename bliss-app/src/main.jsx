import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import App from "./App.jsx";
import "./index.css";
// import { fetchBusinesses } from './store/businessSlice.js';

// store.dispatch(fetchBusinesses())


ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
		<h1>Test!!</h1>
	</React.StrictMode>
);
