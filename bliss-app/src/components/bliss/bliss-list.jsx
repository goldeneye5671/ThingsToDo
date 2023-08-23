import Bliss from "./bliss-card";
import { useSelector } from "react-redux";
import {
	allBliss,
	blissError,
	blissStatus,
	// cleanBliss,
} from "../../store/blissSlice";
import { useEffect } from "react";

function BlissList({page, limit, status}) {
	const bliss = useSelector(allBliss);
	// const status = useSelector(blissStatus);
	const errors = useSelector(blissError);
	const end = (page * limit) -1
	const start = end - limit + 1
	let content;

	console.log("Status", status)
	
	if (status === "fulfilled") {
		// for (let i = index; i < bliss.bliss.length; i++) {
			// 	content.push(<Bliss key={bliss.bliss[i].id} bliss={bliss.bliss[i]} />);
			// }
			console.log(bliss)
			console.log(start, end)

			content = bliss.map(bliss => <Bliss key={bliss.id} bliss={bliss} />)
	} else if (status === "loading") {
		content = <h1>Loading...</h1>;

	} else if (status === "error") {
		content = (
			<div>
				<h2>Error</h2>
				<p>{errors}</p>
			</div>
		);
	}

	return (
		<div className="main-card-container">
			<h1></h1>
			{content}
		</div>
	);
}

export default BlissList;
