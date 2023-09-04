import { useState } from "react";
import BusinessUpdateForm from "./business-update-form";

function Business({business}) {
	const [update, setUpdate] = useState(false);
	const onUpdateClicked = (e) => setUpdate(!update);
	return (
        !update ? (
		<div className="card" key={business.id}>
			<h3>Business Name: {business.name}</h3>
			<p>Business Address: <br></br> {business.address}<br></br>{business.city}, {business.stateProvince}     {business.zipcode}</p>
			<button onClick={onUpdateClicked}>Update Business Info</button>
		</div>

        )
        :
        (
            <BusinessUpdateForm business={business} setVisible={setUpdate}/>
        )
	);
}

export default Business;
