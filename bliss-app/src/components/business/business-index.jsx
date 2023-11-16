import { useState, useEffect, useRef } from "react";
import BusinessList from "./business-list";
import BusinessCreateForm from "./business-create-form";
import { useDispatch, useSelector } from "react-redux";
import { usePagination,  } from "../../utils/pageHelper";
import { useSearchParams } from "react-router-dom";

import {
	allBusinesses,
	businessError,
	businessStatus,
	cleanBusinesses,
	fetchBusinesses,
} from "../../store/businessSlice";

function BusinessPage({home}) {
	const dispatch = useDispatch();
	const isMounted = useRef(false)
	const businesses = useSelector(allBusinesses);
	const status = useSelector(businessStatus);
	const error = useSelector(businessError);
	const { limit, offset, onClickNext, onClickPrev, page } = usePagination(useSearchParams);

	let content;

	const [addFormVisible, setAddFormVisible] = useState(false);

	useEffect(() => {
		const llimit = home ? 5 : limit
		const data = dispatch(fetchBusinesses({ limit: llimit, offset, page }))
		return () => {
			data.abort();
		}
	}, [dispatch, limit, offset, page])

	const onAddButtonClick = (e) => {
		e.preventDefault();
		setAddFormVisible(!addFormVisible);
	};

	if (status === "fulfilled") {
		content = <BusinessList home={home}/>;
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
			{
				!home ? (
					<>

						{/* {!addFormVisible && (
							<button onClick={onAddButtonClick}>Add Business</button>
						)}
						{addFormVisible && <BusinessCreateForm setVisible={setAddFormVisible} />} */}

<>
					<div className="home-main-header">
						<div className="home-content">
							<h1>Businesses</h1>
							<label htmlFor="bliss-search"></label>
							<div>
								<input type="text" name="bliss-search" id="bliss-search" placeholder="Search"/>
							</div>
							<button onClick={onAddButtonClick}>Add Business</button>
							{addFormVisible && <BusinessCreateForm setVisible={setAddFormVisible} />}
							<button>{"->"}</button>
						</div>
					</div>
					</>
					</>
				) 
					:
				(
					<>
						<div className="home-main-header">
							<h1>Businesses</h1>
						</div>
					</>
				)
			}
			{content}
			{
				!home && (
					<>
						<button onClick={() => onClickPrev()}>previous</button>
						<button onClick={() => onClickNext()}>Next</button>
					</>
				)
			}
		</div>
	);
}

export default BusinessPage;
