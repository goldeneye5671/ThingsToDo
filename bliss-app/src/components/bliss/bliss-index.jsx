import { useState, useEffect, useRef } from "react";
import BlissList from "./bliss-list";
import BlissCreateForm from "./bliss-create-form";
import { useDispatch, useSelector } from "react-redux";
import {
	blissError,
	blissStatus,
	cleanBliss,
	fetchBliss,
} from "../../store/blissSlice";
import { useSearchParams } from "react-router-dom";

/**
 * Parse a valid page number from a URLSearchParams object.
 *
 * Invalid states, empty states, and NaN are treated as the first page of results.
 */
const parsePageFromQueryParams = (query) => {
	let initialPage = 1;
	const pageFromQuery = query.get("page");
	if (pageFromQuery) {
		initialPage = parseInt(pageFromQuery);
		if (isNaN(initialPage)) {
			initialPage = 1;
		}
	}

	return initialPage;
};

/**
 * Puts page params logic into a hook.
 *
 * This will re-run when the query parameters change.
 *
 * It returns functions that will change the query parameters to update the page correctly, as well.
 */
const usePagination = () => {
	const limit = 15;
	const [qparams, setqparams] = useSearchParams();

	const page = parsePageFromQueryParams(qparams);

	const onClickNext = () => {
		setqparams({ ...qparams, page: page + 1 });
	};

	const onClickPrev = () => {
		setqparams({ ...qparams, page: page - 1 });
	};

	// Page = 1: (1 - 1) * 15 = 0 * 15 = 0
	// Page = 2: (2 - 1) * 15 = 1 * 15 = 15
	// Page = 3: (3 - 1) * 15 = 2 * 15 = 30
	const offset = (page - 1) * limit;

	return {
		limit,
		offset,
		onClickNext,
		onClickPrev,
		page,
	};
};

function BlissPage() {
	const dispatch = useDispatch();
	const status = useSelector(blissStatus);
	const error = useSelector(blissError);
	const isMounted = useRef(false);
	let content;
	const [addBliss, setAddBliss] = useState(false);
	const { limit, offset, onClickNext, onClickPrev, page } = usePagination(dispatch);

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
			<button onClick={() => console.log(page)}>Show the page value</button>
			{addBliss && <BlissCreateForm setVisible={setAddBliss} />}
			{content}
			<button onClick={() => onClickPrev()}>previous</button>
			<button onClick={() => onClickNext()}>Next</button>
		</div>
	);
}

export default BlissPage;
