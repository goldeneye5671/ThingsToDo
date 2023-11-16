import ListCard from "./list-card"
import { useSelector } from "react-redux";

import {
	fetchLists,
	allLists,
	listStatus,
	listError,
} from "../../store/listSlice";

function ListList({home}) {
	const lists = useSelector(allLists);
	const status = useSelector(listStatus);
	const error = useSelector(listError);
	let content;

	if (status === "fulfilled") {
        console.log("Lists: ", lists)
		content = lists?.lists?.map((list) => <ListCard key={list.id} list={list}/>);
	} else if (status === "loading") {
		content = <h1>Loading...</h1>;
	} else if (status === "error") {
		content = (
			<div>
				<h2>Error</h2>
				<p>{error}</p>
			</div>
		);
	}

	return (
		<div className={!home ? "main-card-container" : "main-card-container-horizontal"}>
			<h1></h1>
			{content}
		</div>
	);
}

export default ListList;
