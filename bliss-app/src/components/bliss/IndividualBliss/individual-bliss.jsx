import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { fetchOneBliss } from "../../../store/blissSlice";
import Business from "../../business/business";

function IndividualBliss() {
	const dispatch = useDispatch();
	const [showDescriptions, setShowDescriptions] = useState(true);
	const [showExperiences, setShowExperiences] = useState(false);
	const [showBusinesses, setShowBusinesses] = useState(false);

	const isMounted = useRef(false);

	const onDescriptionsClick = (e) => {
		e.preventDefault();
		setShowDescriptions(true);
		setShowExperiences(false);
		setShowBusinesses(false);
	};

	const onExperienceClick = (e) => {
		e.preventDefault();
		setShowDescriptions(false);
		setShowExperiences(true);
		setShowBusinesses(false);
	};

	const onBusinessClick = (e) => {
		e.preventDefault();
		setShowDescriptions(false);
		setShowExperiences(false);
		setShowBusinesses(true);
	};
	const params = useParams();
	const bliss = useSelector((state) =>
		state.bliss?.bliss.find((bliss) => {
			return parseInt(bliss.id) === parseInt(params.id);
		})
	);

	useEffect(() => {
		if (!isMounted.current && !bliss) {
			console.log(bliss);
			dispatch(fetchOneBliss(parseInt(params.id)));
			isMounted.current = true;
		} else {
			console.log(bliss);
		}
	}, [dispatch]);

	let customDescriptionContent = bliss?.CustomDescriptions.map((desc) => (
		<>
			<h3>{desc.headline}</h3>
			<p>{desc.description}</p>
		</>
	));

	let experiencesContent = bliss?.Experiences.map((exp) => (
		<>
			<h3>{exp.title}</h3>
			<p>{exp.description}</p>
		</>
	));

	let businessesContent = bliss?.Businesses.map((business) => {
		return <Business business={business}/>
	});

	return (
		<div>
			<div className="bliss-heading-controls">
				<h1>{bliss?.thingName}</h1>
				<p className="bliss-description">{bliss?.thingDescription}</p>
				<div className="control-buttons">
					<button
						className={showExperiences && "active-button"}
						onClick={onExperienceClick}
					>
						Experiences
					</button>
					<button
						className={showDescriptions && "active-button"}
						onClick={onDescriptionsClick}
					>
						Descriptions
					</button>
					<button
						className={showBusinesses && "active-button"}
						onClick={onBusinessClick}
					>
						Businesses
					</button>
				</div>
			</div>
			{showDescriptions && (
				<div className="main-card-container">
					{customDescriptionContent?.length ? (
						customDescriptionContent
					) : (
						<h2>No Descriptions</h2>
					)}
				</div>
			)}
			{showExperiences && (
				<div className="main-card-container">
					{experiencesContent?.length ? (
						experiencesContent
					) : (
						<h2>No Experiences</h2>
					)}
				</div>
			)}
			{showBusinesses && (
				<div className="main-card-container">
					{console.log(businessesContent)}
					{businessesContent?.length ? (
						businessesContent
					) : (
						<h2>No Businesses</h2>
					)}
				</div>
			)}
		</div>
	);
}

export default IndividualBliss;
