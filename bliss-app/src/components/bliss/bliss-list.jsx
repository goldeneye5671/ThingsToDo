import React, { useEffect } from "react";
import Bliss from "./bliss";
import { useDispatch, useSelector } from "react-redux";
import {
	allBliss,
	blissError,
	blissStatus,
	cleanBliss,
	fetchBliss,
} from "../../store/blissSlice";

function BlissList() {
	const dispatch = useDispatch();
	const bliss = useSelector(allBliss);
	const status = useSelector(blissStatus);
	const errors = useSelector(blissError);
	let content;

	useEffect(() => {
		const bliss = dispatch(fetchBliss());

		return () => {
			bliss.abort();
			dispatch(cleanBliss());
		};
	}, [dispatch]);

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

	return <div>{content}</div>;
}

export default BlissList;
