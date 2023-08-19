import { useState } from "react";
import BlissUpdateForm from "./bliss-update-form";
import { Link } from "react-router-dom";

function Bliss({ bliss }) {
	const [updateVis, setUpdateVis] = useState(false);

	const onUpdateClick = (e) => {
		e.preventDefault();
		setUpdateVis(!updateVis);
	};

	return !updateVis ? (
		<>
			<Link key={bliss.id} to={`/bliss/${bliss.id}`}>
				<h2>Bliss Name: {bliss.thingName}</h2>
				<ul>
					<li>Amount of Descriptions: {bliss.CustomDescriptions?.length}</li>
					<li>Amount of Experiences: {bliss.Experiences?.length}</li>
					<li>Amount of Businesses: {bliss.Businesses?.length}</li>
				</ul>
			</Link>
			<button onClick={onUpdateClick}>{updateVis ? "Cancel" : "Update"}</button>
		</>
	) : (
		<BlissUpdateForm setVisible={setUpdateVis} bliss={bliss} />
	);
}

export default Bliss;
