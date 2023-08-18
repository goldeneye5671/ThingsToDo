import { useState, useEffect, useRef } from "react";
import BusinessList from "./business-list";
import BusinessCreateForm from "./business-create-form";
import { useDispatch, useSelector } from "react-redux";
import {
	allBusinesses,
	businessError,
	businessStatus,
	cleanBusinesses,
	fetchBusinesses,
} from "../../store/businessSlice";

function BusinessPage() {
	const dispatch = useDispatch();
	const isMounted = useRef(false)
	const businesses = useSelector(allBusinesses);
	const status = useSelector(businessStatus);
	const error = useSelector(businessError);

	let content;

	const [addFormVisible, setAddFormVisible] = useState(false);

	useEffect(() => {
		if (!isMounted.current && !businesses.initialFetch) {
			dispatch(fetchBusinesses())
			isMounted.current = true
		}
		() => {
			dispatch(cleanBusinesses)
		}
	}, [dispatch])

	const onAddButtonClick = (e) => {
		e.preventDefault();
		setAddFormVisible(!addFormVisible);
	};

	if (status === "fulfilled") {
		content = <BusinessList />;
	} else if (status === "pending") {
		content = (
			<div>
				<h1>Loading</h1>
				<p>Please wait...</p>
			</div>
		);
	} else if (status === "rejected"){
		content = (
			<div>
				<h1>An error has occured</h1>
				<p>{error}</p>
			</div>
		);
	}

	return (
		<div>
			<h1>Business</h1>

			{!addFormVisible && (
				<button onClick={onAddButtonClick}>Add Business</button>
			)}
			{addFormVisible && <BusinessCreateForm setVisible={setAddFormVisible} />}
			{content}
		</div>
	);
}

export default BusinessPage;
