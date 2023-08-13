import { useState } from "react";
import BlissList from "./bliss-list";

function BlissPage() {
	const [blissVis, setBlissVis] = useState(false);

	const onBlissClick = (e) => {
		e.preventDefault();
		setBlissVis(!blissVis);
	};

	return (
		<div>
			<h1>Bliss</h1>
			<label htmlFor="bliss-search"></label>
			<input type="text" name="bliss-search" id="bliss-search" />
			<button onClick={onBlissClick}>{blissVis ? "Hide Bliss" : "Show Bliss"}</button>
            <button>Add Bliss</button>
			{blissVis && <BlissList />}
		</div>
	);
}

export default BlissPage;
