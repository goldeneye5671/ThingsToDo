import { useState } from "react";
import BlissUpdateForm from "./bliss-update-form";

function Bliss({ bliss }) {
	const [updateVis, setUpdateVis] = useState(false);

	const onUpdateClick = (e) => {
		e.preventDefault();
		setUpdateVis(!updateVis);
	};

	return !updateVis ? (
		<div>
			<h2>Bliss Name: {bliss.thingName}</h2>
			<p>{bliss.thingDescription}</p>
			<div>
				Experiences
				<div>
					<h2>Descriptions</h2>
					{bliss.CustomDescriptions?.map(desc => (
						<div>
							Description by {desc?.user}
						</div>
					))}
					<h2>Experiences</h2>
					{bliss.Experiences.map((experience) => (
						<>
							<div>
								<h2>Experience Name: {experience?.title}</h2>
								<p>{experience?.description}</p>
							</div>
						</>
					))}
				</div>
			</div>
			<button onClick={onUpdateClick}>{updateVis ? "Cancel" : "Update"}</button>
		</div>
	) : (
		<BlissUpdateForm />
	);
}

export default Bliss;
