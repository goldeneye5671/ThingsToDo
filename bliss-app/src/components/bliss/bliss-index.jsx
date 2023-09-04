import { useState, useEffect, useRef } from "react";
import BlissList from "./bliss-list";
import BlissCreateForm from "./bliss-create-form";
import { usePagination,  } from "../../utils/pageHelper";
import { useDispatch, useSelector } from "react-redux";
import {
	blissError,
	blissStatus,
	cleanBliss,
	fetchBliss,
} from "../../store/blissSlice";
import { useSearchParams } from "react-router-dom";

function BlissPage() {
	const dispatch = useDispatch();
	const status = useSelector(blissStatus);
	const error = useSelector(blissError);
	const isMounted = useRef(false);
	const [addBliss, setAddBliss] = useState(false);
	const { limit, offset, onClickNext, onClickPrev, page } = usePagination(useSearchParams);
	let content;

	// We want to re-fetch the results whenever the limit, offset, or page changes.
	useEffect(() => {
		const data = dispatch(fetchBliss({ limit, offset, page }));
		return () => {
			data.abort();
			// dispatch(cleanBliss());
		};
	}, [dispatch, limit, offset, page]);

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
				<BlissList page={page} limit={limit} status={status}/>
			</>
		);
	} else if (status === "rejected") {
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
			<button onClick={() => onClickPrev()}>previous</button>
			<button onClick={() => onClickNext()}>Next</button>
		</div>
	);
}

export default BlissPage;
