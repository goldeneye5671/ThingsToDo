import { useState } from "react";
import BusinessList from "./business-list";
import BusinessCreateForm from "./business-create-form";

function BusinessPage() {
	const [blVisibe, setBlVisible] = useState(false);
	const [addFormVisible, setAddFormVisible] = useState(false);

	const onBlVisibleButtonClick = (e) => {
		e.preventDefault();
		setBlVisible(!blVisibe);
	};
	const onAddButtonClick = (e) => {
		e.preventDefault();
		setAddFormVisible(!addFormVisible);
	};

	return (
		<div>
			<h1>Business</h1>

			{!addFormVisible && <button onClick={onAddButtonClick}>Add Business</button>}
			{addFormVisible && <BusinessCreateForm setVisible={setAddFormVisible}/>}

			<button onClick={onBlVisibleButtonClick}>
				{blVisibe ? "hide Businesses" : "Show Businesses"}
			</button>
			{blVisibe && <BusinessList />}
		</div>
	);
}

export default BusinessPage;
