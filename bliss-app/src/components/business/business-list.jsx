import { useDispatch, useSelector } from "react-redux";
import {
	allBusinesses,
	businessError,
	businessStatus,
	cleanBusinesses,
	fetchBusinesses,
} from "../../store/businessSlice";
import { useEffect } from "react";
import Business from "./business";

function BusinessList() {
	const businesses = useSelector(allBusinesses);
	const status = useSelector(businessStatus);
	const errors = useSelector(businessError);
	const dispatch = useDispatch();
	let content;

	useEffect(() => {
		const businessStatus = dispatch(fetchBusinesses());
		return () => {
			businessStatus.abort();
			dispatch(cleanBusinesses());
		};
	}, [dispatch, businessStatus]);

	if (status === "fulfilled") {
		content = businesses.businesses.map((business) => {
			return <Business key={business.id} business={business} />;
		});
	} else if (status === "pending") {
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

export default BusinessList;
