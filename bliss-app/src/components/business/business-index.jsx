import { useState, useEffect } from "react";
import BusinessList from "./business-list";
import BusinessCreateForm from "./business-create-form";
import { useDispatch, useSelector } from "react-redux";
import {
	allBusinesses,
	cleanBusinesses,
	fetchBusinesses,
} from "../../store/businessSlice";

function BusinessPage() {
	const dispatch = useDispatch();

	const businesses = useSelector(allBusinesses);

	let content;

	const [addFormVisible, setAddFormVisible] = useState(false);

	const onAddButtonClick = (e) => {
		e.preventDefault();
		setAddFormVisible(!addFormVisible);
	};

	if (businesses.status === "fulfilled") {
		content = <BusinessList />;
	} else if (businesses.status === "Pending") {
		content = (
			<div>
				<h1>Loading</h1>
				<p>Please wait...</p>
			</div>
		);
	} else {
		content = (
			<div>
				<h1>An error has occured</h1>
				<p>{businesses.error}</p>
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
