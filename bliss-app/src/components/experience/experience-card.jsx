import "../../assets/styles/card/experience-card.css"

function ExperienceCard({ experience }) {
	const ExperiencePhotos = experience?.ExperiencePhotos?.map((photo) => {
		return <img key={photo?.id} src={photo?.url}></img>;
	});

	return (
		<div className="card">
			<div className="photo-container">{ExperiencePhotos}</div>
			<h2 className="card-title">{experience.title}</h2>
			<p className="card-content">{experience.description}</p>
			<div className="votes-container">
				<button className="upvotes">/\ {experience.upvotes}</button>
				<button className="downvotes">\/ {experience.downvotes}</button>
			</div>
		</div>
	);
}

export default ExperienceCard;
