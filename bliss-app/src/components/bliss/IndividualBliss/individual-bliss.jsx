import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import {
  cleanBliss,
  fetchOneBliss,
  selectBlissById,
} from "../../../store/blissSlice";

import Business from "../../business/business-card";
import ExperienceCard from "../../experience/experience-card";
import CustomDescription from "../../custom-description/custom-description";
import Header from "../../shared/Section/headers/Header";

function IndividualBliss() {
  const dispatch = useDispatch();
  const [showDescriptions, setShowDescriptions] = useState(true);
  const [showExperiences, setShowExperiences] = useState(false);
  const [showBusinesses, setShowBusinesses] = useState(false);
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
    selectBlissById(state, parseInt(params.id))
  );

  const title = <h1>{bliss?.thingName}</h1>;

  const description = (
    <p className="bliss-description">{bliss?.thingDescription}</p>
  );

  const actionButtons = (
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
  );

  useEffect(() => {
    if (!bliss) {
      dispatch(fetchOneBliss(parseInt(params.id)));
    }
    () => {
      dispatch(cleanBliss());
    };
  }, [dispatch]);

  let customDescriptionContent = bliss?.CustomDescriptions?.map((desc) => (
    <CustomDescription CustomDescription={desc} />
  ));

  let experiencesContent = bliss?.Experiences?.map((exp) => (
    <ExperienceCard experience={exp} />
  ));

  let businessesContent = bliss?.Businesses?.map((business) => (
    <Business business={business} />
  ));

  return (
    <div className="content">
      <Header
        title={title}
        description={description}
        actionButtons={actionButtons}
      />

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
