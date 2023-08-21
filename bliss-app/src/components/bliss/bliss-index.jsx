import { useState, useEffect, useRef } from "react";
import BlissList from "./bliss-list";
import BlissCreateForm from "./bliss-create-form";
import { useDispatch, useSelector } from "react-redux";
import {
	allBliss,
	blissError,
	blissStatus,
	cleanBliss,
	fetchBliss,
	prevPage,
	nextPage,
	setPage
} from "../../store/blissSlice";
import { useSearchParams } from "react-router-dom";

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

function BlissPage() {
	const dispatch = useDispatch();
	const [qparams, setqparams] = useSearchParams();
	const [limit, setLimit] = useState(15);
	const bliss = useSelector(allBliss);
	const status = useSelector(blissStatus);
	const error = useSelector(blissError);
	const page = parsePageFromQueryParams(qparams)
	const isMounted = useRef(false);
	let content;
	const [addBliss, setAddBliss] = useState(false);

	const onNextPageClick = async (e) => {
		e.preventDefault();
		const page = parsePageFromQueryParams(qparams) + 1
		setqparams({ page: page + 1 });
		if (bliss[page] === undefined) {
			console.log(page)
			// You'll notice that here the wrong page is retrieved even though the url updates
			dispatch(
				fetchBliss({ limit, offset: page === 1 ? 0 : page * limit - 1, page })
			);
		}
	};

	const onPrevPageClick = async (e) => {
		e.preventDefault();
		const page = parsePageFromQueryParams(qparams) - 1
		setqparams({ page : page - 1})
		if (bliss[page] === undefined) {
			console.log(page)
			// You'll notice that here the wrong page is retrieved even though the url updates
			dispatch(
				fetchBliss({ limit, offset: page === 1 ? 0 : page * limit - 1, page })
			);
		}
	};

	useEffect(() => {
		if (!isMounted.current && !bliss.initialFetch) {
			dispatch(
				fetchBliss({ limit, offset: page === 1 ? 0 : page * limit - 1, page })
			);
			isMounted.current = true;
		}
		// () => {
		// 	dispatch(cleanBliss());
		// };
	}, [dispatch, qparams, page, limit]);

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
				<BlissList page={page} />
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
			{addBliss && <BlissCreateForm setVisible={setAddBliss} />}
			{content}
			<button onClick={onPrevPageClick}>previous</button>
			<button onClick={onNextPageClick}>Next</button>
		</div>
	);
}

export default BlissPage;
