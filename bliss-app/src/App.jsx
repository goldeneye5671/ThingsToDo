import { useState } from "react";
import "./App.css";
import BusinessPage from "./components/business/business-index";
import BlissPage from "./components/bliss/bliss-index";

function App() {
	const [blissVis, setBlissVis] = useState(false);
	const [businessVis, setBusinessVis] = useState(false);

	const onBlissClick = (e) => {
		e.preventDefault();
		setBlissVis(!blissVis);
	};

	const onBusinessClick = (e) => {
		e.preventDefault();
		setBusinessVis(!businessVis);
	};

	return (
		<>
			<h1>Bliss</h1>
			<h3>(Under Development)</h3>
			<button onClick={onBlissClick}>
				{blissVis ? "Hide Bliss Page" : "Show Bliss Page"}
			</button>
			<button onClick={onBusinessClick}>
				{businessVis ? "Hide Business Page" : "Show Business Page"}
			</button>

			{blissVis && <BlissPage />}
			{businessVis && <BusinessPage />}
		</>
	);
}

export default App;
