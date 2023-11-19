import Card from "../shared/Section/listContainer/card/card";

function ExperienceCard({ experience }) {
	const ExperiencePhotos = experience?.ExperiencePhotos?.map((photo) => {
		return <img key={photo?.id} src={photo?.url}></img>;
	});

	const image = (
		ExperiencePhotos[0]
	)

	const title = experience?.title

	const content = (
		<>
			<p className="card-content">{experience.description}</p>
			<div className="votes-container">
					<button className="upvotes">/\ {experience.upvotes}</button>
					<button className="downvotes">\/ {experience.downvotes}</button>
			</div>	
		</>
	)

	return (
		<Card 
			id={experience?.id}
			to={"#"}
			image={image}
			title={title}
			content={content}
		/>
	);
}

export default ExperienceCard;
