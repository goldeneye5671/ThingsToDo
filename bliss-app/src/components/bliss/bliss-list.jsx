import { useEffect } from "react";
import Bliss from "./bliss";
import { useDispatch, useSelector } from "react-redux";
import {
	allBliss,
	blissError,
	blissStatus,
	// cleanBliss,
	fetchBliss,
} from "../../store/blissSlice";
import { Link } from "react-router-dom";

function BlissList() {
	const dispatch = useDispatch();
	const bliss = useSelector(allBliss);
	const status = useSelector(blissStatus);
	const errors = useSelector(blissError);
	// const isMounted = useRef(false);
	let content;

	// useEffect(() => {
	// 	// if (!isMounted.current) {
	// 	// 	const blissData = dispatch(fetchBliss());
	// 	// 	isMounted.current = true;
	// 	// }
	// 	dispatch(fetchBliss())
	// });

	if (status === "fulfilled") {
		content = bliss.bliss.map((bliss) => {
			return (
				<Link key={bliss.id} to={`/bliss/${bliss.id}`}>
					<Bliss key={bliss.id} bliss={bliss} />
				</Link>
			);
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

	return <div>{content}</div>;
}

export default BlissList;
