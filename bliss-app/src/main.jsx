import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./home.css"
// import { fetchBusinesses } from "./store/businessSlice.js";
// import { fetchBliss } from "./store/blissSlice.js";

// store.dispatch(fetchBusinesses())
// store.dispatch(fetchBliss())

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
