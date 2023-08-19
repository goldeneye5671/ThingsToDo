import Bliss from "./bliss";
import { useSelector } from "react-redux";
import {
	allBliss,
	blissError,
	blissStatus,
	// cleanBliss,
} from "../../store/blissSlice";

function BlissList() {
	const bliss = useSelector(allBliss);
	const status = useSelector(blissStatus);
	const errors = useSelector(blissError);
	let content;

	if (status === "fulfilled") {
		content = bliss.bliss.map((bliss) => {
			return <Bliss key={bliss.id} bliss={bliss} />;
		});
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

	return <div className="main-card-container">{content}</div>;
}

export default BlissList;
