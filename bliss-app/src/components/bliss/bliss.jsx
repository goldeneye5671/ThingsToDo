import { useState } from "react";
import BlissUpdateForm from "./bliss-update-form";

function Bliss({ bliss }) {
	const [updateVis, setUpdateVis] = useState(false);

	const onUpdateClick = (e) => {
		e.preventDefault();
		setUpdateVis(!updateVis);
	};

	return !updateVis ? (
		<div>
			<h2>Bliss Name: {bliss.thingName}</h2>
			<ul>
				<li>Amount of Descriptions: {bliss.Descriptions?.length}</li>
				<li>Amount of Experiences: {bliss.Experiences?.length}</li>
			</ul>
			<button onClick={onUpdateClick}>{updateVis ? "Cancel" : "Update"}</button>
		</div>
	) : (
		<BlissUpdateForm setVisible={setUpdateVis} bliss={bliss}/>
	);
}

export default Bliss;
