import { useState } from "react";
import BlissUpdateForm from "./bliss-update-form";
import { Link } from "react-router-dom";

function Bliss({ bliss }) {
	const [updateVis, setUpdateVis] = useState(false);

	const onUpdateClick = (e) => {
		e.preventDefault();
		setUpdateVis(!updateVis);
	};

	const photos = bliss?.Experiences[0]?.ExperiencePhotos?.slice(0, 4)?.map(photo => {
		return <img key={photo?.id} src={photo?.url} alt="" />
	})

	return !updateVis ? (
		<>
			<Link className="card" key={bliss.id} to={`/bliss/${bliss.id}`}>
				<h1>{bliss.id}</h1>
				<div className="photo-container">

				</div>
				<div className="heading">
					<h2>Bliss Name: {bliss.thingName}</h2>
					<p>Bliss Desc: {bliss.thingDescription}</p>
				</div>
				<ul>
					<li>Amount of Descriptions: {bliss.CustomDescriptions?.length}</li>
					<li>Amount of Experiences: {bliss.Experiences?.length}</li>
					<li>Amount of Businesses: {bliss.Businesses?.length}</li>
				</ul>
			</Link>
		</>
	) : (
		<BlissUpdateForm setVisible={setUpdateVis} bliss={bliss} />
	);
}

export default Bliss;
