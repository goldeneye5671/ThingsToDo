import { useState } from "react";
import BusinessUpdateForm from "./business-update-form";
import Card from "../shared/Section/listContainer/card/card";
function Business({business}) {
	const [update, setUpdate] = useState(false);
	const onUpdateClicked = (e) => setUpdate(!update);
	const content = (
		<>
			<h3>Business Name: {business.name}</h3>
			<p>Business Address: <br></br> {business.address}<br></br>{business.city}, {business.stateProvince}     {business.zipcode}</p>
		</>
	)
	
	return (
        !update ? (
		// <div className="card" key={business.id}>
		// 	<h3>Business Name: {business.name}</h3>
		// 	<p>Business Address: <br></br> {business.address}<br></br>{business.city}, {business.stateProvince}     {business.zipcode}</p>
		// 	<button onClick={onUpdateClicked}>Update Business Info</button>
		// </div>
		<Card 
			id={business.id}
			to={`/business/${business?.id}`} 
			image={<img src={business?.primaryPhoto}/>} 
			title={business?.name} 
			content={content}
		/>
        )
        :
        (
            <BusinessUpdateForm business={business} setVisible={setUpdate}/>
        )
	);
}

export default Business;
