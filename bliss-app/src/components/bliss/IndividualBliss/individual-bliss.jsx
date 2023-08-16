import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { allBliss, cleanBliss, fetchOneBliss } from "../../../store/blissSlice";

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
        if(!isMounted.current && !bliss){
			console.log(bliss)
            const blissData = dispatch(fetchOneBliss(parseInt(params.id)));
            isMounted.current = true
        } else {
			console.log(bliss)
		}

    }, [dispatch])

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

	return (
		<div>
			<h1>{bliss?.thingName}</h1>
			<p>{bliss?.thingDescription}</p>
			<div>
				<button onClick={onExperienceClick}>Experiences</button>
				<button onClick={onDescriptionsClick}>Descriptions</button>
				<button onClick={onBusinessClick}>Businesses</button>
			</div>
			{showDescriptions && (
				<div>
					<h2>Descriptions</h2>
					<div>
						{customDescriptionContent ? (
							customDescriptionContent
						) : (
							<h2>No Descriptions</h2>
						)}
					</div>
				</div>
			)}
			{showExperiences && (
				<div>
					<h2>Experiences</h2>
					<div>
						{experiencesContent ? experiencesContent : <h2>No Experiences</h2>}
					</div>
				</div>
			)}
		</div>
	);
}

export default IndividualBliss;
