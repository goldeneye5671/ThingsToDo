import { useState, useEffect, useRef } from "react";
import BlissList from "./bliss-list";
import BlissCreateForm from "./bliss-create-form";
import { useDispatch, useSelector } from "react-redux";
import { allBliss, blissError, blissStatus, cleanBliss, fetchBliss } from "../../store/blissSlice";

function BlissPage() {
	const dispatch = useDispatch();
	const bliss = useSelector(allBliss);
	const status = useSelector(blissStatus)
	const error = useSelector(blissError)
	const isMounted = useRef(false)
	let content;
	const [addBliss, setAddBliss] = useState(false);

	useEffect(() => {
		if (!isMounted.current && !bliss.initialFetch) {
			dispatch(fetchBliss())
			isMounted.current = true;
		}
		() => {
			dispatch(cleanBliss())
		}
	}, [dispatch])

	const onAddBlissClick = (e) => {
		e.preventDefault();
		setAddBliss(!addBliss);
	};

	if (status === "pending") {
		content = (
			<>
				<h2>Loading</h2>
				<p>Please Wait...</p>
			</>
		);
	} else if (status === "fulfilled") {
		content = (
			<>
				<BlissList />
			</>
		)
	} else if (status === "error") {
		content = (
			<>
				<h2>An error has occured</h2>
				<p>{error}</p>
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
