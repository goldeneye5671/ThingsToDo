import { useState, useEffect } from "react";
import BlissList from "./bliss-list";
import BlissCreateForm from "./bliss-create-form";
import { useDispatch, useSelector } from "react-redux";
import { allBliss, cleanBliss, fetchBliss } from "../../store/blissSlice";

function BlissPage() {
	const dispatch = useDispatch();
	const bliss = useSelector(allBliss);
	let content;
	const [addBliss, setAddBliss] = useState(false);

	const onAddBlissClick = (e) => {
		e.preventDefault();
		setAddBliss(!addBliss);
	};

	if (bliss.statuss === "pending") {
		content = (
			<>
				<h2>Loading</h2>
				<p>Please Wait...</p>
			</>
		);
	} else if (bliss.status === "fulfilled") {
		content = <BlissList />
	} else if (bliss.status === "error") {
		content = (
			<>
				<h2>An error has occured</h2>
				<p>{bliss.error}</p>
			</>
		);
	}

	return (
		<div>
			<h1>Bliss</h1>
			<label htmlFor="bliss-search"></label>
			<input type="text" name="bliss-search" id="bliss-search" />
			<button onClick={onAddBlissClick}>Add Bliss</button>
			{addBliss && <BlissCreateForm setVisible={setAddBliss} />}
			{content}
		</div>
	);
}

export default BlissPage;
