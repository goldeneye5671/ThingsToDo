import { useState } from "react";
import BlissUpdateForm from "./bliss-update-form";
import Card from "../card/card";
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
		<Card id={bliss?.id} to={`/bliss/${bliss.id}`} image={photos[0]} title={bliss?.thingName} content={bliss?.thingDescription}/>
		) : (
		<BlissUpdateForm setVisible={setUpdateVis} bliss={bliss} />
	);
}

export default Bliss;
